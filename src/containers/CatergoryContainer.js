import React, {Component} from 'react'

import Navbar from '../components/Navbar/Navbar'
import ActionBar from '../components/ActionBar/ActionBar'

class CategoryContainer extends Component {
    render(){
        return(
            <div>
                {Navbar()}
                {ActionBar({ label: 'activeCategory', action:'sort', back: true })}
            </div>
        )
    }
}

export default CategoryContainer