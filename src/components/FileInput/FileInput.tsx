import React, {FC, useState, DragEvent} from 'react';
import cl from "./FileInput.module.scss"

interface FileInputParams {
    className?: string
    accept?: string
    multiple?: boolean
    setFiles: (files: File[]) => void
}

const FileInput: FC<FileInputParams> = (
    {
        className,
        accept,
        multiple = false,
        setFiles
    }) => {

    const [isDrag, setIsDrag] = useState<boolean>(false)

    const dragStartHandler = (e: DragEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsDrag(true)
    }
    const dragLeaveHandler = (e: DragEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsDrag(false)
    }
    const dropHandler = (e: DragEvent<HTMLFormElement>) => {
        e.preventDefault()
        const files = Array.from(e.dataTransfer.files)

        setFiles(files)

        setIsDrag(false)
    }
    const fileSelectionHandler = (e: React.FormEvent<HTMLLabelElement | HTMLDivElement>) => {
        const inputFiles = (e.target as HTMLInputElement).files

        if (inputFiles) {
            const files: File[] = []
            for (let i = 0; i < inputFiles.length; i++) {
                files.push(inputFiles[i])
            }

            setFiles(files)
        }
    }


    return (
        <form
            className={[cl.wrapper, className, isDrag && cl.dragActive].join(" ")}
            onDragStart={e => dragStartHandler(e)}
            onDragLeave={e => dragLeaveHandler(e)}
            onDragOver={e => dragStartHandler(e)}
            onDrop={e => dropHandler(e)}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor"
                 className={["bi", "bi-upload", cl.icon].join(" ")}
                 viewBox="0 0 16 16">
                <path
                    d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                <path
                    d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/>
            </svg>
            <div>
                <label>
                    <input
                        onChange={e => fileSelectionHandler(e)}
                        type="file"
                        className={cl.input}
                        multiple={multiple}
                        accept={accept}
                    />
                    <span className={cl.checkFileText}>Выберите файл </span>
                </label>
                <span className={cl.dragFileText}>или перетащите его сюда</span>
            </div>
        </form>
    );
};

export default FileInput;