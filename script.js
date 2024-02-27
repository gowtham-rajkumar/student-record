console.log("Hey Programmer");

var name1=document.getElementById("name");
var age=document.getElementById("age");
var gender_male=document.getElementById("gender-male");
var gender_female=document.getElementById("gender-female");
var course=document.getElementById("course");
var email=document.getElementById("email");

var student_record=document.getElementById("student-record");


function updateRecord(){

 /* console.log(name1.value);
    console.log(age.value);
    console.log(email.value);

    console.log(typeof name1.value);
    console.log(typeof age.value);
    console.log(typeof email.value);

    if(name1.value.trim().length===0)
    {
        console.log("name")
    }

    if(age.value.trim().length===0)
    {
        console.log("age")
    }

    if(email.value.trim().length===0)
    {
        console.log("email")
    }   */ 
    
    if((name1.value.trim().length===0)||(age.value.trim().length===0)||(email.value.trim().length===0))
    {
        alert("Kindly Enter All the Details to Save");
        return;
    }

    if(gender_male.checked)
    {
        console.log("Maleee");
        var gender=document.getElementById("gender-male");
    }

    else if(gender_female.checked)
    {
        console.log("Femaleee");
        var gender=document.getElementById("gender-female");
    }

    else
    {
        alert("Kindly Mention Your Gender");
        return;
    }


    console.log("update() is working good");
    console.log(name1.value);

    var tr=document.createElement("tr");
    console.log(tr);

    var td1=document.createElement("td");
    console.log(td1);
    td1.textContent= name1.value;
    console.log(td1);
    tr.append(td1);

    var td2=document.createElement("td");
    console.log(td2);
    td2.textContent= age.value;
    console.log(td2);
    tr.append(td2);

    var td3=document.createElement("td");
    console.log(td3);
    td3.textContent= gender.value;
    console.log(td3);
    tr.append(td3);

    var td4=document.createElement("td");
    console.log(td4);
    td4.textContent= course.value;
    console.log(td4);
    tr.append(td4);

    var td5=document.createElement("td");
    console.log(td5);
    td5.textContent= email.value;
    console.log(td5);
    tr.append(td5);

    var td6=document.createElement("td");
    console.log(td6);
    td6.innerHTML= "<button onclick='deleteRecord(event)' id='dlt-btn'>Delete</button>";
    console.log(td6);
    tr.append(td6);

    student_record.append(tr);

}

function deleteRecord(event)
{   
    console.log("Record Deleted");
    console.log("Parent:"+event.target.parentElement);
    console.log("Grand-Parent:"+event.target.parentElement.parentElement);
    event.target.parentElement.parentElement.remove();
}

