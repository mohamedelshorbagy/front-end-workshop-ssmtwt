function createImageElement(url) {
    // Create Image Element (DOM Node)
    var img = document.createElement('img');
    img.src = url;
    img.width = 150;
    img.height = 150;
    // Append to Body
    document.body.appendChild(img);
}