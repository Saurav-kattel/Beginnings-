import React,{useState} from "react"
import Text from "./Text.js"
import Navbar from "./Navbar.js"
import Alert from "./Alert.js"
import Theme from "./Theme"
import About from "./About"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
    const [alert, setAlert] = useState(null)
 const showAlert = (message, type)=>{
   setAlert({
     message: message,
     type: type
   })
 }
setTimeout(function() {
  setAlert(null)
}, 2000);
  const [mode, setMode] = useState("light");
  const toggleMode =()=>{
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor="black"
      showAlert("dark mode on", "success")
    }
    else{
      setMode("light")
document.body.style.backgroundColor="white"
  showAlert("light mode on", "success")
    }
  }
  return (
    <>
         <Navbar mode={mode} toggleMode
={toggleMode}/>   
<Router>     
    <Switch>
       
          <Route path="/about">
            <About />
          </Route>
         
          <Route path="/home">
          <Text showAlert={showAlert}/> 
          </Route>
        </Switch>
        <Alert alert={alert}/>

</Router>
 </>
  );
}
export default App;
