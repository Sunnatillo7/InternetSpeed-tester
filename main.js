const selectorItem = (param) => {
    return document.querySelector(param)
}



document.querySelector('button').addEventListener('click', function (evt) {
    let imgLink = 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Tokyo_Sky_Tree_2012.JPG'
    let downloadSize = 8185374
    let downloadSrc = new Image()

    selectorItem('.loader-content').classList.add('hide')
    selectorItem('.loader').classList.remove('hide')

    let timeStart = new Date().getTime()

    let cacheImg = '?nn=' + timeStart;
    downloadSrc.src = imgLink + cacheImg;
    downloadSrc.onload = function () {

        let timeEnd = new Date().getTime()
        let timeDuration = (timeEnd - timeStart) / 1000;
        let loadedBytes = downloadSize * 8;
        let totalSpeed = ((loadedBytes / timeDuration) / 1024 / 1024).toFixed(0)

        selectorItem('.content').innerHTML = totalSpeed + '<small>Mbps</small>'
        selectorItem('.loader-content').classList.remove('hide')
        selectorItem('.loader-content').classList.add('result')
        selectorItem('.loader').classList.add('hide')
        selectorItem('.content').classList.remove('hide')

        evt.target.innerText = 'CHECK AGAIN'
    }

})