import logo from './logo.svg';
import './App.css';
// import About from './MyReactfile/About';
import Navbar from './MyReactfile/Navbar'; 
import TextForm from './MyReactfile/TextForm';
import React,{useState} from 'react';
import Alert from './MyReactfile/Alert';


function App() {
  const [textmod,settextmod]=useState("black");
  const[mod,setmod]=useState("primary");
  const[btnmod,setbtnmod]=useState('LightMod');
  const[alert,setalert]=useState(null);
 
const togglemod=()=>{
  if(mod==="dark"){
    setmod("primary");
    settextmod('dark');
    setbtnmod('DarkMod');
    document.body.style.backgroundColor="white";
    document.body.style.color="black";
    showAlert("Light Mod is On","success");
    document.title="TextUtility-Light";
    
  }
  else{
    setmod("dark");
    settextmod("primary");
    setbtnmod('LightMod');
    document.body.style.backgroundColor="black";
    document.body.style.color="white";
    showAlert("Dark Mod is On","success");
    document.title="TextUtility-Dark";
  }
}

const showAlert=(massage,type)=>{
  setalert({
    msg: massage,
    type: type
  })
  setTimeout(() => {
    setalert(null);
  }, 1200);
}

  return (
<>
<Navbar  title="Textutility" Action="TitleAction" mode={mod} textmode={textmod} togglemode={togglemod} btnmode={btnmod}/>
<Alert alert={alert}/>
<TextForm showAlert={showAlert} mode={mod} hading="Enter the text" />
{/* <About/> */}
</>
  );
}


export default App;
