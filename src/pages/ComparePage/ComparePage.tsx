import React, {FC} from 'react';
import cl from "./ComparePage.module.scss"
import useInput from "../../hooks/useInput";
// @ts-ignore
import {diffChars} from "diff"

interface ComparePageProps {

}

const ComparePage: FC<ComparePageProps> = () => {

    const firstText = useInput("")
    const secondText = useInput("")

    const diff = diffChars(firstText.value, secondText.value)

    return (
        <div>
            <h1 className={cl.heading}>Сравнение текстов</h1>
            <div className={cl.content}>
                <div className={cl.inputs}>
                    <textarea {...firstText} className={cl.input} placeholder={"Введите первый текст..."}/>
                    <textarea {...secondText} onChange={(e) => secondText.onChange(e)} className={cl.input}
                              placeholder={"Введите второй текст..."}/>
                </div>
            </div>
            <div className={cl.text}>
                {
                    diff.map((part: { added: any; removed: any; value: string; }, i: number) => {
                        const color = part.added ? 'green' :
                            part.removed ? 'red' : 'grey';

                        return <span key={i} style={{
                            color: color
                        }}>{part.value}</span>

                    })
                }
            </div>

        </div>
    );
};

export default ComparePage;