function showLt(){

    document.getElementById("ShowList").classList.remove("d-none")

}

function showTask(){

    document.getElementById("addTaskBtn").classList.remove("d-none")
    document.getElementById("taskBox").classList.remove("d-none")
    var as=document.getElementById("listNameData").value
    document.getElementById("listName").innerHTML=as
    document.getElementById("listNameData").value=""
    listNameData.placeholder="Rename your List Name"
    document.getElementById("btn").innerHTML="Rename"

}

function addTask(){

    var taskDiv=document.createElement("div")
    taskDiv.classList.add("row")
    var asd=document.getElementById("taskData").value
    taskDiv.innerHTML=`<div class="col"><input type="checkbox" onclick="strikeOver(this)"><p class="mt-2 d-inline-block ps-2">`+asd+`</p></div>
    <div class="col-2 text-center"><button class="btn btn-sm text-white" onclick="removeTask(this)">X</button></div>`
    document.getElementById("task").appendChild(taskDiv)
    document.getElementById("taskData").value=""
    taskData.placeholder="Type your next task here"
 
}

function strikeOver(el){

    if(el.checked){

        el.nextElementSibling.classList.add("text-decoration-line-through")
        
    }else{

        el.nextElementSibling.classList.remove("text-decoration-line-through")

    }
       
}

function removeTask(ab){

    ab.parentNode.parentNode.classList.add("d-none")
    
}