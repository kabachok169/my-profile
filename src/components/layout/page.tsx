import React from 'react'
import { WithChildren } from '../../types/with-children'

import s from './layout.module.scss'

export const Page = ({ children }: WithChildren) => {
    return <div className={s.page}>{children}</div>
}
