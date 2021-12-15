import axios from 'axios';

const url='http://127.0.0.1:8000/users';

export const getusers=async()=>{
    return  await axios.get(url+'/all');
}

export  const adduser=async(user)=>{
    return await axios.post(url+'/add',user);
}
export const edituser=async(id,user)=>{
    return await axios.put(`${url}/edit/${id}`,user);
}

export  const getCurUser=async(id)=>{
    return await axios.get(`${url}/cuser/${id}`);
}

export const deleteUser=async(id)=>{
    return await axios.delete(`${url}/delete/${id}`);
}