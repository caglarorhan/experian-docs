import React from "react";
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';

const toolbar = (props)=>(
    <header className={classes.Toolbar}>
        <div className={classes.Logo}><Logo/></div>
        <div className={classes.header}>Experian Documents</div>
        <nav className={classes.DesktopOnly}>

        </nav>
    </header>
);

export default toolbar;
