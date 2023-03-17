let count=0;
let savele=document.getElementById("save-el");
let x= document.getElementById("count-el");
function myfunction(){
    count+=1;
  x.textContent=count;
}
function save()
{
    let countstr=count+" - ";
    savele.textContent+=countstr;
    x.textContent=0;
    count=0;
}


 