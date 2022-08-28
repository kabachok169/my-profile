import React, { useEffect } from 'react'

export const EXPERIENCE = 'experience'
export const ABOUT = 'about'
export const PORTFOLIO = 'portfolio'

export const useNavigation = () => {
    const scrollToPage = () => {
        const hash = window.location.hash.slice(1)
        document.querySelector(`[data-hash='${hash}']`)?.scrollIntoView({ behavior: 'smooth' })
    }

    const goToAbout = () => {
        window.location.hash = `#${ABOUT}`
        scrollToPage()
    }

    const goToExperience = () => {
        window.location.hash = `#${EXPERIENCE}`
        scrollToPage()
    }

    const goToPortfolio = () => {
        window.location.hash = `#${PORTFOLIO}`
        scrollToPage()
    }

    const routes = {
        [ABOUT]: goToAbout,
        [EXPERIENCE]: goToExperience,
        [PORTFOLIO]: goToPortfolio
    }

    const goToCurrent = () => {
        const hash = window.location.hash.slice(1)
        if (Object.keys(routes).includes(hash)) {
            routes[hash]()
        } else {
            goToAbout()
        }
    }

    const goNext = () => {
        const hash = window.location.hash.slice(1)
        const keys = Object.keys(routes)
        const index = keys.findIndex((key) => key === hash);

        if (index === -1) {
            goToAbout();
        } else if (index === keys.length - 1) {
            return
        } else {
            const hash = keys[index + 1];
            routes[hash]();
        }
    }

    const goBack = () => {
        const hash = window.location.hash.slice(1)
        const keys = Object.keys(routes)
        const index = keys.findIndex((key) => key === hash);

        if (index === -1) {
            goToAbout();
        } else if (index === 0) {
            return
        } else {
            const hash = keys[index - 1];
            routes[hash]();
        }
    }

    return { goToCurrent, goToAbout, goToExperience, goToPortfolio, routes }
}
