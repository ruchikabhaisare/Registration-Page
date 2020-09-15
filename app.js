

function onsubmitted(){
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('pass').value;
  var confirmpassword = document.getElementById('confirmpass').value;
  var a = document.getElementById('msg');
  // a.innerHTML="Hello";
  let message = "";
  if(!name || !email || !password || !confirmpassword){
    a.classList.add('alert-danger');
    message = "Please enter all Details";
  }
  else if(password.length<6){
    a.classList.add('alert-danger');
    message = "Please enter a strong password ie.length should be atleast 6";
  }
  else if(password != confirmpassword){
    a.classList.add('alert-danger');
     message = "Password desn't Match!";
  }
  else{
    a.classList.remove('alert-danger');
    a.classList.add('alert-primary')
    message="succesfully Registered!!"
  }
    a.innerHTML=message;
    a.style.visibility = "visible";
}
