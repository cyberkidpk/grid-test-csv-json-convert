import React, { useState } from 'react';

import { Box, DataTable, Text, Meter} from 'grommet';
import { ColumnConfig } from '../interfaces/ColumnConfig'
import { grommet } from "grommet/themes";
// This story uses TypeScript
const amountFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
});

interface RowType {
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
const columns: ColumnConfig<RowType>[] = [
  {property: 'SYMBOL',
  header:"SYMBOL"
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

{property: 'TIMESTAMP',
header:"TIMESTAMP"
},
{property:"TOTALTRADES",
header: "TOTALTRADES"},
{property:"ISIN",
header: "ISIN"},
{property:"field14",
header: "field14"}
]

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
    direction: 'desc'
  });
   return (
    // Uncomment <Grommet> lines when using outside of storybook
    // <Grommet theme={grommet}>
    <Box align="center" pad="large">
      
      <DataTable 
        // columns={columns.map((c) => ({
        //   ...c,
        //   search: c.property === 'name' || c.property === 'location',
        // }))}
        columns={columns}
        data={props.tblData}
        //sort={sortData}
        onSort={setSort}
        resizeable
      />

    </Box>
    // </Grommet>
  );
};

export default SortedDataTable