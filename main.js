let form = document.querySelector('.SearchForm');
let favret = document.querySelector('.Fav');

let favList = [
    {
        name: 'chat-GPT',
        url: 'https://chat.openai.com',
        img: './image/chatgpt-seeklogo.svg'
    }, {
        name: 'perplexity',
        url: 'https://www.perplexity.ai/',
        img: './image/perplexity-ai-seeklogo.svg'
    }, {
        name: 'youtube',
        url: 'https://m.youtube.com/',
        img: './image/youtube.png'
    }, {
        name: 'color hunt',
        url: 'https://colorhunt.co/',
        img: './image/colorHunt.png'
    }, {
        name: 'manga reader',
        url: 'https://mangareader.to/search?keyword=One+piece',
        img: './image/manga.jpg'
    }, {
        name: 'gmail',
        url: 'https://mail.google.com',
        img: './image/gmail-new-icon5198.jpg'
    }
]


function removeHttps(url) {
  return url.replace(/(?:https?:\/\/)?(?:www\.)?/g, '');
}


loadFav()
function loadFav() {
    let html = "";
    favList.forEach((item) => {
        html += `
            <div class="card" data-url="${item.url}">
                <div class='ImageContainer'>   
                    <img class="logo" src="${item.img}" >
                </div>
                <div class='right'>
                    <div class="name">${item.name}</div>
                    <div class="url">${removeHttps(item.url)}</div>
                </div>

            </div>`;
    });
    favret.innerHTML = html;
}

let cards = document.querySelectorAll('.card');
cards.forEach((card)=> {
    card.addEventListener('click', ()=> {
        let url = card.dataset.url;
        console.log(url)
        window.open(url);
    });
});

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    let value = e.target[0].value;
    let url = `https://www.google.com/search?q=${value}`;
    window.open(url,'_self');
    
    
})