import React, {Component} from 'react'

import Navbar from '../components/Navbar/Navbar'
import ActionBar from '../components/ActionBar/ActionBar'

class PostContainer extends Component {
    render(){
        return(
            <div>
                {Navbar()}
                {ActionBar({ label: '', action:'post', back: true })}
            </div>
        )
    }
}

export default PostContainer