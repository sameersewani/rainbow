
function change()
{
    var a = document.getElementById('myList');
    if(a.value  == 'Spring')
    {
        var style = document.createElement('style');
        style.innerText =
        `.show
        {
            width: 60vw; height:30vw; position:relative;overflow:hidden;  background:black; 
        }
         .show:after
          {
            content:'';
            position:absolute;
            width:50%;
            height:100%;    
            border-radius: 50%;
            left:25%;
            top:50%;
            box-shadow: 0 0 0 2vw red, 0 0 0 4vw blue, 0 0 0 6vw lightblue, 0 0 0 8vw green, 0 0 0 10vw yellow, 0 0 0 12vw orange ,  0 0 0 14vw red;
         }`;
        var head = document.getElementsByTagName('head');
        document.head.appendChild(style);   
    }
    else if(a.value  == 'Winter')
    {
        var style = document.createElement('style');
        style.innerHTML =`.show{
            width: 60vw;  
            height:30vw;
            position:relative;
            overflow:hidden;  
            background:black;
        } 
        .show:after{
            content:'';
            position:absolute;
            width:50%;
            height:100%;    
            border-radius: 50%;
            left:25%;
            top:50%;
            box-shadow: 0 0 0 2vw #00FFFF, 0 0 0 4vw #0000FF, 0 0 0 6vw lightblue, 0 0 0 8vw #00008B, 0 0 0 10vw #98AFC7, 0 0 0 12vw #566D7E ,  0 0 0 14vw #0909FF;
        } 
        
         `;
         // console.log(style);
        var head = document.getElementsByTagName('head');
        // console.log(head)
        document.head.appendChild(style);  
    }

    else if(a.value  == 'Summer')
    {
        var style = document.createElement('style');
        style.innerHTML =`.show{
            width: 60vw;  
            height:30vw;
            position:relative;
            overflow:hidden;  
            background:black;
        } 
        .show:after{
            content:'';
            position:absolute;
            width:50%;
            height:100%;    
            border-radius: 50%;
            left:25%;
            top:50%;
            box-shadow: 0 0 0 2vw red, 0 0 0 4vw orange, 0 0 0 6vw yellow;
        }  `;  
        // console.log(style);
        var head = document.getElementsByTagName('head');
        // console.log(head)
        document.head.appendChild(style);  
    }

}





// ----------------------------------------------------------------------------------------

function change1()
{
    var b = document.getElementById('myList1');
    if(b.value  == 'Morning')
    {
        var style = document.createElement('style');
        style.innerText =`
        .show
        {
            
            opacity :0.2;
        } 
    
       
        ` ;
        var head = document.getElementsByTagName('head');
        document.head.appendChild(style);   
    }
    else if(b.value  == 'Noon')
    {
        var style = document.createElement('style');
        style.innerHTML =`
        .show
        {
            opacity:0.5;
        
        } 
        
         `;
         // console.log(style);
        var head = document.getElementsByTagName('head');
        // console.log(head)
        document.head.appendChild(style);  
    }

    else if(b.value  == 'Night')
    {
        var style = document.createElement('style');
        style.innerHTML =`
        .show
        {
            opacity:1;
         
        }`;  
        // console.log(style);
        var head = document.getElementsByTagName('head');
        // console.log(head)
        document.head.appendChild(style);  
    }

}


// -------------------------------------------------------------------------------------------
function change2()
{
    var c = document.getElementById('myList2');
    if(c.value  == '12')
    {
        var style = document.createElement('style');
        style.innerText =`
        .show
        {
            -ms-transform: rotate(0deg); 
            transform: rotate(0deg);
        } 
    
       
        ` ;
        var head = document.getElementsByTagName('head');
        document.head.appendChild(style);   
    }
    else if(c.value  == '3')
    {
        var style = document.createElement('style');
        style.innerHTML =`
        .show
        {
            -ms-transform: rotate(90deg); 
            transform: rotate(90deg);
        
        } 
        
         `;
         // console.log(style);
        var head = document.getElementsByTagName('head');
        // console.log(head)
        document.head.appendChild(style);  
    }

    else if(c.value  == '6')
    {
        var style = document.createElement('style');
        style.innerHTML =`
        .show
        {
            -ms-transform: rotate(180deg); 
            transform: rotate(180deg);
         
        }`;  
        // console.log(style);
        var head = document.getElementsByTagName('head');
        // console.log(head)
        document.head.appendChild(style);  
    }
    else if(c.value  == '9')
    {
        var style = document.createElement('style');
        style.innerHTML =`
        .show
        {
            -ms-transform: rotate(270deg); 
            transform: rotate(270deg);
         
        }`;  
        // console.log(style);
        var head = document.getElementsByTagName('head');
        // console.log(head)
        document.head.appendChild(style);  
    }




}




