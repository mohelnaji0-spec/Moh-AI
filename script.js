const button = document.getElementById("send");
const input = document.getElementById("message");
const chat = document.getElementById("chat");


button.onclick = sendMessage;


async function sendMessage(){


const text = input.value.trim();


if(!text) return;



chat.innerHTML += `

<div class="message user">
${text}
</div>

`;



input.value="";



chat.innerHTML += `

<div class="message ai" id="loading">
جاري التفكير...
</div>

`;



try{


const response = await fetch("/api/chat",{


method:"POST",

headers:{

"Content-Type":"application/json"

},


body:JSON.stringify({

message:text

})


});



const data = await response.json();



document.getElementById("loading").remove();



chat.innerHTML += `

<div class="message ai">

${data.reply}

</div>

`;



}

catch(error){


document.getElementById("loading").innerText =
"خطأ في الاتصال";


}



}
