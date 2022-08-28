import React from 'react'
import { Page } from './components/layout/page'
import { AboutSection } from './sections/about/about'

import './styles/reset.css'
import './styles/css-vars.module.scss'
import './styles/common-styles.scss'

export const App = () => {
    return (
        <Page>
            <AboutSection />
        </Page>
    )
}
