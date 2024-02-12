//const { use } = require("./routes/user");

window.addEventListener("DOMContentLoaded", () => {
    console.log('h1');
   
    axios.get("http://localhost:3000/user/get-users")
         .then((response) => {
            console.log(response.data);
            for(let i=0; i<response.data.length; i++){
                showUserOnScreen(response.data[i]);
            }

         })
         .catch((error) => console.log(error))

} )

function handleFormSubmit(event)
{
    event.preventDefault();
    
    const userName = event.target.name.value;
    const userPhone = event.target.phone.value;
    const userEmail = event.target.email.value;
    
    let userObject = {

        name : userName,
        phone : userPhone,
        email : userEmail,
    };

         
    axios.post("http://localhost:3000/user/add-user", userObject)
         .then((response)=>{
           
            window.location.reload();
            showUserOnScreen(userObject);
         })
         .catch((error)=>console.log(error))
     
}

function showUserOnScreen(userObject)
{ 
   
    //creating new li element COORECT
    const newLi = document.createElement("li");
    newLi.innerHTML = userObject.name + "  " + userObject.phone + "  " + userObject.email ;

    const uoList = document.querySelector("ul");

    uoList.appendChild(newLi);


    document.getElementById("name").value=null;
    document.getElementById("phone").value=null;
    document.getElementById("email").value=null;
    


  
    //creating delete button CORRECT
    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class","btn btn-danger")
    deleteBtn.textContent = "Delete";
    newLi.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", function(){
        
        var id = userObject.id;

        axios.delete(`http://localhost:3000/user/delete-user/${id}`)
                    .then((response)=>{
        
                        uoList.removeChild(newLi);
    
                    })
        
                    .catch((error)=>console.log("ERROR"))           

    });


  
    //creating edit button
    const editButton = document.createElement("input");
    editButton.type="button";
    editButton.value = "Edit";
    editButton.setAttribute("class","btn btn-primary");

    newLi.appendChild(editButton);
  
    // editButton.onclick = () => {

    //    // uoList.removeChild(newLi);

    //     var id = userObject._id;

    //     axios.delete(`https://crudcrud.com/api/6c12b4a946304c9bacf36968dfb7177a/studentManager/${id}`)
    //          .then((response)=>{

    //             uoList.removeChild(newLi);

    //             axios.get("https://crudcrud.com/api/6c12b4a946304c9bacf36968dfb7177a/studentManager")
    //             .then((response) => {
    //                 let length = response.data.length;
    //                 document.getElementById("totalStudent").innerHTML = `All Students:${length}`;       

    //             })
    //             .catch((error) => console.log(error))

    //          })
    //          .catch((error)=>console.log("ERROR"))


    //    document.getElementById("name").value=userObject.name;
    //    document.getElementById("phone").value=userObject.phonenumber;
    //    document.getElementById("address").value=userObject.address;   
  
    // } 
}