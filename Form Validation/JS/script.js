let selectTamil=false;
let selectEnglish=false;
let selectFrench=false;
let selectMusic=false;
let selectCycling=false;
let selectBadmiton=false;

    let isValid=true;
    var username;
    var usermail;


    let form=document.getElementsByClassName("form")[0];
    let data=document.getElementsByClassName("dataview")[0];
    let male=document.getElementById("male");
    let female=document.getElementById("female");
    let notDisclose=document.getElementById("notToDisclose");
    let gender=document.getElementById("gender");
    var tablename=document.getElementById("user-name");
    var tablemail=document.getElementById("user-mail");
    var userPhone=document.getElementById("user-phone")
    var userPass=document.getElementById("user-pass");
    var userGender=document.getElementById("user-gender");
    let firstname=document.getElementById("fname");
    let lastname=document.getElementById("lname");
    let email=document.getElementById("email");
    let phone=document.getElementById("phone");
    let password=document.getElementById("password");
    let address=document.getElementById("address")
    let userAddress=document.getElementById("user-address");
    let dob=document.getElementById("dob");
    let userDOB=document.getElementById("user-dob");
    let language=document.getElementById("language");
    let tamil=document.getElementById("tamil");
    let english=document.getElementById("english");
    let french=document.getElementById("french");
    let userLang=document.getElementById("user-lang");
    let time=document.getElementById("time");
    let usertime=document.getElementById("user-time");
    let interest=document.getElementById("interest");
    let music=document.getElementById("music");
    let cycling=document.getElementById("cycling");
    let badmiton=document.getElementById("badmiton");
    let userInterest=document.getElementById("user-interest");
    let files=document.getElementById("files");

    var validPhone=/^[6-9][0-9]{9}/;
    var regx = /^[a-zA-Z@]+$/;
    var validEmail=/^([a-z0-9]+)@([a-z]{2,20})\.([a-z]{2,5})(\.[a-z]{2,5})?/;
    firstname.addEventListener("change",function()
{
    
    if(!(regx.test(firstname.value))||firstname.value=="")
    {
        isValid=false;
       firstname.classList.add("border");
    }
    else {
        
        username=firstname.value;
        firstname.classList.remove("border");
        isValid=true;
        
    }
})
console.log(firstname.value!="");

   lastname.addEventListener("change",function()
{
    if(regx.test(lastname.value))
    {
        username+=lastname.value;
        lastname.classList.remove("border");
        isValid=true;
        
        tablename.innerHTML = username;
    }
    else{
        isValid=false;
        lastname.classList.add("border");
        
    }
})
    
email.addEventListener("change",function()
{
    if(validEmail.test(email.value))
    {
        usermail=email.value;
        tablemail.innerHTML=usermail;
        isValid=true;
        email.classList.remove("border");
    }
    else
    {
        isValid=false;
        email.classList.add("border");
    }
})
phone.addEventListener("change",function()
{
    if(validPhone.test(phone.value))
    {
        userPhone.innerHTML=phone.value;
        firstname.classList.remove("border");
        isValid=true;
    }
    else
    {
        isValid=false;
        phone.classList.add("border");
    }
})
password.addEventListener("change",function()
{
    if(password.value.length<8)
    {
        isValid=false;
        password.classList.add("border");
    }
    else
    {
        isValid=true;
        password.classList.remove("border");
        userPass.innerHTML=password.value;
    }
})
    

    
   
   
    
    
    address.addEventListener("change" ,function()
{
    if(address.value.length>5)
    {
        userAddress.innerHTML=address.value;
        address.classList.remove("border");
        isValid=true;
    }
    else
    {
        isValid=false;
        address.classList.add("border");
    }

})
    
dob.addEventListener("change", function()
{
    
    if(dob.value.length>10||dob.value==""||dob.ariaRequired)
    {
        isValid=false;
        dob.classList.add("border");
        console.log(dob.value);
    }
    else{
        userDOB.innerHTML=dob.value;
        dob.classList.remove("border");
        isValid=true;
    }
})   
    
    

  
    
    

    
    
    time.addEventListener("change",function()
{
    if(time.value==""||time.value<5)
    {
        time.classList.add("border");
        isValid=false;
    }
    else{
        let zone="PM";
        if(parseInt(time.value.slice(0,2))<12)
        {
            zone="AM";
        }
        usertime.innerHTML=`${time.value} ${zone}`;
        time.classList.remove("border");
        isValid=true;
    }
})



files.addEventListener("change" ,function()
{
    if(files.value=="")
    {
        isValid=false;
        files.classList.add("border");
    }
    else
    {
        isValid=true;
        files.classList.remove("border");
    }
})
function validate()
{
    


   
    
   
    
    if(male.checked==true||female.checked==true||notDisclose.checked==true)
    {
        if(male.checked)
        {
            userGender.innerHTML=male.value;
        }
        else if(female.checked)
        {
            userGender.innerHTML=female.value;
        }
        else
        {
            userGender.innerHTML=notDisclose.value;
        }
    }
    else
    {
        isValid=false;
        gender.classList.add("notselect");
    }
    
   
    
    

  
    
    if(tamil.checked||english.checked||french.checked)
    {
        if(tamil.checked&& !selectTamil)
        {
            userLang.innerHTML+=`<li>${tamil.value}</li>`;
            selectTamil=true;
        }
        if(english.checked &&!selectEnglish)
        {
            userLang.innerHTML+=`<li>${english.value}</li>`;
            selectEnglish=true;
        }
        if(french.checked&&!selectFrench)
        {
            userLang.innerHTML+=`<li>${french.value}</li>`;
            selectFrench=true;
        }
    }
    else
    {
        isValid=false;
        language.style.backgroundColor="red";
        language.style.color="white";
    }

    
    if(music.selected||cycling.selected||badmiton.selected)
    {
        if(music.selected&&!selectMusic)
        {
            userInterest.innerHTML+=`<li>${music.value}</li>`;
            selectMusic=true;
        }
        if(cycling.selected && !selectCycling)
        {
            userInterest.innerHTML+=`<li>${cycling.value}</li>`;
            selectCycling=true;
        }
        if(badmiton.selected && !selectBadmiton)
        {
            userInterest.innerHTML+=`<li>${badmiton.value}</li>`;
            selectBadmiton=true;
        }
    }
    else
    {
        isValid=false;
        interest.style.backgroundColor="red";
        interest.style.color="white";
    }

    
    if(isValid)
    {
        form.classList.add("displaying");
        data.classList.remove("displaying");
    }

    
    return false;
    
}
