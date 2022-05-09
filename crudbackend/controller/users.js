import {v4 as uuid} from 'uuid'

let users = [];

export const getUsers =(req ,res)=> {
    res.send(users)
}



export const createUser =(req,res)=>{
    const user = req.body;
    users.push({...user , id:uuid()});
    res.send("user added succesfully")
}


export const getUser=(req ,res)=>{
    const signleuser = users.filter((user)=>user.id === req.params.id)
    res.send(signleuser);
}


export const deleteUser =(req , res)=>{
    users = users.filter((user)=>user.id !== req.params.id)
    res.send("user data successfully deleted");
    console.log(users)
}

export const updateUser = (req ,res)=>{
    const user = users.find((user) =>user.id === req.params.id)

    user.name = req.body.name
    user.email=req.body.email
    user.number=req.body.number

    res.send("user data updated succesfully")
    res.json(user);

}