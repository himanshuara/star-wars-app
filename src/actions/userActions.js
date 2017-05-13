import {
   RECIEVE_USER_LIST,
   SW_SUPER_USER,
   USER_INFO,
   AUTH_CODES
} from '../constants/frontEndConstants';
import {getPlanetList} from './planetActions';

import {PLANET_LIST_URL} from '../constants/configConstants';

/**
 * [recieveUserList action to get parsed user list]
 * @param  {[type]} data [description]
 * @return {[Object]}      [resturns action with data]
 */
function recieveUserList(data){
    return {
    type: RECIEVE_USER_LIST,
    data
  }
}
/**
 * [userAuthentication function to check if username password is correct]
 * @param  {[Object]} data     [Object conatining username and password]
 * @param  {[Array]} userList [List of total users]
 * @return {[type]}          [description]
 */
function userAuthentication(data,userList){
  var userInfo = {};
  userInfo.authenticated = false;
  userInfo.authCode = "0";
  userInfo.authMsg = AUTH_CODES[userInfo.authCode];
  for(let i = 0 ; i < userList.length ; i++){
    let userObj = userList[i];
    if((userObj.name === data.userName) && (userObj.password === data.password)){
      userInfo.authenticated = true;
      userInfo.authCode = "1";
      userInfo.authMsg = AUTH_CODES[userInfo.authCode];
      userInfo.name = userObj.name;
      userInfo.isSuperUser = (userObj.name === SW_SUPER_USER);
      break;
    }
  }
  return userInfo;
}

//Action to update user infro in state
function updateUserInfo(data){
  return {
    type: USER_INFO,
    data
  }
}

//Action to authenticate user
export function authenticateUser(data){
    
     return (dispatch,getState) => {
        const userList = getState().userListReducer.userList;
        var userInfo = userAuthentication(data,userList)
        dispatch(updateUserInfo(userInfo))
    }

}

//Async action  to get user list
export function getUsers(params) {

  return dispatch => {
    
     return (new Promise(function(resolve,reject){
        // Do the usual XHR stuff
    var req = new XMLHttpRequest();
    req.open(params.method || 'GET', params.url);

    req.onload = function() {
      // This is called even on 404 etc
      // so check the status
      if (req.status === 200) {
        // Resolve the promise with the response text
        resolve(req.response);
      }
      else {
        // Otherwise reject with the status text
        // which will hopefully be a meaningful error
        reject(Error(req.statusText));
      }
    };

    // Handle network errors
    req.onerror = function() {
      reject(Error("Network Error"));
    };

    // Make the request
    req.send();
     })).then(response => {
        dispatch(recieveUserList(parseUserList(response)))
        dispatch(getPlanetList({url:PLANET_LIST_URL}))
    })
  }
}

//Function to parse the recieved user list

function parseUserList(res){
  var resObj = res ? JSON.parse(res) : {};
  var results = resObj.results || [],
  userList = [];
  for(let i=0; i < results.length ; i++){
    let userInfo = {};
    userInfo.name = results[i].name;
    userInfo.password = results[i].birth_year;
    userList.push(userInfo);
  }
return userList
}







