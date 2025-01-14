import React from 'react';
import s from "./Dialogs.module.css";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    const dialogs  = [
        {id:'1', name:"Noha" },
        {id:'2', name:"musa"},
    ]

    const messages = [
        {id:'1', message:"HI"},
        {id:'2', message:"How are you?"},
    ]
    let dialogElements= dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
    let messageElements = messages.map(m => <Message message={m.message}  />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialog}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs;