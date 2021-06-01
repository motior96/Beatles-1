// get elements from html;

var fname = document.getElementById('fname');
var fnameErr = document.getElementById('fnameErr');

var lname = document.getElementById('lname');
var lnameErr = document.getElementById('lnameErr');

var pass = document.getElementById('pass');
var passErr = document.getElementById('passErr');

var repass = document.getElementById('repass');
var repassErr = document.getElementById('repassErr');


function subm(){
    if(fname.value == ''){
       fname.style.border = "1px solid red";
       fname.focus();
       fnameErr.innerHTML = "Please Enter Your Name First";
       return false;
    }

    if(lname.value == ''){
       lname.style.border = "1px solid red";
       lname.focus();
       lnameErr.innerHTML = "Please Enter Your Last Name ";
       return false;
     }

     if(pass.value == ''){
        pass.style.border = "1px solid red";
        pass.focus();
        passErr.innerHTML = "Please Enter Your Password ";
        return false;
     }

     if(pass.value.length <= 5){
        pass.style.border = "1px solid red";
        pass.focus();
        passErr.innerHTML = "Please must be contain 6 charecters ";
        return false;
     }


     if(repass.value == ''){
        repass.style.border = "1px solid red";
        repass.focus();
        repassErr.innerHTML = "Please Enter Your Confirm Password ";
        return false;
     }

     if(repass.value != pass.value){
        repass.style.border = "1px solid red";
        repass.focus();
        repassErr.innerHTML = "Password not matched with confirm pass";
        return false;
     }
}

function errRemove(){
    if(fname.value != ''){
        fname.style.border = "1px solid #fff";
        fnameErr.innerHTML = "";
    }

    if(lname.value != ''){
        lname.style.border = "1px solid #fff";
        lnameErr.innerHTML = "";
    }

    if(pass.value != ''){
        pass.style.border = "1px solid #fff";
        passErr.innerHTML = "";
    }

    if(repass.value != ''){
        repass.style.border = "1px solid #fff";
        repassErr.innerHTML = "";
    }
}

fname.addEventListener('blur',errRemove);
lname.addEventListener('blur',errRemove);
pass.addEventListener('blur',errRemove);
repass.addEventListener('blur',errRemove);

// menu icon
var open = document.getElementById('open');
var close = document.getElementById('close');
var sideNave = document.getElementById('sideNave');

open.addEventListener('click',function(){
    open.style.display = 'none';
    close.style.display = 'block';
    sideNave.classList.add('sidenav-pos');
});

close.addEventListener('click',function(){
    close.style.display = 'none';
    open.style.display = 'block';
    sideNave.classList.remove('sidenav-pos');
});




















