import React,{useState} from 'react'



export default function TextForm(props) {

  const handleUpClick=()=>{
    // console.log("on click"+text);
    let newText=text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to upper case","success")
  }
  const handleonChange=(event)=>{
    // console.log("on change");
    setText(event.target.value)

  }
  const handleLoClick=()=>{
    let loText=text.toLowerCase();
    setText(loText);
    props.showAlert("Converted to lower case","success")
  }
  const handlechangeClick=()=>{

    let changeText=text.replace(/in/g,"on");
    // let changeText2=text.replace(/IN/g,"ON");

    setText(changeText)
    // setText(changeText2)
    props.showAlert("Converted all in to on","success")

  }
  const handleClearClick=()=>{
    let newClear ='';
    setText(newClear)
    props.showAlert("Clear","success")
  }
  const [text,setText]=useState('');
  // text="kjckd"
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#0c225a'}}>
      <h1>
       {props.heading} 
      </h1>
        <div className="mb-3">
            {/* <label for="exampleFormControlTextarea1" class="form-label">{props.example}</label> */}
            <textarea className="form-control" id="exampleFormControlTextarea1"style={{backgroundColor:props.mode==='dark'?'grey':'white',
            color:props.mode==='dark'?'white':'#0c225a' }} value={text} onChange={handleonChange} rows="8"
            ></textarea>
        </div>
        <button className="btn btn-primary " onClick={handleUpClick}> CONVERT TO UPPER CASE</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}> convert to lower case</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}> clear from</button>
        <button className="btn btn-primary mx-2 " onClick={handlechangeClick}> Press to change</button>
    </div>
    <div className="container my-2" style={{color:props.mode==='dark'?'white':'#0c225a'}}>
      <h2>
        your text summary
      </h2>
      <p>{text.split(" ").length-1} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length } minutes to read the above text</p>
      <h3> preview</h3>
        <p>
        {text.length>0?text:"enter your text for preview"}
        </p>
    </div>
    </>
  )
}
