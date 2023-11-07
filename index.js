//grabbign the form
let form =document.getElementById("form");

//adding event listener
form.addEventListener("submit",function(){
    console.log(event);//remember that event object is available by default
    console.log("i am listening");
    event.preventDefault();    //stopping the default behavior of going to action url
    let username=document.getElementById("username");
    let password=document.getElementById("password");
    console.log(username.value);
    console.log(password.value);
    window.alert(username.value);

    if(username.value=="username" && password.value=="password"){
        window.alert("user matched");
    }
    form.reset();


});
//check right input

//then submit
