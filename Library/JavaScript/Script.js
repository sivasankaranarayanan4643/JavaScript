let correctBook=false;
let correctName=false;
let correctEmail=false;
let correctYear=false;
let correctPrice=false;



let bookList=new Array();
let BookDetails= (function()
{
    function Books(category,bookName,authorEmail,authorName,year,price)
    {
        this.Category=category;
        this.BookName=bookName;
        this.AuthorEmail=authorEmail;
        this.AuthorName=authorName;
        this.Year=year;
        this.Price=price;
    }
    return Books;
}())

function clearmessage()
{
    document.getElementById("bookmessage").innerHTML="";
    document.getElementById("emailmessage").innerHTML="";
    document.getElementById("namemessage").innerHTML="";
    document.getElementById("publishedmessage").innerHTML="";
    document.getElementById("pricemessage").innerHTML="";
    document.getElementById("book").style.borderColor="black";
    document.getElementById("email").style.borderColor="black";
    document.getElementById("name").style.borderColor="black";
    document.getElementById("published").style.borderColor="black";
    document.getElementById("price").style.borderColor="black";
}
function save()
{
    if(correctBook==true&&correctEmail==true&&correctName==true&&correctYear==true&&correctPrice==true)
    {
        alert("Book saved successfully");
        clearmessage();
        
        let category=document.getElementById("category").value;
        let book=document.getElementById("book").value; 
        let email=document.getElementById("email").value; 
        let name=document.getElementById("name").value; 
        let published=document.getElementById("published").value; 
        let price=document.getElementById("price").value; 
        console.log(category);
        bookList.push(new BookDetails(category,book,email,name,published,price));
    
    }
    else{
        alert("please fill all the required details");
    }
    // return false;
}



function checkbook(book)
{
    let bookname=document.getElementById(book);
    let message=document.getElementById(book+"message");
    let regx=/^[a-zA-Z@+#]+$/;
    if(regx.test(bookname.value))
    {
        message.innerHTML="valid";
        message.style.color="green";
        bookname.style.borderColor="black";
        correctBook=true;
    }
    else
    {
        message.innerHTML="Invalid";
        message.style.color="red";
        bookname.style.borderColor="red";
        correctBook=false;
    }
}

function checkemail(id)
{
    let email=document.getElementById(id);
    let message=document.getElementById(id+"message");
    let regx=/^([a-z0-9]+)@([a-z]{2,20})\.([a-z]{2,5})(\.[a-z]{2,5})?/;
    if(regx.test(email.value))
    {
        message.innerHTML="valid";
        message.style.color="green";
        email.style.borderColor="black";
        correctEmail=true;
    }
    else
    {
        message.innerHTML="Invalid";
        message.style.color="red";
        email.style.borderColor="red";
        correctEmail=false;
    }
}
function checkname(name)
{
    let author=document.getElementById(name);
    let message=document.getElementById(name+"message");
    let regx=/^[a-zA-Z@]+$/;
    if(regx.test(author.value))
    {
        message.innerHTML="valid";
        message.style.color="green";
        author.style.borderColor="black";
        correctName=true;
    }
    else
    {
        message.innerHTML="Invalid";
        message.style.color="red";
        author.style.borderColor="red";
        correctName=false;
    }
}
function checkpublished(year)
{
    let published=document.getElementById(year);
    let message=document.getElementById(year+"message");
    if(parseInt(published.value)>1000&&parseInt(published.value)<2100)
    {
        message.innerHTML="valid";
        message.style.color="green";
        published.style.borderColor="black";
        correctYear=true;
    }
    else
    {
        message.innerHTML="Invalid";
        message.style.color="red";
        published.style.borderColor="red";
        correctYear=false;
    }
}
function checkprice(price)
{
    let amount=document.getElementById(price);
    let message=document.getElementById(price+"message");
    let regx=/^[0-9]+\.[0-9][0-9]+/;
    if(regx.test(amount.value)&& amount.value!="0")
    {
        message.innerHTML="valid";
        message.style.color="green";
        amount.style.borderColor="black";
        correctPrice=true;
    }
    else
    {
        message.innerHTML="Invalid";
        message.style.color="red";
        amount.style.borderColor="red";
        correctYear=false;
    }
}
function showpage()
{
    let form=document.getElementById("form").style;
    let contentpage=document.getElementById("contentpage");
    let content=document.getElementById("contents");
    result="";
    form.display="none";
    contentpage.style.display="block";
    if(bookList.length>0)
    {
        bookList.forEach((book)=>
    {
        result+=`<h2>${book.BookName} Details</h2><table><tr><th>Category</th><td>${book.Category}</td></tr><tr><th>Book Name</th><td>${book.BookName}</td></tr><tr><th>Author Email</th><td>${book.AuthorEmail}</td></tr>`;
        result+=`<tr><th>AuthorName</th><td>${book.AuthorName}</td></tr><tr><th>Published</th><td>${book.Year}</td></tr><tr><th>Price</th><td>${book.Price}</td></tr></table>`;
    })
    }
    else{
        result="<h2>No Books to show</h2>"
    }
content.innerHTML=result;
}

function returnpage()
{
    let form=document.getElementById("form");
    let contentpage=document.getElementById("contentpage");
    form.style.display="block";
    contentpage.style.display="none";
}
