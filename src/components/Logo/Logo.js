import React from "react";
import classes from './Logo.module.css';
import experianLogo from "../../assets/logos/favicon-144x144.png";

const logo = (props)=>(
    <div className={classes.Logo}>
        <img src={experianLogo} alt="Experian Docs Main Page"/>
    </div>
);

export default logo;
