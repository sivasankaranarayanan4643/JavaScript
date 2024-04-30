let flag=false;
let operation;
let results=0;
let ongoing=true;
let show=document.getElementsByClassName("results")[0];


function displayclear(e)
{
    
    
    results=0;
    show.innerHTML="0";
    flag=false;
    ongoing=false;
    operation="";
    e.disabled=true;
    e.disabled=false;
}
function display(number,e)
{
    if(show.innerHTML!="NaN")
    {
        if(show.innerHTML=="0")
        {
            show.innerHTML=number;
        }
        else
        {
            show.innerHTML+=number;
        }
        ongoing=false;
        console.log(show.innerHTML[show.innerHTML.length-1]);
    }
    e.disabled=true;
    e.disabled=false;
}
function divide(e)
{
    if(!ongoing)
    {
        if(!flag)
        {
            results+=parseInt(show.innerHTML);
            flag=true;
        }
        else
        {
            results/=parseInt(show.innerHTML);
        }
        operation="divide";
        show.innerHTML="0";
        ongoing=true;
    }
    else
    {
        show.innerHTML=parseInt('+');
    }
    e.disabled=true;
    e.disabled=false;
}
function add(e)
{
    if(!ongoing)
    {
        results+=parseInt(show.innerHTML);
        operation="add";
        show.innerHTML="0";
        ongoing=true;
    }
    else
    {
        show.innerHTML=parseInt('+');
    }
    e.disabled=true;
    e.disabled=false;
}    
function subtract(e)
{
    if(!ongoing)
    {
        if(!flag)
        {
            results+=parseInt(show.innerHTML);
            flag=true;
        }
        else
        {
            results-=parseInt(show.innerHTML);
        }
        operation="subtract";
        show.innerHTML="0";
        ongoing=true;
        e.disabled=true;
        e.disabled=false;
    }
    else
    {
        show.innerHTML=parseInt('+');
    }
}
function multiply(e)
{
    if(!ongoing)
    {
        if(!flag)
        {
            results+=parseInt(show.innerHTML);
            flag=true;
        }
        else
        {
            results*=parseInt(show.innerHTML);
        }
        operation="mul";
        show.innerHTML="0";
        ongoing=true;
    }
    else
    {
        show.innerHTML=parseInt('+');
    }
    e.disabled=true;
    e.disabled=false;
}
function equals(e)
{
    if(operation=="add")
    {
        if(show.innerHTML=="0")
        {
            show.innerHTML=results;
            ongoing=false;
        }
        else
        {
        show.innerHTML=(results+parseInt(show.innerHTML));
        }
    }
    else if(operation=="subtract")
    {
        if(show.innerHTML=="0")
        {
            show.innerHTML=results;
            ongoing=false;
        }
        else
        {

            show.innerHTML=(results-parseInt(show.innerHTML));
        }
    }
    else if(operation=="mul")
    {
        if(show.innerHTML=="0")
        {
            show.innerHTML=results*0;
            ongoing=false;
        }
        else
        {
            show.innerHTML=(results*parseInt(show.innerHTML));
        }
    }
    else if(operation=="divide")
    {
        if(show.innerHTML=="")
        {
            show.innerHTML=results/0;
            ongoing=false;
        }
        else
        {

            show.innerHTML=(results/parseInt(show.innerHTML));
        }
    }
    
    results=0;
    flag=false;
    e.disabled=true;
    e.disabled=false;
}
addEventListener("keydown",function(event)
{
    if(event.key=='0'||event.key=='1'||event.key=='2'||event.key=='3'||event.key=='4'||event.key=='5'||event.key=='6'||event.key=='7'||event.key=='8'||event.key=='9')
    {
        display(event.key);
    }
    else if(event.key=='+')
    {
        add();
    }
    else if(event.key=='-')
    {
        subtract();
    }
    else if(event.key=='*')
    {
        multiply();
    }
    else if(event.key=='/')
    {
        divide();
    }
    else if(event.key=="Enter" ||event.key=='=')
    {
        equals();
    }
    else if(event.key=="Backspace")
    {
        deletenum();
    }
    
})
function deletenum(e)
{
    show.innerHTML=show.innerHTML.slice(0,show.innerHTML.length-1);
    if(show.innerHTML=="")
    {
        show.innerHTML=0;
    }
    e.disabled=true;
    e.disabled=false;
}
