import React, {Component} from 'react'

import Navbar from '../components/Navbar/Navbar'
import ActionBar from '../components/ActionBar/ActionBar'
import Categorybar from '../components/CategoryBar/CategoryBar'

class HomeContainer extends Component {
    render() {
        return(
            <div>
                {Navbar()}
                {ActionBar({ label: 'home', action:'sort', back: false })}
                {Categorybar()}
            </div>
        )
    }
}

export default HomeContainer