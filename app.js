//jshint esversion:6

const request = require('request');


//loginUrl = "https://api.chalkboard.education/api/auth/login/"
//smsUrl = "https://api.chalkboard.education/api/users/sendSMS/"
//getUserUrl = "https://api.chalkboard.education/api/cohorts/Ve1Ye/users/"
//id = 33364


const loginUrl = "https://api.chalkboard.education/api/auth/login/"
var formData = {
    username: "jackson",
    password: "jacksonadmin1234"
};

request.post({url:loginUrl, formData:formData}, function(err, response, body){
    if(err){
        console.log(err);
    }else{
        let access_token = JSON.parse(body).access_token;
        console.log(access_token);
        var users = {
            user_ids: "[33366,33364]"
        };
        //var data = JSON.stringify(users);
        //console.log('data: ', data);
        
        var options = {
            url: "https://api.chalkboard.education/api/users/sendSMS/",
            method: "POST",
            headers: {
                'Authorization':'Bearer '+ access_token, 
                'Content-Type':'multipart/form-data'
            },
            formData :users
        };

        request(options, function(err2, response2, body2){
            if(err2){
                console.log(err2);
            }else{
                console.log(JSON.parse(body2));
            }
        });
/*
        const url = "https://api.chalkboard.education/api/users/sendSMS/";

        var users = {
            user_ids: [33366, 33364]
        };
        console.log(JSON.stringify(users));
request.post({url:url, headers:{'Authorization':'Bearer '+ access_token, 'Content-Type':'multipart/form-data'},body: JSON.stringify(users)},function(err3,response3,body3){
    if(err3){
        console.log(err3);
    }else{
        console.log(response3.statusCode)
        console.log(body3);
    }
});*//*
/*
        const smsUrl = "https://api.chalkboard.education/api/users/sendSMS/"
        var users = {
            user_ids : ["33366"]
        };
        request.post({url:smsUrl, formData:users, headers: {'Authorization':'Bearer '+access_token}, function(err2, response2,body2){
            if(err2){
                console.log(err2);
            }else{
                console.log(response2.statusCode);
            }
        }});*/
    }
});
