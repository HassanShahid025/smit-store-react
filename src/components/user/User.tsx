import { UserNavbar } from '../usernavbar/UserNavbar'
import{Route, Routes, Link} from 'react-router-dom'

import { UserHome } from '../userHome/UserHome'

export const User = () => {
    return(
        <>
        <UserNavbar/>
        <Routes>
            <Route path='/' element={<UserHome/>}/>
        </Routes>
        </>
    )
    
}