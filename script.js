function showLt(){

    document.getElementById("ShowList").classList.remove("d-none")

}

function showTask(){

    document.getElementById("addTaskBtn").classList.remove("d-none")
    document.getElementById("taskBox").classList.remove("d-none")
    var as=document.getElementById("listNameData").value
    document.getElementById("listName").innerHTML=as
    document.getElementById("btn").innerHTML="Rename"

}

function addTask(){

    var taskDiv=document.createElement("div")
    taskDiv.classList.add("row")
    var asd=document.getElementById("taskData").value
    taskDiv.innerHTML=`<div class="col"><input type="checkbox"><p class="mt-2 d-inline-block ps-2">`+asd+`</p></div>
    <div class="col-2 col-sm-2 text-center"><button class="btn btn-sm text-white">X</button></div>`
    document.getElementById("task").appendChild(taskDiv)
 
}