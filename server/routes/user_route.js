const express=require('express');
const Router=express.Router();

const {get_users,add_user,edit_user,delete_user,cur_user}=require('../Controllers/user_controller');

Router.get('/all',get_users);
Router.post('/add',add_user);
Router.get('/cuser/:userid',cur_user);
Router.put('/edit/:editid',edit_user);
Router.delete('/delete/:deleteid',delete_user);

module.exports=Router;