//disabel button

//variable to check is all input correct
var key = [];
//hide error message
divs = document.getElementsByTagName("DIV");
for (theDiv in divs) {
    if (divs[theDiv].className == "error") divs[theDiv].style.visibility = "hidden";
}
//validation name
var elname = document.getElementById("name");
elname.onblur = function () {
    key[0] = testName(elname);
}
elname.onkeyup = function () {
    key[0] = testName(elname);
}

function testName(name) {
    if (name.value === "") {
        document.getElementById("nameError").style.visibility = 'visible';
        return 0;
    } else {
        document.getElementById("nameError").style.visibility = "hidden";
        return 1;
    }
}
//validation email
var elemail = document.getElementById("email");
elemail.onblur = function () {
    key[1] = testEmail(elemail);
}
elemail.onkeydown = function () {
    document.getElementById("emailError").style.visibility = 'hidden';

}
elemail.onkeyup = function () {
    setTimeout(function () {
        key[1] = testEmail(elemail);
    }, 1250);

}

function testEmail(email) {
    var rex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if (email.value !== "") {
        if (rex.test(email.value)) {
            return 1;
        } else {
            document.getElementById("emailError").style.visibility = 'visible';
            return 0;
        }
    }

}

//valid checkbox

var elcheckbox = document.getElementById("chk");
elcheckbox.onmousedown = function () {
    key[2] = testCheckbox(elcheckbox);
}

function testCheckbox(checkbox) {
    if (checkbox.checked) {
        console.log('te');
        return 0;
    } else {
        console.log('ne');

        return 1;
    }
}

var button = document.getElementById("button");

button.onmouseover = function () {
    console.log(key[0]);
    console.log(key[1]);
    console.log(key[2]);
    if (key[0] && key[1] && key[2]) {
        console.log("fi");
        button.disabled = false;
    } else {
        console.log("kol");
        button.disabled = true;
    }
}
