// I did not copy and paste all the client-side code from A2.
// Nope. Not at all.

// Add some Javascript code here, to run on the front end.

var toastElList;
var toastList
var ntModal;
var edModal;
var dtModal;


function toaster(content) {
    document.getElementById("toaster-content").innerHTML = content
    var toast = new bootstrap.Toast(document.getElementById("toaster"))
    toast.show()
}

const postItem = function() {
    //e.preventDefault()

    var name = document.getElementById("taskName").value
    var duedate = document.getElementById("taskDueDate").value
    var priority = document.getElementById("taskPriority").value
    var category = document.getElementById("taskCategory").value

    if (name == "" || priority == "" || category == "" || duedate == "") {
        document.getElementById("taskValidation").style.display = ""
        return
    } else {
        document.getElementById("taskValidation").style.display = "none"
    }

    var data = {"name": name, "duedate": duedate, "priority": priority, "importance": 1, "category": category}

    fetch('/postData', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(function (text) {
        ntModal.toggle()
        document.getElementById("taskName").value = ""
        document.getElementById("taskDueDate").value = ""
        document.getElementById("taskPriority").value = "1"
        document.getElementById("taskCategory").value = ""
        if (text != "OK") {
            toaster("The task wasn't added. Try again later.")
        } else {
            const event = new Event("ftr")
            document.dispatchEvent(event)
            toaster("The task has been added successfully.")
        }
    })

    return false
}

function whoAmI() {
    fetch('/whoami', {
        method: "GET",
    })
    .then(response => response.text())
    .then(function (text) {
            document.getElementById("usernamedisplay").innerHTML = text
    })
}


window.onload = function () {
    toastElList = [].slice.call(document.querySelectorAll('.toast'))
    toastList = toastElList.map(function (toastEl) {
        return new bootstrap.Toast(toastEl)
    })

    ntModal = new bootstrap.Modal(document.getElementById('newTaskModal'))
    edModal = new bootstrap.Modal(document.getElementById('editTaskModal'))
    dtModal = new bootstrap.Modal(document.getElementById('deleteTaskModal'))
    
    whoAmI()

    //button = document.querySelector("#input-submit")
    //button.onclick = postItem
}
