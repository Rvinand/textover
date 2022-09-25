import React, {FC, useRef, useState} from 'react';
import cl from "./MainPage.module.scss"
import "./JoditRestyle.scss"
import JoditEditor from "jodit-react";
import Button from "../../components/UI/Button/Button";
import Notification from "../../components/UI/Notification/Notification";


interface MainPageProps {
}

const MainPage: FC<MainPageProps> = () => {

    const editor = useRef(null);
    const result = useRef<HTMLDivElement>(null)
    const [isNotificationVisible, setIsNotificationVisible] = useState(false)

    const config = {
        readonly: false,
        height: 400,
        theme: "dark",
        inline: false,
        placeholder: "Введите любой текст...",
        language: 'ru'
    };

    const handleUpdate = (event: string) => {
        // @ts-ignore
        result.current.innerHTML = event
    };

    async function copyTextToClipboard(text: string) {
        if ('clipboard' in navigator) {
            setIsNotificationVisible(true)
            return await navigator.clipboard.writeText(text);
        } else {
            return document.execCommand('copy', true, text);
        }
    }


    return (
        <div>
            {isNotificationVisible &&
                <Notification message={"Скопировано"} setNotificationVisibility={setIsNotificationVisible} time={1500}/>
            }
            <h1 className={cl.heading}>Редактор текста</h1>
            <div className={cl.editor}>
                <JoditEditor
                    value={""}
                    ref={editor}
                    config={config}
                    onBlur={(e) => handleUpdate(e)}
                    onChange={(newContent) => {
                        handleUpdate(newContent)
                    }}
                />
            </div>
            <div className={cl.copy}>
                <Button onClick={() => copyTextToClipboard(result.current!.innerText)} className={cl.copyButton}>Копировать текст</Button>
                <Button onClick={() => copyTextToClipboard(result.current!.innerHTML)} className={cl.copyButton}>Копировать HTML</Button>
            </div>
            <div className={cl.text}>
                <div ref={result} />
            </div>
        </div>
    );
};

export default MainPage;