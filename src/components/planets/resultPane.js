import React  from 'react';


/**
 * Dumb component to display search results
 */
class ResultPane extends React.Component{

  render(){
        
        return (
              <div>
              {this.props.children}
              </div>
    );
  }
}


export  default ResultPane;
