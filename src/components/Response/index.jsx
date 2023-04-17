import React from "react";

const Response = ({ output }) => {
    return <div dangerouslySetInnerHTML={{ __html: output }}></div>;
};

export default Response;
