import React, {useState} from "react";
import cl from "./Settings.module.scss";
import "./Settings.module.scss";
import {IOption, ISettings, Quality} from "../../../../types/types";
import Checkbox from "../../../UI/Checkbox/Checkbox";
import Select from "../../../UI/Select/Select";
import Button from "../../../UI/Button/Button";
import Input from "../../../UI/Input/Input";

const options: IOption[] = [
    {value: Quality.original, label: "Оригинал"},
    {value: Quality.high, label: "Высокое"},
    {value: Quality.middle, label: "Среднее"},
    {value: Quality.low, label: "Низкое"}
];

interface SettingsProps {
    readonly generateASCII: (settings: ISettings) => Promise<void> | void;
    readonly invertColors: boolean;
    readonly setInvertColors: React.Dispatch<React.SetStateAction<boolean>>;
    readonly setSrc: React.Dispatch<React.SetStateAction<string | null>>;
}

const Settings = ({generateASCII, invertColors, setInvertColors, setSrc}: SettingsProps) => {

    const [invertASCII, setInvertASCII] = useState<boolean>(false);
    const [characters, setCharacters] = useState<string>("%#Wioc-^';:,,, ...   ");
    const [quality, setQuality] = useState<number>(Quality.low);

    const settings: ISettings = {
        invertASCII,
        invertColors,
        characters,
        quality
    };

    function reset(): void {
        setInvertASCII(false);
        setInvertColors(false);
        setCharacters("%#Wioc-^';:,,, ...   ");
        setQuality(Quality.low);
    }

    return (
        <div>
            <h1 className={cl.heading}>Параметры</h1>
            <div className={cl.container}>

                <div className={cl.group}>
                    <div className={cl.label}>
                        <p>Качество</p>
                        <Select value={quality} setValue={setQuality} options={options}/>
                    </div>
                    <div className={cl.label}>
                        <p>Символы</p>
                        <Input value={characters} onChange={(e) => setCharacters(e.target.value)}/>
                    </div>
                </div>

                <div className={cl.group}>
                    <Checkbox
                        checked={invertASCII}
                        setChecked={setInvertASCII}
                    >Инвертировать ASCII</Checkbox>
                    <Checkbox
                        checked={invertColors}
                        setChecked={setInvertColors}
                    >Инвертировать цвета</Checkbox>
                </div>

                <div className={cl.group}>
                    <Button
                        className={cl.button}
                        onClick={() => generateASCII(settings)}
                    >Генерировать</Button>

                    <Button
                        className={cl.button}
                        onClick={reset}
                    >Сбросить</Button>
                    <Button className={cl.button} onClick={() => setSrc(null)}>Загрузить</Button>
                </div>
            </div>
        </div>
    );
}

export default Settings;