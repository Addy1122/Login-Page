import {useState} from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function App() {

  const navigate = useNavigate()
  const [user,setuser] = useState("")
  const [pass,setpass] = useState("")

  axios.defaults.withCredentials =true;

  function handleuser(evt)
  {

    setuser(evt.target.value)

  }

  function handlepass(evt)
  {
    setpass(evt.target.value)
  
  }
  function check()
  {
    var logindetails = axios.post("https://login-page-server-silk.vercel.app/login",{"username":user,"password":pass})
    logindetails.then(function(data){
      
      if (data.data=== true){

        navigate('/success')
      }
      else{
        navigate('/fail')
      }
      
    })
  }

  return (
    <div>
      <input onChange={handleuser} name="username" placeholder="Username"></input>
      <input onChange={handlepass} name="password" placeholder="Password"/>

      <button onClick={check}>Login</button>
    </div>
  
  );
}

export default App
