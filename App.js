import "./styles.css";
import React from 'react'
import Newcomp from './component/Newcomp'
class App extends React.Component {
  styles={
    text:"bold",
    color:"teal"
  }
  
  render(){
    return (
      <div className="App">
        <h1 style={this.styles}>Hello Welcome</h1>
        
        <Newcomp />
        
    </div>
  
    );
  }
}
export default App;
