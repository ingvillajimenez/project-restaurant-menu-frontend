import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Menu extends React.Component {
    handleLogout = () => {
        localStorage.removeItem('token');
        this.props.history.push('/');
    }

    render() {
        return(
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/profile'>Profile</Link>
                    </li>
                    <li>
                        <Link to='/dashboard'>Dashboard</Link>
                    </li>
                    <li>
                        <Link to='/signup'>Signup</Link>
                    </li>
                    <li>
                        <Link to='/login'>Login</Link>
                    </li>
                    <li>
                        <button onClick={ this.handleLogout }>Logout</button>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default withRouter(Menu);