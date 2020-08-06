const shareButton=document.querySelector("#share-button");

shareButton.addEventListener('click',function(){
    var social= "twitter"
    var url="https://wejapa-internship-team-javascript-o.github.io/Stop-Watch-App/"
    var text="My Stopwatch link"
    

   

    if(social == "facebook" || social == "twitter") 
    { 
        switch(social) {
    
            case "facebook":
                var sharer = "https://www.facebook.com/sharer/sharer.php?u=" + url;
                window.open(sharer, 'sharer', 'width=626,height=436');
            break;
    
            case "twitter": 
                var sharer = "http://twitter.com/share?text="+text+"&url="+url;
                window.open(sharer, 'sharer', 'width=626,height=436');
            break;
            
        }
         } else {
            console.log(social)
        console.log("Share not found"); 
        return false; 
   
    }

        
        
    }
    
)
