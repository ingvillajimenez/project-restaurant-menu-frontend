import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import isLoggedIn from '../utils/isLoggedIn';

class PrivateRoute extends React.Component {
    render() {
        const PrivateComponent = this.props.component; 

        return(
            <Route path={ this.props.path } exact={ this.props.exact } component={ props => {
                if(isLoggedIn()) {
                    return <PrivateComponent {...props} />
                }

                const redirectTo = window.encodeURIComponent(this.props.path);
                
                return <Redirect to={`/login?redirectTo=${ redirectTo }`} />
            } } />
        );
    }
}

export default PrivateRoute;