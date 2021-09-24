import React from 'react';
import cl from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return <div className={cl.dialog + ' ' + cl.active}>
        <NavLink to={path} activeClassName={cl.active}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={cl.message}>{props.message}</div>
}

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Nina'},
        {id: 4, name: 'Dimych'},
        {id: 5, name: 'Katya'}
    ];

    let messagesData = [
        {id: 1, message: 'Hi there!'},
        {id: 2, message: 'Hi yo!'},
        {id: 3, message: 'Hi now!'},
        {id: 4, message: 'Hallo'},
        {id: 5, message: 'Hi by'},
    ];

    //пережимаю методом map в новый массив оформленнй как тэг вызова компонент
    let dialogElements = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = messagesData.map(message => <Message message={message.message} id={message.id}/>);

    /*let dialogElements = [//не катит
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>,
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>,
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>,
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>,
    ];*/

    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItems}>
                {dialogElements}
                {/*<DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name="Sveta" id="2"/>
                <DialogItem name="Nina" id="3"/>
                <DialogItem name="Katya" id="4"/>*/}
            </div>
            <div className={cl.messages}>
                {messagesElements}
                {/*<Message id={messagesData[0].id} message={messagesData[0].message}/>
                <Message id={messagesData[1].id} message={messagesData[1].message}/>
                <Message id={messagesData[2].id} message={messagesData[2].message}/>
                <Message id={messagesData[3].id} message={messagesData[3].message}/>
                <Message message="Hi!"/>
                <Message message="Hi 1!"/>
                <Message message="Hi 2!"/>
                <Message message="Hi 3!"/>*/}
            </div>
        </div>
    )
}

export default Dialogs;