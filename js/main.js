var array=[];
var value;
var final;


function getValue(){
    var date=new Date();
    date=date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    date=date.toString();
    
value=document.getElementById("input").value+" "+date;
if(document.getElementById("input").value!=""){
array.push(value);
final=array.toString();
final=final.replace(/,/g,"<br>");
document.getElementById("output").innerHTML=final;
value=document.getElementById("input").value="";
}
}

function remove(){
 array.pop();
 final=array.toString();
 final=final.replace(/,/g,"<br>");
 document.getElementById("output").innerHTML=final;
value=document.getElementById("input").value="";
}
