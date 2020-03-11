var nub = 1;

function PostFunc()
{
    
    var text = document.getElementById("text1").value;
    
    var post1 = document.getElementById("post1")
    var post2 = document.getElementById("reply1")
    var post3 = document.getElementById("reply2")
    
    if(nub==1)
    {
        post1.innerHTML = text;
      
    } 
    else if(nub==2)
    {
        post2.innerHTML = text;
    
    }
    else if(nub==3)
    {
        post3.innerHTML = text;
    }
    nub ++;
    document.getElementById("text1").value = null;
}
function ClearFunc(){
    
    var text = ""

    var post1 = document.getElementById("post1")
    var post2 = document.getElementById("reply1")
    var post3 = document.getElementById("reply2")
    
        post1.innerText = text;
        post2.innerText = text;
        post3.innerText = text;
        nub = 1;
}