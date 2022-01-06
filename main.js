var pagecounter=1
var empdiv=document.getElementById("empty-div")


var btn=document.getElementById("btn")
btn.addEventListener("click",function(){


    var ourrequest=new XMLHttpRequest()

    ourrequest.open('GET',"https://learnwebcode.github.io/json-example/animals-"+pagecounter+".json")
    
    ourrequest.onload=function(){
    var ourdata=JSON.parse(ourrequest.responseText)
    
    renderHTML(ourdata)
    }
    
    ourrequest.send()
    pagecounter++

    if(pagecounter>3){
        btn.classList.add("hide-btn")
    }

})



function renderHTML(data){
    var ourtext=""

    for(var i=0;i<data.length;i++){
        ourtext +="<p>"+data[i].name+"is a"+data[i].species+"</p>"
    }
    empdiv.insertAdjacentHTML('beforeend',ourtext)

}