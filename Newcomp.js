//import { Component } from "react";
import React from 'react';
import bell1 from './bell1.png'
import bell2 from './bell2.png'
class Newcomp extends React.Component{
  constructor(props){
    super(props);
    this.state={
      msg:"subscribe to my channel",
      sub:"subscribe",
      
      imgUrl:bell1
    };
  }
  styles={
    text:"italic",
    color:"purple"
  }
  buttonchange=()=>{
    this.setState({
      msg:"Hit the bell icon to get notified",
      sub:"subscribed"
    })
  }
  changeimg=()=>{
    this.setState({
      imgUrl:bell2,
      
      msg:"Thank you!"
    })
  }
  render(){
    return(
      <div>
        <h1 style={this.styles}>{this.state.msg}</h1>
        <button onClick={this.buttonchange}>{this.state.sub} </button>
        <p/>
        <img src={this.state.imgUrl} alt=""
        onClick={this.changeimg}/>
        
      </div>
      );
    
  }
}
export default Newcomp;
