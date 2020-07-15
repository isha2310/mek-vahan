import React from 'react'
import { Router } from '@reach/router'
import Home from './Home'
import ManageAddress from './Components/ManageAddress'

const Route = () => {
    return (
        <Router>
            <Home path="/" />
            <ManageAddress path="/manageAddress" />
        </Router>
    )
}

export default Route