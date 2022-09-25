import React, { useContext, useEffect } from "react";
import cl from "./ImageHolder.module.scss";
import { IASCII, IScale } from "../../../../types/types";
import { resizeText } from "../../../../utils/Common";
import { getScale } from "../../../../utils/ImageManager";
import { AppContext, IAppContext } from "../../../../context";

interface ImageHolderProps {
    readonly src: string;
    readonly ascii: IASCII;
    readonly containerRef: React.RefObject<HTMLDivElement>;
    readonly invertColors: boolean;
}

const ImageHolder = ({ src, ascii, containerRef, invertColors }: ImageHolderProps) => {

    const { loading, setLoading } = useContext(AppContext) as IAppContext;

    useEffect(() => {
        if (ascii.data.length && containerRef.current !== null) {
            setLoading(true);
        }
    }, [ascii.data, containerRef.current]);

    useEffect(() => {
        if (loading && ascii.data.length && containerRef.current !== null) {
            resizeText(containerRef.current);
            setLoading(false);
        }
    }, [loading])

    const imageScale: IScale = {
        width: ascii.width * 2 + 15,
        height: ascii.height
    };

    const scale = getScale(imageScale, { width: 600, height: 600 }) || 1;

    const classList = [cl.container];
    if (loading) classList.push(cl.hidden);
    if (invertColors) classList.push(cl.inverted);

    return (
        <div
            className={cl.preview}
            style={{ width: imageScale.width * scale, height: imageScale.height * scale }}
        >
            <div className={cl.wrapper}>

                <div className={cl.containerWrapper} style={{transform: `scale(${scale})`}}>

                    <div className={cl.table}>
                        <div
                            className={cl.container}
                            style={{ width: ascii.width, height: ascii.height }}
                        >
                            <img draggable={false} className={cl.img} src={src}/>
                        </div>
                    </div>


                    <div className={cl.table}>
                        <div
                            className={classList.join(" ")}
                            ref={containerRef}
                            style={{width: ascii.width, height: ascii.height}}
                        >
                        {
                            ascii.data.map((char, i) => <div key={i}>{ char }</div>)
                        }
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ImageHolder;