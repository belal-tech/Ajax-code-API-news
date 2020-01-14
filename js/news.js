var req=new XMLHttpRequest();
var posts=[]
    
var counrties=document.getElementsByClassName("nav-link")
var testdata=document.getElementById("testdatajason");
for(var i=0;i<counrties.length;i++)
    {
counrties[i].addEventListener("click",function(e)
                          {
    counrties=e.target.innerHTML
    newss(counrties)
})
    }


function newss(country)
{
    
req.open("GET","https://newsapi.org/v2/top-headlines?country="+country+"&category=business&apiKey=5cede2047ba24a2ab8c61485731a7efc")
req.send()

req.onreadystatechange=function()
{
   
   
    console.log("the state is "+req.readyState)
    if(req.status==200&&req.readyState==4)
        {
            console.log(req.status)
          posts=JSON.parse(req.response) 
         posts=posts.articles;    
            console.log(posts)
            
            displayss()
        }
}
}
function displayss()
{    
    var col =""
    
for(var i=0;i<posts.length;i++)
    {
        
         
       col+= `
               
             <div class="col-md-4">
 <a href="`+posts[i].url+`">
 <img src="`+posts[i].urlToImage+`" class="img-fluid" />
               <P>`+posts[i].title+`</P>
 </a>
             </div>
   
             `
        
    }
    document.getElementById("testdatajason").innerHTML=col
}


