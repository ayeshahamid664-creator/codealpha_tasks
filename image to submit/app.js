var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");
var currentIndex = 0;
var allImages = [];

// Store all image sources
document.querySelectorAll('.img-gallery img').forEach(function(img) {
    allImages.push(img.src);
});

function openFullImg(pic){
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
    currentIndex = allImages.indexOf(pic);
}

function closeFullImg(){
    fullImgBox.style.display = "none";
}

// Add these functions - they were missing!
function nextImg() {
    currentIndex = (currentIndex + 1) % allImages.length;
    fullImg.src = allImages[currentIndex];
}

function prevImg() {
    currentIndex = (currentIndex - 1 + allImages.length) % allImages.length;
    fullImg.src = allImages[currentIndex];
}

// Keyboard navigation support
document.addEventListener('keydown', function(event) {
    if (fullImgBox.style.display === "flex") {
        if (event.key === 'ArrowRight') {
            nextImg();
        } else if (event.key === 'ArrowLeft') {
            prevImg();
        } else if (event.key === 'Escape') {
            closeFullImg();
        }
    }
});