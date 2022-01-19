import React from 'react';


import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';


const HorizontalPriceSection: React.FC<{title:string}> = 
    ({title, children}) => {
    return (
        <Card variant="outlined" sx={{ marginBlock:1, width: '98%', height: '30vh' }}>
            <CardHeader title={title}
                titleTypographyProps={{ 
                    variant:'subtitle2', fontSize:10, color:"white",
                }}
                sx={{ paddingBlock:1.5, paddingInlineStart:2, height: "0.8em", bgcolor: "#64748B"}}/>
            <CardContent>
                {children}
            </CardContent>
        </Card>
    )
}

export default HorizontalPriceSection;