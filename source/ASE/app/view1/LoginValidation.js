/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var registrationvalidationapp = angular.module("LoginApp",[]);

registrationvalidationapp.controller("LoginController", function($scope,$window){

    var flag;
    $scope.validateRegistrationData = function (user,pass) {


        console.log(user);
        console.log(pass);
        var RegistrationDetails=localStorage.getItem("Registration_details");
        RegistrationDetails=JSON.parse(RegistrationDetails);
        console.log(RegistrationDetails);
        for(var i =0;i<RegistrationDetails.length;i++) {

            var y = JSON.parse(RegistrationDetails[i]);
            console.log(y.UserName);
            console.log(y.Password);
            if (y.UserName === user && y.Password === pass) {
                flag = true;

            }
            else{
                flag=false;
            }
        }
        if(flag==true)
        {
            $window.location.href='Mainpage.html';
        }
        else
        {
            $scope.continueMsg=false;
        }

    };
});