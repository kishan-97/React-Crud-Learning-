import {useEffect,useState} from 'react';
import Table from './Table';
import {getusers, deleteUser } from '../Service/api';

function Allusers()
{
    const [users,setusers]=useState([]);

    const getAllusers=async()=>{
        const response= await getusers();
        setusers(response.data);
    }

    const handleDelete=async (id)=>{
        const res=await deleteUser(id);
        getAllusers();
    }
    
    useEffect(()=>{
        getAllusers();
    },[]);

    return(
        <>
        <Table handleDelete={handleDelete} users={users}></Table>
        </>
    )
}

export default Allusers;