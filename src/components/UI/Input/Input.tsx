import React, {ChangeEvent, KeyboardEvent} from 'react';
import cl from "./Input.module.scss"

interface InputProps {
    id?: string
    name?: string
    type?: string
    value?: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void
    placeholder?: string
    className?: string
    multiple?: boolean
    maxLength?: number
    accept?: string
}

const Input = ({
                   id,
                   name,
                   type = "text",
                   value,
                   onChange,
                   onKeyDown,
                   placeholder,
                   className,
                   multiple = false,
                   maxLength,
                   accept
               }: InputProps) => {
    return (
        <input
            id={id}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
            placeholder={placeholder}
            className={[className, cl.input].join(" ")}
            multiple={multiple}
            maxLength={maxLength}
            accept={accept}
        />
    );
};

export default Input;