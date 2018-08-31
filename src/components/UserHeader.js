import React, { Component } from 'react';
import { DASHBOARD, CREATE_VIEW, PROFILE_VIEW } from '../constants'

class UserHeader extends Component {
    render() {
        return (
            <nav className='level header-flex-content'>
                <div className=''>
                    <div id="navbarExampleTransparentExample" className="navbar-menu">
                        <div className="navbar-start">
                        <button onClick={() => {this.props.changePageName(DASHBOARD)}} className='button is-rounded is-info header-button'>
                            <i class="fas fa-home"></i></button>
                            <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link is-rounded is-white header-button">
                                            Card Sets  
                            </a>
                                <div className="navbar-dropdown is-boxed">
                                <a onClick={() => {this.props.changePageName(CREATE_VIEW)}} className="navbar-item">
                                            Create New
                                            </a>
                                <hr class="dropdown-divider"/>
                                {this.props.flashCardSets.map((cardsets, index) => {
                                    return (
                                            <a onClick={() => {this.props.selectCardSet(index)}} key={cardsets+index} className="navbar-item">
                                                {cardsets.setname}
                                            </a>
                                    )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <button onClick={() => {this.props.changePageName(DASHBOARD)}} className='button is-warning header-button home-logo'>Home Logo</button> 
                </div>
                <div className=''>
                    <button onClick={() => {this.props.changePageName(CREATE_VIEW)}} className='button header-button'>+</button>
                    <button onClick={() => {this.props.changePageName(PROFILE_VIEW)}} className='button is-dark header-button'>Profile</button>  
                </div>
            </nav>
        );
    }
}

UserHeader.propTypes = {

};

export default UserHeader;