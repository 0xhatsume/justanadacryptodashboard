import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';


const PriceTable: React.FC = ()=>{
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'Ticker', headerName: 'Ticker', width: 100},
        { field: 'Price', headerName: 'Price', width: 100},
        { field: 'Chg', headerName: 'Chg', width: 100},
        { field: 'Vol', headerName: 'Vol', width: 100},
    ]
    
    const rows = [
        {id: 1, Ticker: "BTC/USD", Price: "100000", Chg: "+20%", Vol: "100000"},
        {id: 2, Ticker: "ETH/USD", Price: "8888", Chg: "+20%", Vol: "100000"},
    ]
    
    return (
        <div style={{ height: 200, width:500}}>
            <DataGrid
                density="compact"
                rows={rows}
                columns={columns}
                disableSelectionOnClick
            />
        </div>
    )
}

export default PriceTable;