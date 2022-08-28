import React from 'react'
import ReactDOM from 'react-dom'
import { useModalContext } from './provider'
import { ModalElementType } from './types'

type RenderModalCallBack<T extends any> = (close: (value: T | PromiseLike<T>) => void ) => React.ReactElement

export const useModal = () => {
    const { rootRef, numberOfActiveModals, setNumberOfActiveModals, startZIndex } = useModalContext()

    const openModal = async <RT extends any>(renderModal: RenderModalCallBack<RT>): Promise<RT> => {
        const container = document.createElement('div')
        
        const closingPromise = new Promise<RT>(resolve => {
            rootRef.current.appendChild(container)
            container.setAttribute('zIndex', (numberOfActiveModals * startZIndex).toString());
            ReactDOM.render(renderModal(resolve), container)
        }).then((data: RT) => {
            ReactDOM.unmountComponentAtNode(container);
            setNumberOfActiveModals((numberOfActiveModals - 1) || 0)

            return data
        })

        return closingPromise
    }

    return openModal
}
