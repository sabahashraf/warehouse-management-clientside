import React from "react";
import { Helmet } from "react-helmet-async";

const Pagetitle = ({ title }) => {
  return (
    <div>
      <Helmet>
        <title>{title}-warehouse-management</title>
      </Helmet>
    </div>
  );
};

export default Pagetitle;
