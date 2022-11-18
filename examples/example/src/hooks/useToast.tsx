import React, { useEffect, useState } from "react";
import DefaultToast from './DefaultToast'

export type ToastSettings = {
    text: string;
};

interface Props {
    children?: React.ReactNode,
    toastElement?: JSX.Element
}

interface ContextState {
    openToast: () => void
}

const Ctx = React.createContext({} as ContextState);

export function ToastProvider({ children, toastElement = <DefaultToast /> }: Props) {
    const [visable, setVisable] = useState(false);

    const openToast = () => {
        setVisable(true);
    };

    useEffect(() => {
        if (visable)
            setVisable(false);
    }, [visable])

    return (
        <Ctx.Provider value={{ openToast }}>
            {children}
            <div className={visable ? "ToastWrapper ToastWrapperVisable" : "ToastWrapper"}>
                Hello
            </div>
        </Ctx.Provider>
    );
}

export const useToast = () => React.useContext(Ctx);