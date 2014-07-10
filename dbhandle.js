    var mongoose = require('mongoose');
    var async = require('async');
    var URIString = "mongodb://localhost/userAdminDb";
    var db = mongoose.createConnection(URIString);


            var userSchema = new mongoose.Schema({
                user_id: {type: Number, unique: true},
                Name: {type: String},
                Age: {type: Number},
                City: {type: String}
            });

            var adminSchema = new mongoose.Schema({
                admin_id: {type: Number, unique: true},
                Name: {type: String},
                Age: {type: Number},
                City: {type: String}
            });

            var bookSchema = new mongoose.Schema({
                book_id: {type: Number, unique: true},
                Title: {type: String},
                Author: {type: String},
                Price: {type: Number}

            });

            var userModel = db.model('User', userSchema);
            var adminModel = db.model('Admin', adminSchema);
            var bookModel = db.model('Book',bookSchema);

            /*for (var i = 0; i < 10; i++) {
                var user = new userModel({
                    user_id: 101 + i,
                    Name: 'user' + i,
                    Age: 24 + i,
                    City: 'Delhi'
                });

                var admin = new adminModel({
                    admin_id: 101 + i,
                    Name: 'admin' + i,
                    Age: 24 + i,
                    City: 'Delhi'
                });

                var book = new bookModel({
                    book_id: 101 + i,
                    Title: 'book' + i,
                    Author: 'Author' + i,
                    Price: 350 + i
                });

                user.save(function (err) {
                    if (err) {
                        console.log("Error occurred while saving the user record: " + err);
                    }
                    else{
                        console.log("User Record Saved Successfully ");
                    }
                });

                admin.save(function (err) {
                    if (err) {
                        console.log("Error occurred while saving the admin record: " + err);
                    }
                    else{
                        console.log("Admin Record Saved Successfully ");
                    }
                });

                book.save(function (err) {
                    if (err) {
                        console.log("Error occurred while saving the book record: " + err);
                    }
                    else{
                        console.log("Book Record Saved Successfully ");
                    }
                });


            }*/



    var getUserList = (function() {
        return function getUserList(callback) {
            userModel.find({}).exec(function (err, data) {
                if (err) {
                    console.log("Error occurred while fetching the record: " + err);
                }
                else{
                    callback(data);
                }
            });
        }
    })();

    var getUser = (function(){
        return function getUser(id,callback){
            userModel.findOne({user_id:id}).exec(function(err,data){
                if(err)
                console.log("Error occurred while fetching the record :"+err);
                else{
                    callback(data);
                }
            });
        }
    })();

    var postUser = (function(){
        //var array = [];
        return function putUser(userid,name,age,city,callback){

          // array.push(function(){

               var user = new userModel({
                   user_id: userid,
                   Name: name,
                   Age: age,
                   City: city
               });

               user.save(function (err) {
                   if (err) {
                       console.log("Error occurred while saving the user record: " + err);
                   }
                   else{
                       console.log("User Record Saved Successfully ");
                   }
               });
           //});

            //array.push(function(){
                userModel.find({}).exec(function(err,data){
                if(err)
                console.log("Error occurred while adding the record :"+err);
                else
                callback("Record successfully added using post request");
            });
        //});
//            async.series(array,function(err,data){
//                if(err)
//                console.log("Error inside async.series :"+err);
//            });
        }
    })();

    var deleteUser = (function(){
        return function deleteUser(id,callback){
            userModel.remove({user_id:id}).exec(function(err){
                if(err)
                console.log("Error while deleting using delete request:"+err);
                else
                callback("Record deleted successfully using delete request ");
            });
        }
    })();

    var putUser = (function(){
        return function putUser(id,name,age,city,callback){
            userModel.update({user_id:id},{$set:{Name:name,Age:age,City:city}}).exec(function(err,result){
                if(err){
                    console.log("Error occurred while updating the record: "+err);
                }else{
                   callback("Record updated: "+result);
                }
            });
        }
    })();

    module.exports.getUserList = getUserList;
    module.exports.getUser = getUser;
    module.exports.postUser = postUser;
    module.exports.deleteUser = deleteUser;
    module.exports.putUser = putUser;