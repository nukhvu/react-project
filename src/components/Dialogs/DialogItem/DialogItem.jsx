import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const DialogItem = (props) => {
    return <div className={s.item}>
        <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
    </div>
}

export default DialogItem;