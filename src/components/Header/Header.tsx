import React, {FC, useState} from 'react';
import cl from "./Header.module.scss"
import {useNavigate} from "react-router-dom";

interface HeaderProps {

}

const Header: FC<HeaderProps> = () => {

    const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false)

    const navigate = useNavigate()

    function NavigateHandler(url: string) {
        setIsMenuVisible(false)
        navigate(url)
    }

    return (
        <div className={cl.wrapper}>
            <nav className={cl.navigation}>
                <div className={cl.burger} onClick={() => setIsMenuVisible(!isMenuVisible)}>
                    {
                        isMenuVisible
                            ? <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                 className="bi bi-x" viewBox="0 0 16 16">
                                <path
                                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                            : <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                   className="bi bi-list" viewBox="0 0 16 16">
                                <path
                                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                            </svg>
                    }
                </div>
                <div className={isMenuVisible ? cl.links : cl.invisible}>
                    <div onClick={() => NavigateHandler("")}  className={cl.navItem}>
                        Главная
                    </div>
                    <div onClick={() => NavigateHandler("compare")} className={cl.navItem}>
                        Сравнение текстов
                    </div>
                    <div onClick={() => NavigateHandler("identical")} className={cl.navItem}>
                        Сколько раз слово встречается в тексте
                    </div>
                    <div onClick={() => NavigateHandler("ascii")} className={cl.navItem}>
                        Генератор ASCII арта
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;