const UserModel = require('../models/user.model');

// Get All Users
exports.getAllUsers = (req, res) => {
    UserModel.find().then(
        usersData =>{
            if(usersData){
                return res.status(200).json(usersData);
            }
        }
    ).catch(e=>{
        res.status(400).json({ success: false, 'msg': 'Sorry Unable To get data :(' })
    } )
};

// Get Data Only Users
exports.getUser = (req, res) => {
    UserModel.findById(req.params.id).then(
        userData =>{
            if(userData){
                return res.status(200).json(userData);
            }
        }
    ).catch(e=>{
        res.status(400).json({ success: false, 'msg': 'Sorry Unable To get data about this user :(' })
    } )
};

// Add New User 
exports.addUser = (req, res) => {
    let user = new UserModel(req.body);
    user.save().then(
        (data) => { res.status(200).json({ success: true, 'msg': 'User Added Successfully :)' }) }
    ).catch(e => { res.status(400).json({ success: false, 'msg': 'Sorry Unable To  Added User :(' }) })
};
// Update User
exports.updateUser = (req, res) => {
   UserModel.findOne({_id:req.params.idUser}).then(
       user=>{
           if(!user){
               res.status(400).json({'msg':'Sorry This User Not Found :(('})
           }else{
            
                user.name= req.body.name;
                user.username= req.body.username;
                user.email= req.body.email;
                user.password= req.body.password;
                user.save().then(
                    Response=>{
                        res.status(200).json({"msg":'User Updated :( '})
                    }).catch(e=>{console.log(e)})
           }
       }).catch(e=>{console.log('This Is Error'+ e)})
};
// Delete User
exports.deleteUser = (req, res) => {
    UserModel.findOneAndRemove({_id:req.params.id}).then(
        data=>{
            console.log('User Deleted Successfully :)))')
            res.status(200).json({success: true , 'msg':'User Deleted Successfully :) '})
        }
    ).catch(e=>{console.log("ERROR =  "+e)})
};