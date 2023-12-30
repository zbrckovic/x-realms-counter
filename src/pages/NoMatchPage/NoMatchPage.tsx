import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NoMatchPage.module.sass'

export const NoMatchPage = () =>
    <div className={ styles.root }>
        <h1>Are you lost?</h1>
        <p>Nothing to see here</p>
        <Link to="/">Go to the home page</Link>
    </div>
