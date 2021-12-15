
const users=require('../Schemas/user_schema');

const get_users=async(req,res)=>{
    const all_users=await users.find({});
    res.send(all_users);
}

const add_user=async(req,res)=>{
    
    try{
        let new_user=new users(req.body);
        const response=await new_user.save();
        res.statusMessage="Created";
        res.send("User Added");

    }
    catch(e)
    {
    console.log(e);
    }
    
}

const edit_user=async(req,res)=>{
    try{
        console.log(req.params.editid);
        const response=await users.findOneAndUpdate({_id:req.params.editid},req.body);
        res.send("Data modified");
    }
    catch(e)
    {
        console.log(e);
    }
}

const cur_user=async(req,res)=>{
    try{
        const user=await users.findOne({_id:req.params.userid});
        res.send(user);
    }
    catch(e)
    {
        console.log(e);
        res.send("Can Find the User");
    }
}

const delete_user=async(req,res)=>{
    
    try{
        const response=await users.deleteOne({_id:req.params.deleteid});
        res.send("User Deleted");
    }
    catch(e){
        console.log(e);
    }

}

exports.get_users=get_users;
exports.add_user=add_user;
exports.edit_user=edit_user;
exports.delete_user=delete_user;
exports.cur_user=cur_user;