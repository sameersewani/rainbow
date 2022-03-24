
// let a=document
// // a=document.all
// a=document.images
// console.log(a)
  //  let element=document.getElementById('myfirst')
   

  //element=element.className
  //element=element.childNodes
//console.log(element)
//  console.log(element)
//element=element.parentNode
//console.log(element)
//element=element.style.color="red"
//console.log(element)
 //element=element.innerHTML="<b> child1</b>"
  //console.log(element)

// element=element.innerText="sameer"

//  let sel=document.querySelector('h1')
//  sel.style.color="green"
//  console.log(sel )

// let ele=document.getElementsByClassName('child')
//  console.log(ele)


// let ele=document.getElementsByTagName('div')
// console.log(ele)
// Array.from(ele).forEach(element => {
    //  console.log(element)
//     element.style.color="blue"
// });



//    console.log("welcome")
//   let a= document.querySelector('.child')
//   a=document.querySelector('.container')
// console.log(a.childNodes[7].nodeName) 

  // function input()
  // {
  //     let var1=document.getElementById('sa').value;
  //   console.log(var1);
  // }


//  let a= document.querySelector('.container');
// //  console.log(a.children[1].children);
// // console.log(a.firstElementChild)
// console.log(a.children)
// console.log(a.childElementCount)
// console.log(a.firstElementChild.nextSibling)
// console.log(a.firstElementChild.nextElementSibling)
// console.log(a.firstElementChild.parentElement)

// ----------------------------------------
// create element
//  let ele= document.createElement("li")
//  ele.className="childul"
//  ele.id="createdli"
//   ele.setAttribute("title","mytitle")
//   ele.innerHTML=" <b> hello </b>"

//   let ul=document.querySelector("ul")
//  ul.appendChild(ele)
//   console.log(ul) 
//  console.log(ele)


//replace
// let ele1= document.createElement("h3")
// ele1.id="ele1"
// ele1.className="ele1"
// let tnode=document.createTextNode("this is a created node")
// ele1.appendChild(tnode)


// ele.replaceWith(ele1)
// let myul=document.getElementById("myul")
// myul.replaceChild(ele1,document.getElementById("fui"))
// myul.removeChild(document.getElementById("lui"))

// let pr=ele1.getAttribute("class")
// let pr1=ele1.hasAttribute("class")
// console.log(pr)
// console.log(pr1)

// ele1.removeAttribute("id")
//  ele1.setAttribute("title","mytitle")



    // variable=e.target.classList
    // variable=Array.from(e.target.classList)
    // variable=e.target.id;
    // variable=e.offsetX
    // variable=e.clientX
    


    //console.log(variable)
    // location.href='//codewithharry.com'

//  })
//  console.log(a)

// let btn=document.getElementById('btn')
// btn.addEventListener('click',fun1)
// btn.addEventListener('dblclick',fun2)
// btn.addEventListener('mousedown',fun3)

// {
//     console.log("thanks")
//     e.preventDefault()
// }


// function fun1(e)
// {
//     console.log("thanks")
//     e.preventDefault()
// }
// function fun3(e)
// {
//     console.log("t")
//     e.preventDefault()
// }


document.querySelector('.child').addEventListener('mouseenter',function()
{
    console.log("you entered no")
})

document.querySelector('.child').addEventListener('mouseleave',function()
{
    console.log("you entered yes")
})

document.querySelector('.container').addEventListener('mousemove',function()
{
    console.log("you entered yes")
})





// ------------------------------------TUtt39-----------------------------------
// function fun1()
// {
//   return new Promise(function(resolve,reject)
//   {
//     setTimeout(() => 
//     {
//       const error=true
//       if(!error)
//       {
//         console.log("function : your promise has been resolved")
//         resolve()
//       }

//       else
//       {
//         console.log("function : your promise has not  been resolved")
//         reject("sorry not fulfilled")
//       }

//     },2000)

//   })
// }

// fun1().then(function()
// {
//   console.log("Harry : thanks for resolving")
// }).catch(function (error) 
// {
//  console.log("Harry : very bad bro Resaon: " + error) 
// })



// // ---------------------------ARROW Function---------
//  console.log("this is tut 39")

 // creating a regular function

  // function harry()
  // {
  //   console.log("this is the best  person ever")
  // }
  // converting it to an arrow function
  // const harry=() =>
  // {
  //   console.log("this is the best  person ever")
  //harry()
  // }




// one liners do no require braces/return
  // const greet = () => "Good Morning"

  
  // function returning something
  // const greet = function()
  // {
  //  return "Good Morning"

  // }
  // const greet = () => ({name : "harry"})

  // single parameter do no need parenthesis
//   but you will have to put paren on multiple arguments

// const greet = namee => "good morning" + name
  // const greet = (name,ending) => "good morning" + name+ending
 

  // console.log(greet(" Harry"," bye"))



  // -----------------------TUT 42------------------

  // console.log("This is my  tut 42")
// button with id mybtn
// let mybtn=document.getElementById("mybtn")

// div with id content
// let content = document.getElementById("content")
// function getdata()
// {
//   console.log("Started get data")
//    url="1.txt"
//    fetch(url).then((response)=> // Fetch is asynchronic
//    {
//     console.log("Inside 1 then")
//      return response.text()
//    }).then((data)=>
//    {
//     console.log("Inside 2 then")
//      console.log("sameer")

//    })

// }



// function getdata()
// {
//   console.log("Started get data")
//    url="https://api.github.com/users"
//    fetch(url).then((response)=> // Fetch is asynchronic
//    {
//     console.log("Inside 1 then")
//      return response.json()
//    }).then((data)=>
//    {
//     console.log("Inside 2 then")
//      console.log(data)

//    })

// }



// function postdata()
// {
//    url="http://dummy.restapiexample.com/api/v1/create"
//    data='{"message":"Good Mor, contact sameer@gmail.com"}'
//    params= 
//    {
//       method: "post",
//       Headers:
//       {
//         'content-type': 'application/json'
//       },
//      body : JSON.stringify(data) // convert data to string
//      body : data
//    }
//    fetch(url,params).then((response)=> // Fetch is asynchronic
//    {
//     return response.json()
//    }).then((data)=>
//    {
//      console.log(data)

//    })
// }
// postdata()


// --------------------------Tut 43-----------------

console.log("this is tutorial 43")


async function harry()  // async returns promise
{
  const response= await fetch('https://api.github.com/users')

  // console.log("before response")

  const users= await response.json()

  // console.log("users resolved")
  
  return users

   //return "hey"

}

// console.log("before calling harry")
let a= harry()
// console.log("after calling harry")
console.log(a)
a.then(data => console.log(data))
// console.log("last line")























