import React from 'react'

import { Section } from '../../components/layout/section'
import { EXPERIENCE, useNavigation } from '../../hooks/use-navigation'

import s from './experience.module.scss'

export const ExperienceSection = () => {
    const { goToPortfolio } = useNavigation()

    return <Section hashName={EXPERIENCE} onClick={goToPortfolio}>Experience</Section>
}
