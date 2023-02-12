import './App.css';
import SignIn from './components/signIn/Signin';
import SignUp from './components/signup/Signup';
import {useState} from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { Home } from './components/Home';

function App() {

  const [admin, setAdmin] = useState(false)
  const [makeAcc, setmakeAcc] = useState<boolean>(false);
  const [haveAcc, sethaveAcc] = useState<boolean>(true);

  
  
return(
  <>
    <Home/>
  </>
  
)
  
    
 

}

export default App;
