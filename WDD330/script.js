var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
var span = document.createElement("SPAN");
var txt = document.createTextNode("\u00D7");
span.className = "close";
span.appendChild(txt);
myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
    }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checkMark');
    }
}, false);

function newTask() {
var li = document.createElement("li");
var inputValue = document.getElementById("inputOne").value;
var t = document.createTextNode(inputValue);
li.appendChild(t);
if (inputValue === '') {
    alert("You must write something!");
} else {
    document.getElementById("leftOverTasks").appendChild(li);
}
document.getElementById("inputOne").value = "";

var span = document.createElement("SPAN");
var txt = document.createTextNode("\u00D7");
span.className = "close";
span.appendChild(txt);
li.appendChild(span);

for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
    }
}
}

function allTasks() {
    var myNodelist = document.getElementsByTagName("LI");
    var i;
    var count = 0;
    for (i = 0; i < myNodelist.length; i++) {
        count = count + 1
        document.getElementById("leftOverTasks")
    }
}

function activeTasks() {
    var myNodelist = document.getElementsByTagName("LI");
    var i;
    var close = document.getElementsByClassName("close");
    var count = 0;
    for (i = 0; i < myNodelist.length; i++) {
        if (myNodelist == closed)
            count = count + 1
            document.getElementById("leftOverTasks")
    }
}

function completedTasks() {
    var myNodelist = document.getElementsByTagName("LI");
    var i;
    var close = document.getElementsByClassName("close");
    var count = 0;
    for (i = 0; i < myNodelist.length; i++) {
        if (myNodeList != closed)
        count = count + 1
        document.getElementById("leftOverTasks")
    }
}