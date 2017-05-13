import React  from 'react';
import { connect } from 'react-redux';
import LoginForm from '../components/login/loginForm';
import {VALIDATION_CODES}  from '../constants/frontEndConstants';
import {authenticateUser} from '../actions/userActions'






class LoginContainer extends React.Component{
	 
    
   
    componentWillReceiveProps(nextProps) {
    /**
     * Checking if the user is loggedin 
     * and redirecting to main page
     */
      if(nextProps.userInformation.authenticated){
        this.context.router.push('/planets')
      }
      
    }
  _handleSubmit(credentials){
      this.props.authenticateUser(credentials);
    }

    /**
     * Checks for the changes in the language selection
     * and dispatches the corresponding action.
     * @param  {String} sLocale sLocale has to be of pattern 'en-US'
     */
  
 	render(){
        var errorObj = this.props.userInformation || {};
        return (
          <div>
             
            <div className='gor-login-form'>
              <LoginForm errorMessage={errorObj.authMsg} validationCodes={VALIDATION_CODES} onSubmitHandler={this._handleSubmit.bind(this)} />
            </div>
          </div>
		);
	}

};
/**
 * [Passing Router to component through context]
 * @type {Object}
 */




/**
 * [mapStateToProps function to pass state values as props]
 * @param  {[Object]} state    [Overall state of the application]
 * @return {[type]}          [description]
 */
function mapStateToProps(state) {
   return {
    userInformation: state.userListReducer.userInformation
    
  }
} 
/**
 * [mapDispatchToProps function to pass actions as props]
 * @param  {[function]} dispatch [function to dispacth actions]
 * @return {[type]}          [description]
 */
 function mapDispatchToProps(dispatch){
  return {
    authenticateUser: function(credentials){ dispatch(authenticateUser(credentials)); }
  }
};
LoginContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}
export  default connect(mapStateToProps,mapDispatchToProps)(LoginContainer);


