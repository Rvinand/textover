import React, {FC, MouseEvent, ReactNode} from 'react';
import cl from "./Modal.module.scss";

interface ModalProps {
    children: ReactNode
    setIsShowModal: (arg0: boolean) => void
}

const Modal: FC<ModalProps> = (
    {
        children,
        setIsShowModal
    }
) => {

    function closeModal(e: MouseEvent) {
        e.preventDefault()
        document.body.classList.remove("no-scroll")
        setIsShowModal(false)
    }

    return (
        <div className={cl.screenWrapper} onClick={(e) => closeModal(e)}>
            <div className={cl.contentWrapper} onClick={(e) => {e.stopPropagation()}}>
                {children}
            </div>
        </div>
    );
};

export default Modal;