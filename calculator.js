let btn=document.querySelector("#display");
function appendvalue(val)
{
    btn.value+=val;
}
let str="";
function del1()
{
    str=btn.value;
    let m=str.slice(0,str.length-1)
    btn.value=m;
}
function clear1()
{
    btn.value="";
}
function result()
{
    try{
        btn.value=eval(btn.value);
    }
    catch{
        btn.value="SYNTAX ERROR";
    }
}
 
