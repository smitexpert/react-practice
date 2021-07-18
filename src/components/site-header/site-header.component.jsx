import React from 'react'

import HeaderLogo from '../header-logo/header-logo.component'
import Navigation from '../navigation/navigation.component'

const SiteHeader = ({navigation}) => {
    return (
        <div className="container mx-auto flex justify-start items-center h-16 bg-gray-500">
            <HeaderLogo className="w-1/3" />
            <Navigation className="w-2/3" navigation={navigation} />
        </div>
    )
}

export default SiteHeader
