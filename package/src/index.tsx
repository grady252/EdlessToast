import React, { useEffect, useState } from "react";
import DefaultToast from './DefaultToast'

export type ToastSettings = {
    text: string;
};

interface Props {
    children?: React.ReactNode,
    toastElement?: JSX.Element,
    toastVisableTime?: number,
    toastFadeOutTime?: number,
}

interface ContextState {
    openToast: (options: any) => void,
    closeToast: () => void
}

const Ctx = React.createContext({} as ContextState);

export function ToastProvider({ children,
    toastElement = <DefaultToast />,
    toastVisableTime = 5000,
    toastFadeOutTime = 500
}: Props) {
    const [visable, setVisable] = useState(false);
    const [shouldBeClosed, setShouldBeClosed] = useState(false);
    const [props, setProps] = useState<any>({})

    const openToast = (options: any) => {
        setProps(options);
        setVisable(true);
    };

    useEffect(() => {
        if (visable)
            setVisable(false);
    }, [visable])

    const closeToast = () => {
        setShouldBeClosed(true);
    }

    useEffect(() => {
        if (shouldBeClosed)
            setShouldBeClosed(false);
    }, [shouldBeClosed])

    return (
        <Ctx.Provider value={{ openToast, closeToast }}>
            {children}
            <div style={{
                opacity: visable ? 1 : 0,
                transition: shouldBeClosed ? '' : visable ? 'opacity 0s' : `opacity ${toastFadeOutTime}ms ${toastVisableTime}ms`
            }}>
                <toastElement.type {...props} />
            </div>
        </Ctx.Provider>
    );
}

export const useToast = () => React.useContext(Ctx);