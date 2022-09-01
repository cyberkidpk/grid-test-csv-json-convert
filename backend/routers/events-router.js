"use strict";
var eventsRouter = require("express").Router();
var eventsData = require("../data/events-data");
var services = require("../services");
var commonutils = require("../utils/common")
var converter = require("csvtojson");

var _ = require("lodash");

var request = require("request");

var JSZip = require("jszip");
var events = eventsData;
var id = 12;

var store = {};

const onError =() =>{

  console.log("error")
}
const onComplete =(res)=>{
  res.send(services.getJson())
}
//cm29AUG2022bhav.csv
const final = async function (body, res, csvFileName) {
  services.resetData(); 
  var zipResolve = JSZip.loadAsync(body)
    .then(function (zip) {
      return zip.file(csvFileName).async("string");
    })
    .then(function (text) {
      converter({ output: "json" })
        .fromString(text)
        .subscribe((csvjson) => {
          services.setJson(csvjson)   
        }, onError, onComplete.bind(this, res));
    });
};

eventsRouter.get("/getdata", function (req, res) {

 const {fileToSeek, portToSeek, urlToSeek, secure} = req.query
  const proto = secure == 'yes' ? 'https':'http';
  const finalPort = portToSeek ? `:${portToSeek}`: '';
  const config = `${proto}://${urlToSeek}${finalPort}/${fileToSeek}`;

 const serviceRes = services.makeApiCall(req.query)
 console.log(config);
 const csvFileName = commonutils.getCSVFileName(fileToSeek)

 request(
  {
    method: "GET",
    url: config,
    encoding: null, // <- this one is important !
  },
  function (error, response, body) {
    if (error || response.statusCode !== 200) {
      // handle error
      return;
    }
    final(body, res, csvFileName);
       }
);
  // if ( serviceRes.statusCode !== 200) {
  //   // handle error
  //   return;
  // }
  // final(body, res, csvFileName);
});


eventsRouter.use(function (err, req, res, next) {
  if (err) {
    res.status(500).send(err);
  }
});

module.exports = eventsRouter;
