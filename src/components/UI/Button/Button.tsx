import React, {MouseEvent} from 'react';
import cl from "./Button.module.scss"

interface ButtonProps{
    type?: "button" | "submit" | "reset" | undefined
    children: string
    styles?: CSSStyleSheet
    className?: string
    disabled?: boolean
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

const Button = ({
                    type,
                    children,
                    className,
                    disabled,
                    styles,
                    onClick
                }: ButtonProps) => {
    return (
        <button className={[className, cl.button].join(" ")} {...{onClick, disabled, styles, type}}>
            {children}
        </button>
    );
};

export default Button;