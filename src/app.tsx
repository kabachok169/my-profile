import React from 'react'
import { Page } from './components/layout/page'
import { AboutSection } from './sections/about/about'
import { ExperienceSection } from './sections/experience/experience'
import { PortfolioSection } from './sections/portfolio/portfolio'
import { useNavigation } from './hooks/use-navigation'
import { Navigation } from './components/navigation/navigation'

import './styles/reset.css'
import './styles/css-vars.module.scss'
import './styles/common-styles.scss'

export const App = () => {
    const { goToCurrent, routes } = useNavigation()

    React.useEffect(() => {
        goToCurrent()
    }, [])
    
    return (
        <Page>
            <AboutSection />
            <ExperienceSection />
            <PortfolioSection />
            <Navigation routes={routes} />
        </Page>
    )
}
