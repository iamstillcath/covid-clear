const form = document.querySelector("#form-output");
let submitBtn = document.getElementById("Submit");
let showTable = document.getElementById("display");
let alerts = document.getElementById("alert");
let upAlert = document.getElementById('upAlert');
let Delete = document.getElementById('delete');
let listDelete = document.getElementsByClassName('list');
let clearBtn =document.getElementById("reset");
let selectedRow;


document.querySelector('#firstName').addEventListener("input", function (e) {
    e.preventDefault();
    e.target.value = e.target.value.trim()
})
document.querySelector('#lastName').addEventListener("input", function (e) {
    e.preventDefault();
    e.target.value = e.target.value.trim()
})

form.addEventListener("submit", function (e) {
    e.preventDefault()


    if (submitBtn.textContent == "Submit") {
        showTable.className = "show"
        let firstname = document.getElementById("firstName").value;
        let lastname = document.getElementById("lastName").value;
        const emailAddress = document.getElementById("emailAddress").value;
        const Gender = document.querySelector("#Gender").value;
        const yesNO = document.querySelector("input[type=checkbox]").checked


        let table = document.getElementById("display").getElementsByTagName("tbody")[0];
        let newRow = table.insertRow(table.length);
        let name = newRow.insertCell(0);
        name.innerText = lastname.charAt(0).toUpperCase() + lastname.slice(1) + " " + firstname.toUpperCase();
        let email = newRow.insertCell(1)
        email.innerHTML = emailAddress;
        let gender = newRow.insertCell(2);
        gender.innerHTML = Gender;
        let yesno = newRow.insertCell(3);
        if (yesNO == true) {
            yesno.innerHTML = "yes";
        } else { yesno.innerHTML = "no" }

        let editbtn = document.createElement('input');
        editbtn.type = "button";
        editbtn = newRow.insertCell(4);
        editbtn.innerHTML = "Edit";
        editbtn.style.cursor="pointer"

        let delbtn = document.createElement('button');
        delbtn = newRow.insertCell(5);
        delbtn.type = "button";
        delbtn.innerHTML = "Delete";
        delbtn.style.cursor="pointer"


        document.getElementById("firstName").value = "";
        document.getElementById('lastName').value = '';
        document.getElementById("emailAddress").value = "";
        document.getElementById("Gender").value = "";
        document.querySelector('input[type=checkbox]').checked = false;
   

        editbtn.addEventListener("click", function (e) {
            e.preventDefault()
            selectedRow = e.target.parentElement;
            let seperate = name.innerText;
            let [firstname, lastnames] = seperate.split(" ");
            document.getElementById("firstName").value = lastnames.toLowerCase();
            document.getElementById('lastName').value = firstname.toLowerCase();
            document.getElementById("emailAddress").value = emailAddress;
            document.getElementById("Gender").value = Gender;
            let chd = e.target.parentElement.children[3]
            if (chd.innerHTML == "yes") {
                document.querySelector("input[type=checkbox]").checked = true;

            } else { document.querySelector("input[type=checkbox]").checked = false }
            submitBtn.innerText = "Update";
        })
        delbtn.addEventListener("click", function (e) {
            e.preventDefault()
            e.target.parentElement.innerHTML = ''

            if (Delete.className == "show") {
                Delete.className = ""

            } else {
                Delete.classList.add('show')
                setTimeout(function () {
                    Delete.classList.remove('show')
                }, 1000)
            }
        })
        clearBtn.addEventListener('click' ,function(){
      
            console.log('this is clearbtn',clearBtn)
            if( submitBtn.innerText=="Update"){
            submitBtn.innerText="Submit";
        }else {submitBtn="Submit"}
        })

      

        if (alerts.className == "show") {
            alerts.className = ""

        } else {
            alerts.classList.add('show')
            setTimeout(function () {
                alerts.classList.remove('show')
            }, 1000)
        }




    } else {
        selectedRow.innerHTML = "";

        if (upAlert.className == "show") {
            upAlert.className = ""

        } else {
            upAlert.classList.add('show')
            setTimeout(function () {
                upAlert.classList.remove('show')
            }, 1000)
        }
       

        submitBtn.innerText = "Submit";
        let firstname = document.getElementById("firstName").value;
        let lastname = document.getElementById("lastName").value;
        const emailAddress = document.getElementById("emailAddress").value;
        const Gender = document.getElementById("Gender").value;
        const yesNO = document.querySelector("input[type=checkbox]").checked
        let yesno
        if (yesNO == true) {
            yesno = "yes";
        } else { yesno = "no" }

        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let editbtn = document.createElement('td');
        let delbtn = document.createElement('td');



        td1.textContent = lastname.charAt(0).toUpperCase() + lastname.slice(1) + " " + firstname.toUpperCase();
        td2.textContent = emailAddress;
        td3.textContent = Gender;
        td4.textContent = yesno;

        editbtn.type = "button";
        editbtn.innerHTML = "Edit";
        editbtn.style.cursor="pointer"

        delbtn.type = "button";
        delbtn.innerHTML = "Delete";
        delbtn.style.cursor="pointer"


        selectedRow.appendChild(td1);
        selectedRow.appendChild(td2);
        selectedRow.appendChild(td3);
        selectedRow.appendChild(td4);
        selectedRow.appendChild(editbtn);
        selectedRow.appendChild(delbtn);
      

        document.getElementById("firstName").value = "";
        document.getElementById('lastName').value = '';
        document.getElementById("emailAddress").value = "";
        document.getElementById("Gender").value = "";
        document.querySelector('input[type=checkbox]').checked = false;

        editbtn.addEventListener("click", function (e) {
            e.preventDefault()
            selectedRow = e.target.parentElement;
            submitBtn.innerText = "Update";
            let seperate = td1.innerText;
            let [firstname, lastnames] = seperate.split(" ");
            document.getElementById("firstName").value = lastnames.toLowerCase();
            document.getElementById('lastName').value = firstname.toLowerCase();
            document.getElementById("emailAddress").value = emailAddress;
            document.getElementById("Gender").value = Gender;
            let chd = e.target.parentElement.children[3]
            if (chd.innerHTML == "yes") {
                document.querySelector("input[type=checkbox]").checked = true;

            } else { document.querySelector("input[type=checkbox]").checked = false }


        })
        delbtn.addEventListener("click", function (e) {
            e.preventDefault()
            e.target.parentElement.innerHTML = "";


            if (Delete.className == "show") {
                Delete.className = ""

            } else {
                Delete.classList.add('show')
                setTimeout(function () {
                    Delete.classList.remove('show')
                }, 1000)
            }
        }

        )
    }

})

