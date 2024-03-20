$(document).ready(function () {
    $(".menu-toggle").on("click", function (event) {
        console.log(event);
        console.log(event.currentTarget.dataset.menu);

        if (event.currentTarget.dataset.menu === "close") {
            $(".menu").css("display", "block");
            $(".menu-toggle").attr("data-menu", "open");
        } else {
            $(".menu").css("display", "");
            $(".menu-toggle").attr("data-menu", "close");
        }
    });

    $("#signInForm button").on("click", function(e){
        e.preventDefault();

        let username = $("#username").val().trim();
        let password = $("#password").val().trim();
        
        if(username === "" || password === ""){
            alert('Please enter both username and password.');
        }else{
            console.log("Username = "+username);
            console.log("Password = "+password);
            alert('Data stored successfully!');
        }
        
    });

    $("#username").val();
});

function toggleSignInPage() {
    var button = document.getElementById('signBtn').getElementsByTagName('button')[0];
    if (button.textContent.trim() === 'Sign In') {
        button.textContent = 'Sign Out';
        window.open('sign.html', '_blank');
    } else {
        button.textContent = 'Sign In';
    }
}