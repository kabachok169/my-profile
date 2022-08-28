import React from 'react'
import { WithChildren } from '../../types/with-children'

import s from './layout.module.scss'

type TProps = {
    hashName: string
    onClick?: () => void
}

export const Section = ({ hashName, onClick, children }: TProps & WithChildren) => {
    return <div className={s.section} data-hash={hashName} onClick={onClick}>{children}</div>
}
