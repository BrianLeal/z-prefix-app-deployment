import React from 'react';

import { 
    Card,
    CardContent,
    CardMedia,
    Typography,
    CardActionArea
} from '@mui/material';

// import './components.css'

export default function BlogCards ({title, content, created_at}) {

    return (
        <Card className="postcard" sx={{ 
            minHeight: 200,
            backgroundColor: "#ddd",
            justifyContent: "center",
            alignItems: 'center'
         }}>
            <CardActionArea>
                <CardContent >
                    <Typography  sx={{fontFamily: "monospace"}} data-testid="img-title" gutterBottom variant="h5" maxHeight="300" >
                        <h5>{title}</h5>
                    </Typography>
                    <Typography sx={{fontFamily: "monospace"}} variant="body2" color="text.secondary" >
                        {content}
                    </Typography>
                    <br></br>
                    <br></br>
                    <Typography sx={{fontFamily: "monospace"}} variant="body2" color="text.secondary" >
                        Created on: {created_at}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}