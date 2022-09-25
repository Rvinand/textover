import React, {FC} from 'react';
import cl from "./Sidebar.module.scss"

interface SidebarProps {

}

const Sidebar: FC<SidebarProps> = () => {
    return (
        <div className={cl.wrapper}>
            Sidebar
        </div>
    );
};

export default Sidebar;