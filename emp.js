employee = {}
function add(){
    if(empid.value && empname.value && empdesg.value && empsal.value){
        // alert ("All inputs are present")
        employee.id = empid.value
        employee.name = empname.value
        employee.desg = empdesg.value
        employee.sal = empsal.value
        console.log(employee);
        // permanently store employee
        localStorage.setItem("employee",JSON.stringify(employee))
        // redirect to detemp.html
        window.location = "detemp.html"
    }
    else{
        alert("Please fill all the details")
    }
}

// get data from local storage
if(localStorage.getItem("employee")){
    var displayData = JSON.parse(localStorage.getItem("employee"))
    console.log(displayData);
    display.innerHTML = `
    <div class="card shadow" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${displayData.name}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">ID : ${displayData.id}</h6>
    <h6 class="card-subtitle mb-2 text-body-secondary">Designation : ${displayData.desg}</h6>
    <h6 class="card-subtitle mb-2 text-body-secondary">Salary : ${displayData.sal}</h6>
  </div>
</div>
    `
}
else{
    display.innerHTML = `<h1 class="text-center text-danger"> Nothing To Display !!!!</h1>`
}

function back(){
    // redirect to regemp.html
    window.location = "regemp.html"
}