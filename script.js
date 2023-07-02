function compute()
{
    let date=new Date().getFullYear();
    let d=parseFloat(date);
    let p = parseFloat(document.querySelectorAll("#principal").value);
    let r = parseFloat(document.getElementById("rate").value);
    let t = parseFloat(document.getElementById("years").value);
    let I=p*t*r/100;
    let year=d+t;
    let Amount= p+I;
    let text="If you deposit " + "<mark>"+p+"</mark>" + " at a rate of <mark>" + r + "</mark> for <mark>" + t + "</mark> years, you will get a total amount of <mark>" +Amount+ "</mark> by <mark>"+year+"</mark>";
    document.getElementById("result").innerHTML=text;
}

        
function updaterate(){
    rateval=document.getElementById('rate').value;
    document.getElementById("rate_val").innerHTML=rateval+"%";
}

function valid(){
    p=document.getElementById('principal').value;
    if (p<0){
        alert("Enter Positive number");
        document.getElementById('principal').value="";
        document.getElementById('principal').focus();
    }
}

