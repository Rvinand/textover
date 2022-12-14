import React, { useState } from "react";
import Classes from "./Main.module.scss";
import "./Main.module.scss";
import Upload from "./Upload/Upload";
import Preview from "./Preview/Preview";

const Main = () => {

    const [src, setSrc] = useState<string | null>(null);
    return (
        <main className={Classes.main}>
            {
                src === null ? (
                    <Upload setSrc={setSrc}/>
                ) : (
                    <Preview src={src} setSrc={setSrc}/>
                )
            }
        </main>
    );
}

export default Main;