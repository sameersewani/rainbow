

// textarea.addEventListener('keyup',function ()
// {
//     same.innerText=textarea.value;

// })



const vowelChars = ["a", "e", "i", "o", "u"];

function submit()
{
    let same=document.getElementById('same');
    let textarea=document.getElementById('textarea').value.split(' ');
    let textfield = document.getElementById("field").value.split(',');
    same.innerHTML = "";

    for(let i = 0; i < textarea.length; i++)
    {
        for(let j = 0; j < textfield.length; j++)
        {
            if(textarea[i].indexOf(textfield[j]) == 0 && textarea[i].lastIndexOf(textfield[j]) == textarea[i].length - 1) 
            {
                same.innerHTML += `<b><i><u> ${textarea[i]} <u/> <i/> <b/>`
            }

            else if(textarea[i].indexOf(textfield[j]) == 0)
            {
                same.innerHTML += `<b> ${textarea[i]} <b/>`
            }

            else if(textarea[i].lastIndexOf(textfield[j]) == textarea[i].length - 1)
            {
                same.innerHTML += `<i> ${textarea[i]} <i/>`
            }
        }
    }


}

