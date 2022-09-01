import React, { useState } from 'react';

import { Box, DataTable, Text, Meter} from 'grommet';
import { ColumnConfig } from '../interfaces/ColumnConfig'


interface RowType {
  SYMBOL: string,
SERIES: string,
OPEN: string,
HIGH: string,
LOW: string,
cent_column: string,
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

const formattedComponent = (obj: any) =>{
  const intCentCol = Number(obj.cent_column);
  if (intCentCol >= 0) {
   return <Text style={{background:'green', color:'#efe', textAlign:'center'}}> {obj.cent_column}</Text>
  } else {
    return <Text style={{background:'red', color:'#efe', textAlign:'center'}}> {obj.cent_column}</Text>
  }
}
const columns: ColumnConfig<RowType>[] = [

  {property: 'SYMBOL',
  header:"SYMBOL"
},
{property: 'TIMESTAMP',
header:"TIMESTAMP"
},
{property: 'SERIES',
header:"SERIES"
},
{property: 'OPEN',
header:"OPEN"
},
{property: 'HIGH',
header:"HIGH"
},
{property: 'LOW',
header:"LOW"
},
{property: 'CLOSE',
header:"CLOSE"
},
{property: 'cent_column',
header:'% Change',
render: (datum) => {
  return formattedComponent(datum)
}
},

{property: 'LAST',
header:"LAST"
},
{property: 'PREVCLOSE',
header:"PREVCLOSE"
},
{property: 'TOTTRDQTY',
header:"TOTTRDQTY"
},
{property: "TOTTRDVAL",
header:"TOTTRDVAL"
},


// {property:"TOTALTRADES",
// header: "TOTALTRADES"},
// {property:"ISIN",
// header: "ISIN"},
// {property:"field14",
// header: "field14"}
]


//Data for testing purpose
const DATA = [{"SYMBOL":"20MICRONS",
"SERIES":"EQ",
"OPEN":"101.1",
"HIGH":"111.05",
"LOW":"101.1",
"CLOSE":"108.25",
"LAST":"109",
"PREVCLOSE":"106.6",
"TOTTRDQTY":"702877",
"TOTTRDVAL":"75014750.85",
"TIMESTAMP":"29-AUG-2022",
"TOTALTRADES":"9464",
"ISIN":"INE144J01027",
"field14":""}
];

export const SortedDataTable = (props: { tblData: any }) => {
 
  const [sortData, setSort] = useState({
    property: 'SYMBOL',
    direction: 'asc'
  });
   return (
    <Box align="center" pad="large" width="medium"> 
      <DataTable 
        columns={columns}
        data={props.tblData}
        onSort={setSort}
        resizeable
      />

    </Box>

  );
};

export default SortedDataTable