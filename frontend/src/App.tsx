import React, {useState} from "react";
import { Grommet, Box, Button } from "grommet";
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

const App = (props: any) => {
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

  setTableData(response?.data)

}

 return(
  <Grommet>
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