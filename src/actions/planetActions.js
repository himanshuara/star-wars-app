import {
   RECIEVE_PLANET_LIST,
   FILTERED_PLANET_LIST,
   MIN_BASE_VALUE,
   MAX_LIMIT_REACHED
} from '../constants/frontEndConstants';

//Action to update planet list in state
export function recievePlanetList(data){
    return {
    type: RECIEVE_PLANET_LIST,
    data
  }
}
//Action to update filtered planet list in state
export function filteredPlanetList(data){
    return {
    type: FILTERED_PLANET_LIST,
    data
  }
}
//Action to set flag for max search reached
export function maxLimitReached(data){
    return {
    type: MAX_LIMIT_REACHED,
    data
  }
}

//Async action to get planet list
export function getPlanetList(params){
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
        var results = JSON.parse(response).results;
        dispatch(recievePlanetList(sortPlanetList(results,0,results.length-1)))
        
    })
  }
}

//Quick sort implementation for parsing and 
//sorting the planet list based on population

function  sortPlanetList(arr, left, right)
{
  var i = left;
  var j = right;
  var tmp;
  var pivotidx = (left + right) / 2; 
  var pivot = parseInt(arr[pivotidx.toFixed()].population !== "unknown" ? arr[pivotidx.toFixed()].population : MIN_BASE_VALUE);  
  /* partition */
  while (i <= j)
  {
    while (parseInt(arr[i].population !== "unknown" ? arr[i].population :MIN_BASE_VALUE) < pivot)
    i++;
    while (parseInt(arr[j].population !== "unknown" ? arr[j].population :MIN_BASE_VALUE) > pivot)
      j--;
    if (i <= j)
    {
      tmp = {
        "name":arr[i].name,
        "population":arr[i].population
      }
      arr[i] = {
        "name":arr[j].name,
        "population":arr[j].population
      };
      arr[j] = tmp;
      i++;
      j--;
    }
  }

  /* recursion */
  if (left < j)
    sortPlanetList(arr, left, j);
  if (i < right)
    sortPlanetList(arr, i, right);
  return arr;
}



