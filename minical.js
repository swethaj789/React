
import React,{useState} from 'react'
export default function App() {
  const [input,setInput]=useState('');
  const [result,setResult]=useState(0)
  const handler=e=>{
    setInput(e.target.value);
  }
  const styles={backgroundColor:"skyblue"}
  return (
    <div className="App" align="center">
      <p align="center" >{result}</p>
      <input type="text" name="input" onChange={handler} value={input}/><br/>
      <div>
      <button onClick={()=>setInput(input+'0')}>0</button>
      <button onClick={()=>setInput(input+'1')}>1</button>
      <button onClick={()=>setInput(input+'2')}>2</button>
      <button onClick={()=>setInput(input+'+')} style={styles}>+</button><br/>
      <button onClick={()=>setInput(input+'3')}>3</button>
      <button onClick={()=>setInput(input+'4')}>4</button>
      <button onClick={()=>setInput(input+'5')}>5</button>
      <button onClick={()=>setInput(input+'-')} style={styles}>-</button><br/>
      <button onClick={()=>setInput(input+'6')}>6</button>
      <button onClick={()=>setInput(input+'7')}>7</button>
      <button onClick={()=>setInput(input+'8')}>8</button>
      <button onClick={()=>setInput(input+'*')} style={styles}>*</button><br/>
      <button onClick={()=>setInput(input+'9')}>9</button>
      
      
      
      <button onClick={()=>setInput(input+'/')} style={styles}>/</button>
      <button onClick={()=>setInput(" ")} style={styles}>clr</button>
      <button onClick={()=>setResult(eval(input))} style={styles}>=</button>
      </div>
    </div>
  );
}

