import React, {Component} from "react";
import {useState} from "react";

const App=()=>{
	const styling={ margin:"50px" }
	const [data,setData]=useState({uname:" ",password:" "});
	const {username,pass}=data;
	const submithandler=(e)=>{
		e.preventDefault()
		console.log(data);
	}
	const handler=(e)=>{
		setData({...data,[e.target.name]:[e.target.value]})
	}
	return(
		<form style={styling} onSubmit={submithandler}>
		Username:<input onChange={handler} type="text" name="uname" value={username} /><br />
		Password:<input onChange={handler} type="text" name="password" value={pass} /><br/>
		<input type="submit" value="submit" />
		</form>
	
	);
}
export default App;
  
