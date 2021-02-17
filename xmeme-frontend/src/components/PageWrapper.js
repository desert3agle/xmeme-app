import React, { Component } from 'react';
import logo from '../components/assets/logo/580b585b2edbce24c47b2a2f.png'
import Navbar from './Navbar';

//wraps every children component as a single component
class PageWrapper extends Component {
    render() {
        return (
            <div >
                <Navbar
                    image={logo}
                />
                {this.props.children}
            </div>
        );
    }
}

export default PageWrapper;
