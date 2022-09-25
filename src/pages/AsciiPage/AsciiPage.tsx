import React, {FC, useState} from 'react';
import {AppContext} from "../../context";
import Main from "../../components/Main/Main";
import LoadingPopup from "../../components/LoadingPopup/LoadingPopup";

interface AsciiPageProps {

}

const AsciiPage: FC<AsciiPageProps> = () => {
    const [loading, setLoading] = useState<boolean>(false);
    return (
        <AppContext.Provider
            value={{
                loading,
                setLoading
            }}
        >
            <Main/>
            {
                loading && (
                    <LoadingPopup/>
                )
            }
        </AppContext.Provider>
    );
};

export default AsciiPage;