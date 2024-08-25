import React from 'react'
import Welcome from '../components/layout/Welcome'

const HomePage = () => {
    return (
        <div>
            <Welcome/>
            <div className="lg:h-[calc(66.66vh-96px)] h-[calc(100vh-80px)] w-full"></div>
        </div>
    )
}

export default HomePage