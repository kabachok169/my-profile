import React from 'react'
import { WithChildren } from '../../types/with-children'

import s from './navigation.module.scss'

type TProps = {
    routes: Record<string, () => void>
}

export const Navigation = ({ routes }: TProps) => {
    console.log(routes);

    return (
        <nav className={s.navigation}>
            {Object.keys(routes).map((key, index) => (
                <div onClick={routes[key]} key={key}>
                    {index}
                </div>
            ))}
        </nav>
    )
}
