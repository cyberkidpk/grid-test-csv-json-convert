import React, {useState} from "react";
import { grommet } from 'grommet/themes';
import { Grommet, Box, Button } from "grommet";
import { deepMerge } from 'grommet/utils';

import SortedDataTable from "./components/data-table";
import useAxios from "./hooks/getData";

interface TradeData {
  SYMBOL: string,
SERIES: string,
OPEN: string,
HIGH: string,
LOW: string,
CLOSE: string,
LAST: string,
PREVCLOSE: string,
TOTTRDQTY: string,
TOTTRDVAL: string,
TIMESTAMP: string,
TOTALTRADES: string,
ISIN: string,
field14: string
}

interface DataTableProps {
  tblData: TradeData
}


const theme = deepMerge(grommet, {
  global: {
    font: {
      family: "'Roboto', sans-serif;",
      size: "12px"
    },
  },
  heading: {
    extend: "font-family: 'Poppins', sans-serif;",
  }
  });

const centFormula = (obj: any) => {
  const { CLOSE, PREVCLOSE } = obj
  const centFinal = (CLOSE - PREVCLOSE) / PREVCLOSE;
  const twoDecimalFigure = centFinal.toFixed(2)
  return {"cent_column" : twoDecimalFigure}
}
const App = (props: any) => {

  const centChange = (rawData: any) => {
   
    const finalData = rawData.map((obj : any)=>{
       const modifiedData = centFormula(obj)
       const finalObj = {...obj, ...modifiedData};
       
     return finalObj
    })
    return finalData;
  }
  const axiosParam ={
    method: "GET",
    url:"http://localhost:3200/getdata",
    params:{
      urlToSeek:"cm29AUG2022bhav.csv.zip"
    }
  }
  const { response, error, loading } = useAxios(axiosParam);
  const [ tableData, setTableData] = useState<TradeData>()

const  loadData = () => {
  if(response && response?.data){
    const feedToTable = centChange(response?.data)
    setTableData(feedToTable)
  }
}

 return(
  <Grommet theme={theme}>
    <Box align="center" background="graph-2" pad="medium">
      <Button
        label="Call Zip File, Extract, Convert to JSON, and Populate Table   "
        primary 
        onClick={() => loadData()}
      />
    </Box>
    <Box align="center" pad="medium">
      <SortedDataTable tblData={tableData}/>
    </Box>
  </Grommet>
 )
};

export default App;