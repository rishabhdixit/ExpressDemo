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
            bookSchema.add({book_id:[Number]});
            userSchema.add({user_id:[Number]});

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


//user Methods
    var getUserList = (function() {
        return function getUserList(callback) {
            userModel.find({}).exec(function (err, data) {
                if (err) {
                    console.log("Error occurred while fetching the user record: " + err);
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
                console.log("Error occurred while fetching the user record :"+err);
                else{
                    callback(data);
                }
            });
        }
    })();

    var postUser = (function(){

        return function putUser(userid,name,age,city,callback){



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

                userModel.find({}).exec(function(err,data){
                if(err)
                console.log("Error occurred while adding the user record :"+err);
                else
                callback("User Record successfully added using post request");
            });

        }
    })();

    var deleteUser = (function(){
        return function deleteUser(id,callback){
            userModel.remove({user_id:id}).exec(function(err){
                if(err)
                console.log("Error while deleting user using delete request:"+err);
                else
                callback("User Record deleted successfully using delete request ");
            });
        }
    })();

    var putUser = (function(){
        return function putUser(id,reqbody,callback){
            userModel.update({user_id:id},{$set:reqbody}).exec(function(err,result){
                if(err){
                    console.log("Error occurred while updating the user record: "+err);
                }else{
                   callback("User Record updated: "+result);
                }
            });
        }
    })();



//Admin Methods
    var getAdminList = (function() {
        return function getAdminList(callback) {
           adminModel.find({}).exec(function (err, data) {
                if (err) {
                    console.log("Error occurred while fetching the admin record: " + err);
                }
                else{
                    callback(data);
                }
            });
        }
    })();

    var getAdmin = (function(){
        return function getAdmin(id,callback){
           adminModel.findOne({admin_id:id}).exec(function(err,data){
                if(err)
                    console.log("Error occurred while fetching the admin record :"+err);
                else{
                    callback(data);
                }
            });
        }
    })();

    var postAdmin = (function(){

        return function postAdmin(adminid,name,age,city,callback){


            var admin = new adminModel({
                admin_id: adminid,
                Name: name,
                Age: age,
                City: city
            });

            admin.save(function (err) {
                if (err) {
                    console.log("Error occurred while saving the admin record: " + err);
                }
                else{
                    console.log("Admin Record Saved Successfully ");
                }
            });



            adminModel.find({}).exec(function(err,data){
                if(err)
                    console.log("Error occurred while adding the admin record :"+err);
                else
                    callback("Admin Record successfully added using post request");
            });

        }
    })();

    var deleteAdmin = (function(){
        return function deleteAdmin(id,callback){
            adminModel.remove({admin_id:id}).exec(function(err){
                if(err)
                    console.log("Error while deleting admin using delete request:"+err);
                else
                    callback("Admin Record deleted successfully using delete request ");
            });
        }
    })();

    var putAdmin = (function(){
        return function putAdmin(id,reqbody,callback){
            adminModel.update({admin_id:id},{$set:reqbody}).exec(function(err,result){
                if(err){
                    console.log("Error occurred while updating the Admin record: "+err);
                }else{
                    callback("Admin Record updated: "+result);
                }
            });
        }
    })();


    //Book Methods
    var getBookList = (function() {
        return function getBookList(callback) {
            bookModel.find({}).exec(function (err, data) {
                if (err) {
                    console.log("Error occurred while fetching the book record: " + err);
                }
                else{
                    callback(data);
                }
            });
        }
    })();

    var getBook = (function(){
        return function getBook(id,callback){
            bookModel.findOne({book_id:id}).exec(function(err,data){
                if(err)
                    console.log("Error occurred while fetching the book record :"+err);
                else{
                    callback(data);
                }
            });
        }
    })();

    var postBook = (function(){

        return function postBook(bookid,title,author,price,callback){


            var book = new bookModel({
                book_id: bookid,
                Title: title,
                Author: author,
                Price: price
            });

            book.save(function (err) {
                if (err) {
                    console.log("Error occurred while saving the book record: " + err);
                }
                else{
                    console.log("Book Record Saved Successfully ");
                }
            });



            bookModel.find({}).exec(function(err,data){
                if(err)
                    console.log("Error occurred while adding the book record :"+err);
                else
                    callback("Book Record successfully added using post request");
            });

        }
    })();

    var deleteBook = (function(){
        return function deleteBook(id,callback){
            bookModel.remove({book_id:id}).exec(function(err){
                if(err)
                    console.log("Error while deleting book using delete request:"+err);
                else
                    callback("Book Record deleted successfully using delete request ");
            });
        }
    })();

    var putBook = (function(){
        return function putBook(id,reqbody,callback){
            bookModel.update({book_id:id},{$set:reqbody}).exec(function(err,result){
                if(err){
                    console.log("Error occurred while updating the Book record: "+err);
                }else{
                    callback("Book Record updated: "+result);
                }
            });
        }
    })();



    module.exports.getUserList = getUserList;
    module.exports.getUser = getUser;
    module.exports.postUser = postUser;
    module.exports.deleteUser = deleteUser;
    module.exports.putUser = putUser;

    module.exports.getAdminList = getAdminList;
    module.exports.getAdmin = getAdmin;
    module.exports.postAdmin = postAdmin;
    module.exports.deleteAdmin = deleteAdmin;
    module.exports.putAdmin = putAdmin;

    module.exports.getBookList = getBookList;
    module.exports.getBook = getBook;
    module.exports.postBook = postBook;
    module.exports.deleteBook = deleteBook;
    module.exports.putBook = putBook;