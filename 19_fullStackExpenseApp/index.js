window.addEventListener("DOMContentLoaded", () => {
   
    axios.get("http://localhost:3000/user/get-expenses")
         .then((response) => {
            
            for(let i=0; i<response.data.length; i++){
                showExpense(response.data[i]);
            }

         })
         .catch((error) => console.log(error))

} )



function handleFormSubmit(event)
{
    event.preventDefault();
    

    const expenseAmount = event.target.amount.value;
    const description = event.target.description.value;
    const category = event.target.category.value;

    const obj = {
        expenseAmount : expenseAmount,
        description : description,
        category : category
    }

    if(obj.id){

        var id = obj.id;

        axios.post(`http://localhost:3000/user/edit-expense/${id}`)
                    .then((response)=>{
        
                        const childToDelete = event.target.parentElement;
                        userList.removeChild(childToDelete);
    
                    })
        
                    .catch((error)=>console.log("ERROR"))


    }


else{
    axios.post("http://localhost:3000/user/add-expense", obj)
    .then((response)=>{
      
       window.location.reload();
       showExpense(obj);
    })
    .catch((error)=>console.log(error))
}
    
}
function showExpense(obj)
{
    
    const newLi = document.createElement("li");
    newLi.innerHTML = obj.expenseAmount +" " +obj.description+" "+obj.category; 

    const userList = document.querySelector("ul");
    userList.appendChild(newLi);
    
    // const userList = document.querySelector("ul");
    // userList.innerHTML = userList.innerHTML + `<li> ${userObject.userName}-${userObject.userEmail}-${userObject.userPhone}`;


    //DELETE FUNCTIONALITY
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";

    newLi.appendChild(deleteBtn);


    deleteBtn.addEventListener("click", function(event){
        
        var id = obj.id;

        axios.delete(`http://localhost:3000/user/delete-expense/${id}`)
                    .then((response)=>{
        
                        const childToDelete = event.target.parentElement;
                        userList.removeChild(childToDelete);
    
                    })
        
                    .catch((error)=>console.log("ERROR"))           

    });


    //EDIT FUNCTIONALITY
    const editBtn = document.createElement("button");
    editBtn.innerHTML = "Edit";

    newLi.appendChild(editBtn);

    editBtn.addEventListener("click", function(event){


        var id = obj.id;

        axios.delete(`http://localhost:3000/user/delete-expense/${id}`)
                    .then((response)=>{
        
                        const childToDelete = event.target.parentElement;
                        userList.removeChild(childToDelete);
    
                    })
        
                    .catch((error)=>console.log("ERROR")) 
        


        const childToDelete = event.target.parentElement;
        userList.removeChild(childToDelete);

        document.getElementById("expense-amount").value = obj.expenseAmount;
        document.getElementById("description").value = obj.description;
        document.getElementById("category").value = obj.category;

    });
}