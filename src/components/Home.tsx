import{Route, Routes, Link} from 'react-router-dom'
import SignIn from './signIn/Signin'
import SignUp from './signup/Signup'
import { User } from './user/User'

export const Home = () => {
    return(
    <Routes>
        <Route path='/' element={<SignIn/>}/>
        <Route path='/Signup' element={<SignUp/>}/>
        <Route path='/user-home' element={<User/>}/>
    </Routes>
    )
    
}