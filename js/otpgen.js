var btn= document.getElementById("btn");
var heading= document.getElementById("heading");

var code = '0123456789';

btn.addEventListener("click", ()=>
{
    for(var i=1;i<5;i++)
    {
        var result = Math.floor(Math.random() * 100000);
        // console.log(result);
        heading.innerHTML=result;
    }
});