import React, { useState } from "react";
import cl from "./FormUpload.module.scss";
import "./FormUpload.module.scss";
import { readImage } from "../../../../utils/ImageManager";

interface FormUploadProps {
    readonly setSrc: React.Dispatch<React.SetStateAction<string | null>>;
}

const FormUpload = ({ setSrc }: FormUploadProps) => {
    const [dropping, setDropping] = useState<boolean>(false);
    const classList = [cl.form];
    if (dropping) classList.push(cl.dropping);

    async function uploadImage(event: React.ChangeEvent<HTMLInputElement>) {
        setDropping(false);
        const files = event.target.files;
        if (files === null) return;
        const result = await readImage(files[0]);
        if (!(result instanceof ArrayBuffer)) setSrc(result);
    }

    function dragEnter(): void {
        setDropping(true);
    }

    function dragLeave(): void {
        setDropping(false);
    }

    return (
        <div className={cl.upload}>
            <h1 className={cl.header}>Загрузка изображения</h1>
            <div className={classList.join(" ")}>
                <input
                    className={cl.input}
                    type="file"
                    accept="image/*"
                    onDragEnter={dragEnter}
                    onDragLeave={dragLeave}
                    onChange={uploadImage}
                />
                <span className={cl.label}>
                    Перетащите файл<br/>или <span className={cl.span}>Выберете</span>
                </span>
            </div>
        </div>
    );
}

export default FormUpload;