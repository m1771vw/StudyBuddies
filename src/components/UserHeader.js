import React, { Component } from 'react';
import { DASHBOARD, CREATE_VIEW, PROFILE_VIEW } from '../constants'
import StudyBuddyLogo from '../img/studybuddieslogo.png'
import { func, array } from 'prop-types';

class UserHeader extends Component {
    render() {
        return (
            <nav className='level header-flex-content'>
                <div className=''>
                    <div id="navbarExampleTransparentExample" className="navbar-menu">
                        <div className="navbar-start">
                        <button onClick={() => {this.props.changePageName(DASHBOARD)}} className='button is-rounded is-black header-button'>
                            <i className="fas fa-home is"/></button>
                            <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link is-rounded is-white header-button roboto-font">
                                            Card Sets  
                            </a>
                                <div className="navbar-dropdown is-boxed">
                                <a onClick={() => {this.props.changePageName(CREATE_VIEW)}} className="navbar-item">
                                            Create New
                                            </a>
                                <hr className="dropdown-divider"/>
                                {this.props.flashCardSets.map((cardsets, index) => {
                                    return (
                                            <a onClick={() => {this.props.selectCardSet(index)}} 
                                               key={cardsets+index} 
                                               className="navbar-item">
                                                {cardsets.setname}
                                            </a>
                                    )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='user-home-logo level-item level-right' >
                    <img onClick={() => {this.props.changePageName(DASHBOARD)}} src={StudyBuddyLogo} alt="Logo" width={170+'px'} height={37+'px'}/>
                </div>
                <div className=''>
                    <button onClick={() => {this.props.changePageName(CREATE_VIEW)}} className='button header-button button-border'>+</button>
                    <button onClick={() => {this.props.changePageName(PROFILE_VIEW)}} className='button is-dark header-button'>
                    <i className="fas fa-user-alt"/></button>  
                </div>
            </nav>
        );
    }
}

UserHeader.propTypes = {
    changePageName: func,
    flashCardSets: array,
    selectCardSet: func
};

export default UserHeader;