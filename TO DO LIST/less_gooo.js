
var numclicks = [0, 0, 0];
document.getElementById("add").addEventListener("click", check);
var counter = 3;

function check() {
    var a = document.getElementById("new").value;
    if (a == '') {
        alert("You must write something!");
    }
    else {
        var unlis = document.getElementById("tasks");
        var button = document.createElement('BUTTON');
        button.id = "button" + counter;


        var data = document.createTextNode(a);
        button.appendChild(data);


        var newli = document.createElement('li');
        newli.id = "newtask" + counter;
        newli.className = "hello";
        newli.appendChild(button);
        unlis.appendChild(newli);
        // console.log(data);
        counter++;

        // newli.appendChild(data);
        // document.getElementById("tasks").appendChild(newli);
    }
    document.getElementById("new").value = '';
    // console.log()
    numclicks.push(0);

}
// var currentList = document.getElementsByClassName("hello");

// for (var i = 0; i < currentList.length; i++) {
//     var temp = document.getElementById(`newtask${i}`);
//     console.log(temp);
//     temp.addEventListener("click", function strike() {
//         console.log(i);
//     });

// }
var list = document.querySelectorAll("ul");
list[0].addEventListener('click', function (event) {


    var id = (event.target.id)
    var txt;
    txt = id[id.length - 1];
    numclicks[txt]++;


    if (numclicks[txt] % 2 == 0) {
        document.getElementById(id).style.textDecoration = "none";
    }
    else {
        // var txt = event.target.innerText;
        document.getElementById(id).style.textDecoration = "line-through";
    }



});

var del = 0;

document.getElementById("delete").addEventListener("click", removetask);




function removetask() {
    del = 0;
    var id;
    var list = document.querySelectorAll("ul");
    list[0].addEventListener('click', function (event) {


        id = (event.target.id);
        console.log(id)
        if (del % 2 == 0) {


            // var txt = event.target.innerText;
            console.log(document.getElementById(id))
            document.getElementById(id).remove();

            del++;

        }

    });
    // console.log(id)





}

document.querySelector(".plus")
    .addEventListener("keyup", function (event) {
        if (event.key == "Enter") {
            check();
        }
    });