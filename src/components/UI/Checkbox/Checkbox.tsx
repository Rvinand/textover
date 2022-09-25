import React, { FC } from "react";
import cl from "./Checkbox.module.scss";
import "./Checkbox.module.scss";

interface CheckboxProps {
    readonly checked: boolean;
    readonly setChecked: React.Dispatch<React.SetStateAction<boolean>>;
    readonly children: React.ReactNode;
}

const Checkbox: FC<CheckboxProps> = ({ checked, setChecked, children }) => {
    return (
        <label className={cl.container}>
            <input
                className={cl.checkbox}
                type="checkbox"
                onChange={(event) => setChecked(event.target.checked)}
                checked={checked}
            />
            <span className={cl.checkmark}></span>
            <span className={cl.text}>{ children }</span>
        </label>
    );
}

export default Checkbox;