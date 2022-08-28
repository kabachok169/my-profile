import React from 'react'

type ModalContextValue = {
    rootRef: React.MutableRefObject<HTMLDivElement>

    startZIndex: number
}

type OptionalModalProps = {
    numberOfActiveModals?: number
    setNumberOfActiveModals: (value: number) => void
}

const ModalContext = React.createContext<ModalContextValue & OptionalModalProps | null>(null)

export const ModalContextProvider: React.FC<ModalContextValue> = ({
    rootRef,
    children,
    startZIndex = 10000
}) => {
    const [numberOfActiveModals, setNumberOfActiveModals] = React.useState(0)

    const value = {
        rootRef,
        numberOfActiveModals,
        setNumberOfActiveModals,
        startZIndex
    }

    return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
}

export const useModalContext = () => {
    const context = React.useContext(ModalContext)

    if (!context) {
        throw new Error('useModalContext was called without ModalContextProvider')
    }

    return context
}
