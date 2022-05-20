let c = 0

function taskCreate(event){
    if (event.keyCode == 13){
        c++
        task(c) 
        msg.value = ""
    }
}

function task(c){
    let msg = document.getElementById("msg")
    let main = document.getElementById("main")
    let task = document.createElement("label")
    task.setAttribute("id", "task"+c)
    task.setAttribute("class", "task")
    task.innerHTML=`
    <label for="box${c}" id="label${c}">
        <input type="checkbox" id="box${c}" class="check" onclick="taskDone(${c})">
        <p id="p${c}">${msg.value}</p>
    </label>
    <button id="btn${c}" onclick="taskDelete(${c})">x</button>`
    main.appendChild(task)
}

function taskDelete(c){
    let task = document.getElementById("task"+c)
    let main = document.getElementById("main")
    main.removeChild(task)
}

function taskDone(c){
    let p = document.getElementById("p"+c)
    let checkBox = document.getElementById("box"+c)
    if (checkBox.checked){
        p.innerHTML = `<del id="del${c}">${p.innerHTML}</del>`
    }else{
        p.innerHTML = document.getElementById("del"+c).innerHTML
    }
}

