import React  from 'react';



class SearchInput extends React.Component{
   constructor(props) 
   {
      super(props);
       this.state={
        "inputValue":"",
        "currTime" : null,
        "searchCount":0
      }  
   }
  /**
   * [_handleChange private function to handle search input change]
   * @param  {[type]} e [description]
   * @return {[type]}   [description]
   */
   _handleChange(e){
    var inputValue = e.target.value.trim();
    var currTime = this.state.currTime || (new Date()).getTime();
    var searchCount = this.state.searchCount;
    this.setState({
      "inputValue": inputValue,
      "currTime":currTime,
      "searchCount":++searchCount
    });
    this.props.searchHandler(inputValue,currTime,searchCount);
  }

  render(){
        
        return (
              <div className="searchInput">
                  <input type="text" onChange={this._handleChange.bind(this)} placeholder={"Search Planets"} value={this.state.inputValue}/>
              </div>
    );
  }
}

SearchInput.propTypes={
  searchHandler:React.PropTypes.func
}

export  default SearchInput;
