fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=2nbQg0XiqItY0fh9aHPbEOAt2yyMPjyhqujIyJDD")
    .then(res => res.json())
    .then(data => {
        console.log(data.photos)
        document.querySelector('img').src = data.photos[95].img_src
        document.querySelector('.n2').src = data.photos[48].img_src
        document.querySelector('.n3').src = data.photos[99].img_src

    })
    .catch(err => {
        console.log(`error ${err}`)
    });