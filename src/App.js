import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import{
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link
// } from "react-router-dom"

// let nam="khastu";
function App() {
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);

  const showAlert =(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
setAlert(null)
    },2000)
  }

  const toggleMode=()=>{
    if(mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor = '#0c225a'
    showAlert("DARK MODE HAS BEEN ENABLED","success")
    // document.title = 'textutils-dark mode';
    /*setInterval(()=>{
      document.title='textutils is noiceeeeeee'
    },2000)

    setInterval(()=>{
      document.title='textutils is lameeeeee'
    },1500)*/
  }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("LIGHT MODE HAS BEEN ENABLED","success")
      // document.title = 'textutils-light mode';
    }
  }
  return (
    <>
    {/* <Router>
    <Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container">
    <Routes>
          <Route eact path="/about" element={<About/>}/>
          {/* </Route> }
          < Route exact path="/"
            element={<TextForm heading="Enter your text " mode={mode} showAlert={showAlert}/>}
          />
    </Routes>
        </div>
    </Router> */}
    <Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container">
    {/* <About/> */}
    <TextForm heading="Enter your text " mode={mode} showAlert={showAlert}/>
    </div>
    </>
  );
}


export default App;
