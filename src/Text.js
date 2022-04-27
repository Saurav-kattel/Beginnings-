import React,{useState}from 'react'

export default function Text(props){
  const [text, setText] = useState("");
  const toUppercase =()=>{
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("converted to uppercase","success")
  }
  const textChange =(e)=>{
  setText(e.target.value)
  }
  return(
    <>
    <div className="container">
<div className="form-floating my-4">
  <textarea className="form-control"  id="floatingTextarea2" onChange={textChange}rows ="8"cols="64" value={text}></textarea>
  <label HtmlFor="floatingTextarea2"></label>
</div>
 <button className="btn btn-primary" onClick={toUppercase}>TO UPPERCASE</button>
 
 <div className="my-4 text-success">
 <h3 className="text-info">previews and otherstuffs</h3>
 <p>char {text.length}</p>
  <p>words {text.split(" ").length}</p>
 </div>
 </div>
    </>
    )
}