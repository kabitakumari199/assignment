import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    // const loggingIn = localStorage.getItem('user-token');
    // if(!loggingIn){
    //   this.props.history.push("/");
    // }
        return (
            <nav className="navbar navbar-inverse border-0" style={{'borderRadius':'0px'}}>
                <div className="container-fluid">
                    <div className="navbar-header">
                    <Link className="navbar-brand" to="/myhome">My Assignment</Link>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                    <li><Link to="/logout" ><span className="glyphicon glyphicon-log-in" /> Logout</Link></li>
                    </ul>
                </div>
            </nav>
        );

}

export default Header;