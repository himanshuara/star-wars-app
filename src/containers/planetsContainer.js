import React  from 'react';
import { connect } from 'react-redux';
import Planets from '../components/planets/planets';
import {filteredPlanetList,recievePlanetList,maxLimitReached} from '../actions/planetActions';
import {ELAPSED_TIME,MAX_SEARCH_COUNT} from '../constants/frontEndConstants'






class PlanetsContainer extends React.Component{
	

    /**
     * Private function to filter data based on search
     * 
     * @param  {String} value value is the text to search
     * @param  {Array} list complete list of planets
     */
  _filterData(value,list){
    return (list.filter(function(el){
        return el.name.toLowerCase().indexOf(value.toLowerCase()) > -1 
    }))
  }
/**
 * [_searchHandler private function to handle filter]
 * @param  {[String]} value       [value to filter]
 * @param  {[Integer]} pastTime    [Time in ms of first search]
 * @param  {[Integer]} searchCount [number of times searching took place]
 * @return {[type]}             [description]
 */
  _searchHandler(value,pastTime,searchCount){
      var filteredData;
      var oneMin = ELAPSED_TIME; 
      var isPast = (new Date().getTime() - pastTime < oneMin)?false:true;
      var isSuperUser = this.props.userInformation.isSuperUser;
      if(!isSuperUser && !isPast && (searchCount > MAX_SEARCH_COUNT)){
        this.props.maxLimitReached(true);
      }
      else{
        if(value){
         filteredData = this._filterData(value,this.props.planetList);
         this.props.getFilteredPlanetList(filteredData);
        }
        else{
          filteredData = this.props.planetList;
          this.props.recievePlanetList(filteredData);
        }
        this.props.maxLimitReached(false);
    }
      
  }
 	render(){
        var planetList = this.props.filterApplied ? this.props.filteredPlanetList : this.props.planetList;
        var maxLimitReached = this.props.maxLimitReachedFlag
        return (
          
          <div>
            <div className='planets-wrapper'>
             <Planets planetList={planetList} maxLimitReached={maxLimitReached} searchHandler={this._searchHandler.bind(this)}/> 
            </div>
          </div>
		);
	}

};
/**
 * [mapStateToProps mapping state value to props]
 * @param  {[type]} state    [complete state of application]
 * @return {[type]}          [description]
 */
function mapStateToProps(state) {
   return {
    planetList: state.planetReducer.planetList || {},
    filteredPlanetList:state.planetReducer.filteredPlanetList,
    filterApplied:state.planetReducer.filterApplied,
    userInformation: state.userListReducer.userInformation,
    maxLimitReachedFlag:state.planetReducer.maxLimitReached
    
  }
} 
/**
 * [mapDispatchToProps mapping actions to props]
 * @param  {[function]} dispatch [function to dispatch the action]
 * @return {[type]}          [description]
 */
 function mapDispatchToProps(dispatch){
  return {
    getFilteredPlanetList: function(data){ dispatch(filteredPlanetList(data)); },
    recievePlanetList:function(data){dispatch(recievePlanetList(data));},
    maxLimitReached:function(data){dispatch(maxLimitReached(data));}
  }
};


export  default connect(mapStateToProps,mapDispatchToProps)(PlanetsContainer);



