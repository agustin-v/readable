import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './actionBar.css'


const Actions = ({ action, votes, time }) => {
    switch (action){
        case 'sort':
            return (
                <div styleName='actions'>
                    <div>
                        <span className='lnr lnr-calendar-full'></span>
                        <span styleName ='actionable' className={time? 'lnr lnr-chevron-down':'lnr lnr-chevron-up' }></span>
                    </div>
                    <div>
                        <span className='lnr lnr-thumbs-up'></span>
                        <span styleName ='actionable' className={votes? 'lnr lnr-chevron-down':'lnr lnr-chevron-up' }></span>
                    </div>
                </div> 
            );
        case 'post':
        return(
            <div styleName='actions'>
                <div>
                    <span styleName ='actionable' className="lnr lnr-pencil"></span>
                </div>
                <div>
                    <span styleName ='actionable' className="lnr lnr-cross"></span>
                </div>
            </div> 
        )
        case 'edit':
        return(
            <div styleName='actions'>
                <div >
                    <span styleName ='actionable' className="fa fa-floppy-o" aria-hidden="true"></span>
                </div>
                <div>
                    <span styleName ='actionable' className="lnr lnr-cross"></span>
                </div>
            </div> 
        )
        default:
            return null;
    }
}

export default CSSModules (Actions, styles)