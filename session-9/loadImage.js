function loadImage(url) {


    return new Promise((resolve, reject) => {
        var img = new Image();

        img.onload = function () {
            resolve(url);
        }
        img.onerror = function () {
            var text = `Image can't be loaded ${url}`;
            reject(text);
        }

        img.src = url;
    })


}


