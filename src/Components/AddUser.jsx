import {FormGroup,FormControl,Input,InputLabel,Button,makeStyles, Typography} from '@material-ui/core';
import {useState} from 'react';
import { adduser } from '../Service/api';
import {useNavigate} from 'react-router-dom';

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

function AddUser(){
    const classes=useStyle();
    const [user,setUser]=useState(initialValue);
    const history=useNavigate();

    const handleInput=(e)=>{
        setUser({...user,[e.target.name]:e.target.value});
        console.log(user);
    }

    const handleSubmit=async ()=>{

        const res=await adduser(user);
        if(res.statusText==='Created')
        {
            alert('User Added');
            setUser(initialValue);
            history('/all')
        }
        else
        {
            alert('Invalid Data');
        }
    }
    return(
        <>
            <FormGroup  className={classes.container}>
                <Typography variant='h4'>Add User</Typography>
                <FormControl>
                    <InputLabel>Name</InputLabel>
                    <Input name="name" onChange={e=>handleInput(e)}></Input>
                </FormControl>
                <FormControl>
                    <InputLabel>Username</InputLabel>
                    <Input name="username" onChange={e=>handleInput(e)}></Input>
                </FormControl>
                <FormControl>
                    <InputLabel>Phone</InputLabel>
                    <Input name="phone" onChange={e=>handleInput(e)}></Input>
                </FormControl>
                <FormControl>
                    <InputLabel>Email</InputLabel>
                    <Input name="email" onChange={e=>handleInput(e)}></Input>
                </FormControl>
                <Button onClick={handleSubmit}> Add User</Button>
            </FormGroup>
        </>
    )
}

export default AddUser;