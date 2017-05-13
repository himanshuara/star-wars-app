import React  from 'react';
import ResultPane from './resultPane';
import SearchInput from './searchInput';
import {MIN_BASE_VALUE} from '../../constants/frontEndConstants'


class Planets extends React.Component{


  render(){
        var planetList =this.props.planetList;
        var maxLimitReached = this.props.maxLimitReached;
        if(planetList.length){
        var largestValue = planetList[planetList.length-1].population !== "unknown" ? planetList[planetList.length-1].population : MIN_BASE_VALUE;
        var ratio = (50-12)/(largestValue-MIN_BASE_VALUE)
      }
        return (
              <div>
              <SearchInput placeholder={"Search Planets"} searchHandler={this.props.searchHandler}/>
              {!maxLimitReached ?
              <ResultPane>
                {this.props.planetList.map(function(obj, i){
                  let fontSize = 12+ratio*(parseInt(obj.population !== "unknown" ? obj.population : MIN_BASE_VALUE)-MIN_BASE_VALUE);
                  return (<div key={i+Math.random()} style={{fontSize:fontSize+"px"}}>{obj.name}</div>);
              })}
              </ResultPane>
              :<div>Only 15 times allowed in a minute. Please try after few seconds</div>
              }
              </div>
    );
  }
}

Planets.propTypes={
  planetList:React.PropTypes.array,
  searchHandler:React.PropTypes.func,
  maxLimitReached:React.PropTypes.bool
}
export  default Planets;
