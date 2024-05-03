const closeToggleHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>`;
    
    function openLightbox(image) {
        // Create lightbox container
        let lightbox = document.createElement("div");
        lightbox.classList.add("lightbox");
        
        // Create image element
        let lightboxImage = document.createElement("img");
        lightboxImage.src = image.src;
        lightbox.appendChild(lightboxImage);
        
        // Create close button element
        let closeButton = document.createElement("button");
        closeButton.classList.add('lightbox-close');
        closeButton.innerHTML = closeToggleHTML;
        closeButton.onclick = function() {
            closeLightbox(lightbox);
        };
        lightbox.appendChild(closeButton);
        
        // Append lightbox container to the body
        document.body.appendChild(lightbox);
        
        // Show lightbox
        lightbox.style.display = "flex";
        
        setTimeout(function() {
            lightbox.classList.add("lightbox-open");
        }, 50); // Delay for smooth transition
        
        // Close lightbox when clicking outside of the image or close button
        let closeListener = function(event) {
            if (event.target === lightbox) {
                closeLightbox(lightbox);
            }
        };
        
        lightbox._closeListener = closeListener; // Store reference for removal
        lightbox.addEventListener("click", closeListener);
    }
    
    
    function closeLightbox(lightbox) {
        lightbox.removeEventListener("click", lightbox._closeListener);
        lightbox.classList.remove("lightbox-open");
        setTimeout(function() {
            document.body.removeChild(lightbox);
        }, 300); // Delay for the duration of the transition
    }