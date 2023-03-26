function login(){
    let usersList = readUsers();

    //get the values from the inputs
    let uname = $("#txtEmail").val();
    let pass = $("#txtPassword").val();
    let valid=true;

    /*console.log(uname,pass);*/

    //travel the array

    for(let i=0; i<usersList.length; i++){
        //get each user
        let user = usersList[i];
        if(uname == user.email && pass == user.password){
            //compare the input values in the values from the users list
            window.location="users.html";
            valid=true;
            break;
        }
        else{
            valid=false;
        }
    }

    if(!valid){
        alert("Please valid credentials")
        //$("#form").append("<p> invalid credentials </p>");
        }

    //compare the input values with the values from the users list
}



