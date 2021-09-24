import React from 'react';
import cl from './Dialogs.module.css'
import classes from "../Navbar/Navbar.module.css";
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return(
        <div className={cl.dialogs}>
            <div className={cl.dialogsItems}>
                <div className={cl.dialog + ' ' + cl.active }>
                    <NavLink to="/dialogs/1" activeClassName={classes.active}>Dimych</NavLink>
                </div>
                <div className={cl.dialog}>
                    <NavLink to="/dialogs/2" activeClassName={classes.active}>Dimych1</NavLink>
                </div>
                <div className={cl.dialog}>
                    <NavLink to="/dialogs/3" activeClassName={classes.active}>Dimych2</NavLink>
                </div>
            </div>
            <div className={cl.messages}>
                <div className={cl.message}>Hi</div>
                <div className={cl.message}>Hi hi</div>
                <div className={cl.message}>How are you?</div>
            </div>
        </div>
    )
}

export default Dialogs;