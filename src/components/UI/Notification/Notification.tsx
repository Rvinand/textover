import React, {FC} from 'react';
import cl from "./Notification.module.scss"

interface IMessageModal {
    message: string
    setNotificationVisibility: (arg: boolean) => void
    time: number
}

const Notification:FC<IMessageModal> = ({message, setNotificationVisibility, time}) => {

    setTimeout(() => {
        setNotificationVisibility(false)
    }, time)

    return (
        <div className={cl.wrapper}>
            <span className={cl.text}>{message}</span>
        </div>
    );
};

export default Notification;