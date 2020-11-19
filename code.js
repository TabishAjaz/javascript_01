//var n1=parseInt(0);
//var n2=parseInt(0);
//var firstBox=document.getElementById("one");
//firstBox.addEventListener("click",function(){
    //alert("you clicked"+firstBox.id);
//});


//var add1=document.getElementById("buttn1");
//add1.addEventListener("click",function (){
    //alert("the sum is "+(n1+n2));
//}); 

function sum(){
    var s=0;
    var n1=parseInt(document.getElementById("num1").value);
    var n2=parseInt(document.getElementById("num2").value);
    alert(n1+n2);
    
};
function subs(){
    var s=0;
    
    var n1=parseInt(document.getElementById("num1").value);
    var n2=parseInt(document.getElementById("num2").value);
    alert(n1-n2);
    
};
function mul(){
    var s=0;
    var n1=parseInt(document.getElementById("num1").value);
    var n2=parseInt(document.getElementById("num2").value);
    alert(n1*n2);
    
};
function div(){
    var s=0;
    var n1=parseInt(document.getElementById("num1").value);
    var n2=parseInt(document.getElementById("num2").value);
    alert(n1/n2);
    
};


    var arr=[];
    
function pushTo(){
    var item=document.getElementById("eValue").value;
    arr.push(item);
    
document.getElementById("display").innerHTML=arr;

   
};
function popFrom(){
    
    arr.pop();
    
    document.getElementById("display").innerHTML=arr;


};
function displayDate(){
   
    document.getElementById("date").innerHTML=Date(); 
    
}
var arr1=[];
function order(){
    
    var a=document.getElementById("elements").value;
    arr1.push(a);
    
    document.getElementById("sort").innerHTML=arr1.sort();
}