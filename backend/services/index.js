var apiservice = require('./apiServices')
var store = [];

const services ={
    resetData : () => {
        store =[];
    },
    setJson : (data) => {
        store.push(data);
    },
    getJson : () => {
        return store
    },
    makeApiCall : apiservice.makeRequest
}

module.exports = services;