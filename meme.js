const addMeme = document.getElementById('new');
const create = document.querySelector("#memeform");
let i = document.querySelector("input[name='image']");
let t = document.querySelector("input[name='toptext']");
let b = document.querySelector("input[name='bottext']");


function newMeme (img, top, bot){
    const bg = document.createElement("div");
    const pic = document.createElement("img")
    const topDiv = document.createElement("p");
    const botDiv = document.createElement("p");
    const rmButton = document.createElement("button")
    rmButton.innerText="X"
    rmButton.addEventListener("click", function(e){
        e.target.parentElement.remove();
    });
    pic.setAttribute("src", img);
    topDiv.innerText = top;
    botDiv.innerText = bot;
    topDiv.classList.add("top");
    botDiv.classList.add("bot");
    bg.style.position = "relative"
    pic.style.position = "relative"
    topDiv.style.position = "absolute"
    botDiv.style.position = "absolute"
    bg.append(pic)
    bg.append(rmButton);
    bg.append(topDiv)
    bg.append(botDiv);
    return bg;
}

create.addEventListener("submit", function (e){
    e.preventDefault();
    const meme = newMeme(i.value, t.value, b.value)
    addMeme.append(meme);
    i.value="";
    t.value="";
    b.value="";
})
