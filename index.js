function myFun()
{
document.getElementById("logid").style.display="inline";
document.getElementById("regid").style.display="none";
}

function myFun1()
{
    document.getElementById("regid").style.display="inline";
    document.getElementById("logid").style.display="none";
}

function myFun3()
{
let x1=document.getElementById("inid").value;
let usid1=/^[a-zA-Z]{3,10}$/;
if(x1.match(usid1))
{
    document.getElementById("uid").innerHTML="valid user name" ;
}
else if(x1=="")
{
    document.getElementById("uid").innerHTML="please enter a user name";
}
else{
    document.getElementById("uid").innerHTML="invalid user name";

}

let y1=document.getElementById("psid").value;
let psid1=/^[0-9]{10}$/;
if(y1.match(psid1))
{
    document.getElementById("pid").innerHTML="valid password";
}
else if(y1=="")
{
    document.getElementById("pid").innerHTML="please enter a password";
}
else
{
    document.getElementById("pid").innerHTML="not valid password"
}
}

function myFun4()
{
    let a=document.getElementById("a11").value;
    let fspa=/^[a-zA-Z]{3,10}$/;
    if(a.match(fspa))
    {
        document.getElementById("aid").innerHTML="valid first name";
    }
    else if(a=="")
    {
        document.getElementById("aid").innerHTML="please enter a first name";
    }
    else
    {
        document.getElementById("aid").innerHTML="invalid  first name";
    }

    let b=document.getElementById("a12").value;
    let uspa=/^[a-zA-Z]{3,10}$/;
    if(b.match(uspa))
    {
        document.getElementById("bid").innerHTML="valid user name";
    }
    else if(b=="")
    {
        document.getElementById("bid").innerHTML="please enter a user name";
    }
    else
    {
        document.getElementById("bid").innerHTML="invalid user name";
    }

    let c=document.getElementById("a13").value;
    let pspa=/^[0-9]{10}$/;
    if(c.match(pspa))
    {
        document.getElementById("cid").innerHTML="valid password";
    }
    else if(c=="")
    {
        document.getElementById("cid").innerHTML="please enter a password";
    }
    else
    {
        document.getElementById("cid").innerHTML="invalid password";
    }

    let d=document.getElementById("a14").value;
    let mspa=/^[7-8-9][0-9]{9}$/;
    if(d.match(mspa))
    {
        document.getElementById("did").innerHTML="valid mobile number";
    }
    else if(d=="")
    {
        document.getElementById("did").innerHTML="please enter a mobile number";
    }
    else{
        document.getElementById("did").innerHTML="invalid mobile number";
    }
}