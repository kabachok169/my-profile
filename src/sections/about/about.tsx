import React from 'react'

import { Section } from '../../components/layout/section'
import { ABOUT, useNavigation } from '../../hooks/use-navigation'

import s from './about.module.scss'

export const AboutSection = () => {
    const { goToExperience } = useNavigation()

    return <Section hashName={ABOUT} onClick={goToExperience}>About Me</Section>
}
