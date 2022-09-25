import React, {FC, useEffect, useState} from 'react';
import cl from "./IdenticalPage.module.scss"
import Input from "../../components/UI/Input/Input";
import useInput from "../../hooks/useInput";

interface IdenticalPageProps {

}

const IdenticalPage: FC<IdenticalPageProps> = () => {

    const search = useInput("")
    const text = useInput("")
    const [count, setCount] = useState<number>()

    useEffect(() => {
        setCount(text.value.replaceAll('\n',' ').split(' ').filter( (value) => value === search.value).length)
    }, [search])




    return (
        <div>
            <h1 className={cl.heading}>Сколько раз слово встречается в тексте</h1>
            <div className={cl.contentWrapper}>
                <div className={cl.searchWrapper}>
                    <Input {...search} className={cl.searchInput} type={"search"} placeholder={"Введите строку для поиска в тексте..."}/>
                </div>
                <div className={cl.inputWrapper}>
                    <textarea {...text} className={cl.input} placeholder={"Введите текст..."}/>
                </div>
                <div className={cl.count}> количество раз: {count}</div>
            </div>
        </div>
    );
};

export default IdenticalPage;