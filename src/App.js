
import React  from 'react';
import { connect } from 'react-redux';
import {USER_LIST_URL} from './constants/configConstants';
import {getUsers} from './actions/userActions';


  class App extends React.Component{ 
  /**
   * Called once before rendering of component,used to displatch fetch action
   * @return {[type]}
   */

   

      
  componentDidMount(){
      this.props.getUsers({url:USER_LIST_URL});
  }


    /**Render method called when component react renders
     * @return {[type]}
     */
     render(){
       return (

        <div className="mainContainer">
        {this.props.children}
        </div>

        );
     }
   };

 
/**
 * Function to dispatch action values as props
 */
 function mapDispatchToProps(dispatch){
  return {
    getUsers: function(params){ dispatch(getUsers(params)); }
  }
};
export  default connect(null,mapDispatchToProps)(App);

