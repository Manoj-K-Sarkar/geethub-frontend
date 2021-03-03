import React from 'react'

import styles from "../styles/Home.module.css"

const LanguageCard = ({ language }) => {
    return (
        <div className={styles.languageCard}>
            {language}
        </div>
    )
}

export default LanguageCard
