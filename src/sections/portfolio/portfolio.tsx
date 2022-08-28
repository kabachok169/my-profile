import React from 'react'

import { Section } from '../../components/layout/section'
import { PORTFOLIO, useNavigation } from '../../hooks/use-navigation'

import s from './portfolio.module.scss'

export const PortfolioSection = () => {
    const { goToAbout } = useNavigation()

    return <Section hashName={PORTFOLIO} onClick={goToAbout}>Portfolio</Section>
}
