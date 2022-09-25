import React from "react";
import cl from "./Upload.module.scss";
import "./Upload.module.scss";
import FormUpload from "./FormUpload/FormUpload";

interface FormUploadProps {
    readonly setSrc: React.Dispatch<React.SetStateAction<string | null>>;
}

const Upload = ({ setSrc }: FormUploadProps) => {
    return (
        <div className={cl.upload}>
            <h1 className={cl.heading}>Генератор ASCII арта по изображению</h1>
            <FormUpload setSrc={setSrc}/>
        </div>
    );
}

export default Upload;