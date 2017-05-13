/**
 * Importing Router dependencies
 */
import React  from 'react';
import {connect} from 'react-redux';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';


class Routes extends React.Component {
   
  
  _checkAuthentication(nextState, replace){
    if(!this.props.userInformation.authenticated){
        replace('/login')
      }
  }
  shouldComponentUpdate(){
    return false;
  }
    render() {
          
        return (
            <Router history={hashHistory}>
                <Route  name="default" path="/"
                       getComponent={(location, callback) => {
                           require.ensure([], function (require) {
                               callback(null, require('../App').default);
                           }, "default");
                       }}
                >
                <IndexRoute
                        getComponent={(location, callback) => {
                            require.ensure([], function (require) {
                                callback(null, require('../containers/loginContainer').default);
                            }, "loginFallBack");
                        }}
                    />
                <Route name="login" path="/login" 
                       getComponent={(location, callback) => {
                           require.ensure([], function (require) {
                               callback(null, require('../containers/loginContainer').default);
                           }, "login");
                       }}
                />
                <Route onEnter={this._checkAuthentication.bind(this)} name="planets" path="/planets" 
                       getComponent={(location, callback) => {
                           require.ensure([], function (require) {
                               callback(null, require('../containers/planetsContainer').default);
                           }, "planets");
                       }}
                />
                </Route>
               
            </Router>
        )
    }

}

function mapStateToProps(state,ownProps) {
   return {
    userInformation: state.userListReducer.userInformation || {}
    
  }
} 

export  default connect(mapStateToProps,null)(Routes);

