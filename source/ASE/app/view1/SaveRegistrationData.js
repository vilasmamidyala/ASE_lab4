var registrationapp = angular.module("RegistrationApp",[]);

registrationapp.controller("studentController", function($scope,$window){
    $scope.logins = [];
    $scope.saveRegistrationData = function (first,last,email,user,pass) {

        var Registration_details = localStorage.Registration_details?JSON.parse(localStorage.Registration_details):[];
        var Registration = JSON.stringify
        ({
            FirstName : first,
            LastName : last,
            EmailId : email,
            Password:pass,
            UserName: user,

        });
        Registration_details.push(Registration);
        localStorage.setItem("Registration_details", JSON.stringify(Registration_details));


        $window.location.href='RegistrationComplete.html';
    };
});