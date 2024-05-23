window.onload = function() {
    var prevImage = document.getElementById('prevImage');
    var nextImage = document.getElementById('nextImage');
    var gallery = document.getElementById('gallery');
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById('img01');
    var span = document.getElementsByClassName('close')[0];
    var prevPage = document.getElementById('prevPage');
    var nextPage = document.getElementById('nextPage');
    var homePage = document.getElementById('homePage');
    var currentImageIndex = 0;

    var currentPage = 1;
    var imagesPerPage = 20; // 5x4 grid

    function showImage(index) {
    }

    function loadImages() {
        gallery.innerHTML = ''; // Clear the gallery

        var start = (currentPage - 1) * imagesPerPage;
        var end = start + imagesPerPage;

        for (var i = start; i < end; i++) {
            var img = document.createElement('img');
            img.src = 'CatsDogs/CatsDogs_000' + ('0' + (i+1)).slice(-2) + '.jpg';
            img.alt = 'Image ' + (i+1);
            img.onclick = function() {
                modal.style.display = 'block';
                modalImg.src = this.src
                currentImageIndex = i; // Set the current image index
            };
            gallery.appendChild(img);
        }
    }



    // Load the first page of images
    loadImages();

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
        modal.style.display = 'none';
    };

    // When the user clicks on the Previous button, go to the previous page
    prevPage.onclick = function() {
        if (currentPage > 1) {
            currentPage--;
            loadImages();
        }
    };

    // When the user clicks on the Next button, go to the next page
    nextPage.onclick = function() {
        if ((currentPage - 1) * imagesPerPage < 64)
        currentPage++;
        loadImages();
    };

    // When the user clicks on the Home button, go to the first page
    homePage.onclick = function() {
        currentPage = 1;
        loadImages();
    };
    // When the user clicks on the Previous Image button, show the previous image
    prevImage.onclick = function() {
        if (currentImageIndex > 0) {
            currentImageIndex--;
            modalImg.src = 'CatsDogs/CatsDogs_000' + ('0' + (currentImageIndex+1)).slice(-2) + '.jpg';
        }
    };

    // When the user clicks on the Next Image button, show the next image
    nextImage.onclick = function() {
        if (currentImageIndex < 63 - 1) { // Change 63 to the total number of images
            currentImageIndex++;
            modalImg.src = 'CatsDogs/CatsDogs_000' + ('0' + (currentImageIndex+1)).slice(-2) + '.jpg';
        }
    };
};
