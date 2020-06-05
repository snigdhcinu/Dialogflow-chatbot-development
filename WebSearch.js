// to return all results.
    // var query=document.getElementById("searchTerm").value;
    // var key="aa9ff8a2e995e313de65cf398159906d";
    console.log('outside normSearch');
function normSearch()
{
    var query=document.getElementById("searchTerm").value;
    var key="aa9ff8a2e995e313de65cf398159906d";
    var url="http://api.serpstack.com/search?access_key="+key+"&type=web&query="+query;
    var result='';
    console.log('inside normSearch');
        // get request with a call back function
    console.log('ready to send request');
    let request=new XMLHttpRequest();
    request.open('Get',url);
    request.responseType='json';
    var data=request.response;
    document.getElementById("result").innerHTML="";
    request.onload=function()
    {
        console.log('request loaded.')
       // console.log(request.response.organic_results);
        // request.response.organic_results.forEach(res=>{
        //     result="<h1>"+res.title+"</h1><br><a href="+res.url+">"+res.url+"</a><p>"+res.snippet+"</p>";
        for(let i=0;i<4;i++)
        {
           let res=request.response.organic_results[i]; // Access each of the response.
           if(i==0)
            result="<ul id='list-body'>";
           result="<li class='list-item'><a class='response-link' href='"+res.url+"'>"+"<p class='response-title'>"+res.title+"</p>"+"</a></li>";
           // var node=document.createNode(result);
           if(i==3)
            result="</ul>";
            var div=document.getElementById("result");
            //div.appendChild(node);
            div.innerHTML+=result;
        }
        // })   // Closing tag for foreach loop.
    }
    request.send();
}
