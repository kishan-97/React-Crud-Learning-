import {FormGroup,FormControl,Input,InputLabel,Button,makeStyles, Typography} from '@material-ui/core';
import {useEffect, useState} from 'react';
import { edituser,getCurUser } from '../Service/api';
import {useNavigate,useParams} from 'react-router-dom';

const useStyle=makeStyles({
    container:{
        width:'50%',
        margin:'5% 0 0 25%',
        '& > *':20

    }
});

const initialValue={
    name:'',
    username:'',
    phone:'',
    email:'',    
}

function EditUser(){
    const params=useParams();
    const classes=useStyle();
    const [user,setUser]=useState(initialValue);
    const history=useNavigate();

    const {name,username,phone,email}=user;

    const handleInput=(e)=>{
        setUser({...user,[e.target.name]:e.target.value});
        console.log(user);
    }

    useEffect(async()=>{
        const cur_user=await getCurUser(params.editid);
        setUser(cur_user.data);
    },[]);

    const handleSubmit=async ()=>{
        const response= await edituser(params.editid,user);
        if(response.statusText='OK')
        {
            history('/all');
            alert('User Modified');
        }
        else
            alert('Invalid Input');
    }
    return(
        <>
            <FormGroup  className={classes.container}>
                <Typography variant='h4'>Edit User</Typography>
                <FormControl>
                    <InputLabel>Name</InputLabel>
                    <Input name="name" onChange={e=>handleInput(e)} value={name}></Input>
                </FormControl>
                <FormControl>
                    <InputLabel>Username</InputLabel>
                    <Input name="username" onChange={e=>handleInput(e)} value={username}></Input>
                </FormControl>
                <FormControl>
                    <InputLabel>Phone</InputLabel>
                    <Input name="phone" onChange={e=>handleInput(e)} value={phone}></Input>
                </FormControl>
                <FormControl>
                    <InputLabel>Email</InputLabel>
                    <Input name="email" onChange={e=>handleInput(e)} value={email}></Input>
                </FormControl>
                <Button onClick={handleSubmit}> Edit User</Button>
            </FormGroup>
        </>
    )
}

export default EditUser;