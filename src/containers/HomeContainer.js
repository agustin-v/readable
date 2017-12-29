import React, {Component} from 'react'

import Navbar from '../components/Navbar/Navbar'
import ActionBar from '../components/ActionBar/ActionBar'

class HomeContainer extends Component {
    render() {
        return(
            <div>
                {Navbar()}
                {ActionBar({label: 'home', action:'sort'})}
            </div>
        )
    }
}

export default HomeContainer