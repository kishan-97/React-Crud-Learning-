import Navbar from './Components/navbar';
import Allusers from './Components/Allusers';
import Adduser from './Components/AddUser';
import Learning from './Components/Learning';
import {Route,Routes} from 'react-router-dom';
import EditUser from './Components/EditUser';

function App()
{
    return(
        <>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Learning/>}></Route>
            <Route path='/all' element={<Allusers/>}></Route>
            <Route path='/add' element={<Adduser/>}></Route>
            <Route path='/edit/:editid' element={<EditUser/>}></Route>
            <Route path='*' element={<h1>No Found</h1>}></Route>
        </Routes>
        </>
    )
}


export default App;