function displayUsers(usersArray){
    //travel the array 
    let row="";
    for(let i=0; i<usersArray.length; i++){
    //get each user
    let user = usersArray[i];
    row=`
    <tr>
        <td> ${user.email}</td>
        <td> ${user.fname}</td>
        <td> ${user.lname}</td>
        <td> ${user.age}</td>
        <td> ${user.gender}</td>
        <td> ${user.address}</td>
        <td> ${user.payment}</td>
        <td> ${user.phone}</td>
        <td style="background-color:${user.color}"></td>
    `;
    console.log(row);
    $("#usersTable").append(row);
    }
    
    // append the row into the table(users.html)

    

}

function init(){
    let usersList = readUsers();
    displayUsers(usersList);

}
window.onload=init;