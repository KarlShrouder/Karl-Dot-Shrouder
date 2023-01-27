const input = document.getElementById('input');
const grid = document.getElementsByClassName('grid')[0];

input.addEventListener('keydown', function(e){
    if (e.key === 'Enter') {
        loadImg();
    }
});

apiRequest = () => {
    const apiKey = 'EnZmMvMI7NcVg9EuDbPWesF-wyTp5X5C2iA36S5nljY';
    const url = 'https://api.unsplash.com/search/photos?query=' + 
    input.value + '&per_page=9&client_id=' + apiKey;

    fetch(url)

    .then(response =>{
        console.log(response);
        if (response.ok) {
            return response.json();
        } else {
            alert(response.status);
        }
    })

    .then(data => {
        const imageNodes = [];
        for (let i = 0; i < data.results.length; i++) {
            imageNodes[i] = document.createElement('div');
            imageNodes[i].className = 'img';
            imageNodes[i].style.backgroundImage = 'url('+ data.results[i].urls.raw +')';
            imageNodes[i].addEventListener('dblclick', function(){
                window.open(data.results[i].links.download, '_blank');
            })
            grid.appendChild(imageNodes[i]);
        }
    });
}

loadImg = () => {
    removeImages();
    apiRequest();
}

removeImages = () => {
    grid.innerHTML = '';
}

dayNightMode = () => {
    let date = new Date();
    let hour = date.getHours();

    if (hour >= 7 && hour <= 19) {
        document.body.style.backgroundColor = 'whitesmoke';
        document.body.style.color = 'black';
    } else {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'whitesmoke';
    }
}

window.addEventListener('load', dayNightMode());