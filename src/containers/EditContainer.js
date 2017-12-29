import React, {Component} from 'react'

import Navbar from '../components/Navbar/Navbar'
import ActionBar from '../components/ActionBar/ActionBar'

class EditContainer extends Component {
    render(){
        return(
            <div> 
                {Navbar()}
                {ActionBar({ label: 'editing...', action:'edit', back: true })}
            </div>
        )
    }
}

export default EditContainer