import {
   RECIEVE_PLANET_LIST,
   FILTERED_PLANET_LIST,
   MAX_LIMIT_REACHED
} from '../constants/frontEndConstants';


export  function planetReducer(state={},action){
  switch (action.type) {
    
    case RECIEVE_PLANET_LIST:
      return Object.assign({}, state, { 
            "planetList" : action.data || [],
            "filterApplied":false
        });
    
    case FILTERED_PLANET_LIST:
      return Object.assign({}, state, { 
            "filteredPlanetList" : action.data,
            "filterApplied":true
        });
    case MAX_LIMIT_REACHED:
      return Object.assign({}, state, {
            "maxLimitReached":action.data
        });
      return
    default:
      return state;
  }
}