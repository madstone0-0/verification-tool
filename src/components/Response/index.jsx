import React from "react";
import createDomPurify from "dompurify";
import { Typography, Card, CardContent } from "@mui/material";

const Response = ({ output }) => {
    return (
        <Card
            variant="outlined"
            sx={{
                alignSelf: "center",
                display: "inline-block",
                mx: "2px",
                mt: 2,
                maxWidth: 800,
                backgroundColor: "credibility.unsure",
                color: "primary.contrastText",
            }}
        >
            <CardContent>
                <Typography
                    textAlign="justify"
                    variant="subtitle1"
                    component="div"
                    dangerouslySetInnerHTML={{
                        __html: createDomPurify.sanitize(output),
                    }}
                ></Typography>
            </CardContent>
        </Card>
    );
};

export default Response;
