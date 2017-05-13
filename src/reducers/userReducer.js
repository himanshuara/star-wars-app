import {
   RECIEVE_USER_LIST,
   USER_INFO
} from '../constants/frontEndConstants';


export  function userListReducer(state={},action){
  switch (action.type) {
    case RECIEVE_USER_LIST:
      return Object.assign({}, state, { 
            "userList" : action.data
        });
    
    case USER_INFO:
      return Object.assign({}, state, { 
            "userInformation" : action.data
        });
      return
    default:
      return state;
  }
}