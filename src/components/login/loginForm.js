import React  from 'react';
import formValidation from './formValidation'

class LoginForm extends React.Component{
   constructor(props) 
   {
      super(props); 
      /*Setting default state values*/
      this.state={
        "userName":"",
        "password":"",
        "error":this.props.errorMessage
      }     
   }
  /**
   * Function to to update local state on change
   * @param  {[event]} e [description]
   * @return {[void]}   [description]
   */
  _handleChange(e){
    this.setState({[e.target.name]: e.target.value.trim()});
  }
  /**
   * [_isValid private function to validate inputs]
   * @return {Object} [description]
   */
  _isValid(){
    var error = formValidation(this.state);
    var validationCodes = this.props.validationCodes;
    var errMsg = validationCodes[error];
    var isError = errMsg ? true :false;
    
    return {
      isError:isError,
      errMsg : errMsg
    }


  }
  /**
   * [_handleSubmit private function to handle submit]
   * @param  {[event]} e [description]
   * @return {[type]}   [description]
   */
  _handleSubmit(e){
     e.preventDefault();
     var isValid = this._isValid();
    if(!isValid.isError){
      let credentials= Object.assign({}, this.state);
      this.props.onSubmitHandler(credentials);
    }
    else{
      this.setState({
        error:isValid.errMsg
      })
    }
  }
/**
 * [componentWillReceiveProps Lifecycle method to check changes in props]
 * @param  {[type]} nextProps [description]
 * @return {[type]}           [description]
 */
  componentWillReceiveProps(nextProps){
    this.setState({
      "error" : nextProps.errorMessage
    })
  }

  render(){
        const {userName,password,error} = this.state;

        return (
           <div className="login">
                <div className="heading">
                  <h2>Sign in</h2>
                  <form onSubmit={(e) => this._handleSubmit(e)} >

                    <div className="input-group input-group-lg">
                      <span className="input-group-addon"><i className="fa fa-user"></i></span>
                       <input type="text" className={"form-control"} placeholder={"Username"} value={userName} onChange={this._handleChange.bind(this)} name="userName" ref={node => { this.userName = node }}/>
                        </div>

                      <div className="input-group input-group-lg">
                        <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                        <input type="password" className={"form-control"} placeholder={"Password"} value={password} onChange={this._handleChange.bind(this)} name="password" ref={node => { this.password = node }}/>
                      </div>

                      <button type="submit" className={"float"}>Login</button>
                      <p>{error}</p>
                     </form>
                  </div>
            </div>
             
    );
  }
}

LoginForm.propTypes={
  onSubmitHandler:React.PropTypes.func
}


export  default LoginForm;
