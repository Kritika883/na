// Gallery Data
const images = [
    { src: 'OIP (1).jpeg', hdSrc: 'OIP (1).jpeg', caption: 'Beautiful View 1' },
    { src: 'OIP (2).jpeg', hdSrc: 'OIP (2).jpeg', caption: 'A girl in a black dress looks too hot in the picture and the shadow of her body on the wall makes this pic more better. 2' },
    { src: 'OIP (3).jpeg', hdSrc: 'OIP (3).jpeg', caption: 'Aww, love seeing you two standing strong together! Such a cute couple vibe in this snap! ' },
    { src: 'OIP (4).jpeg', hdSrc: 'OIP (4).jpeg', caption: 'What a fun twist! Its like a picture within a picture. Very creative' },
    { src: 'OIP (5).jpeg', hdSrc: 'OIP (5).jpeg', caption: 'Those white lines in the air look like a magical dance of light!' },
    { src: 'OIP (6).jpeg', hdSrc: 'OIP (6).jpeg', caption: 'Thats a picturesque scene! Capturing moments in nature with a camera and tripod, how peaceful and creative!' },
    { src: 'OIP (7).jpeg', hdSrc: 'OIP (7).jpeg', caption: 'What a beautiful moment in the sunlit field! Enjoying natures embrace, it looks so peaceful and serene!' },
    { src: 'OIP (8).jpeg', hdSrc: 'OIP(8).jpeg', caption: 'What a peaceful scene by the blue stream and wooden fence! Natures beauty always brings a sense of calm and tranquillity'},

    // Add more images (8 total)
];

// DOM Elements
const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const caption = document.getElementById('caption');

// Dynamically Load Images
images.forEach((img, index) => {
    const imageElement = document.createElement('img');
    imageElement.src = img.src;
    imageElement.alt = img.caption;
    imageElement.dataset.index = index; // Store index for reference
    gallery.appendChild(imageElement);
});

// Event Delegation for Gallery
gallery.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
        const index = event.target.dataset.index;
        const { hdSrc, caption: imgCaption } = images[index];

        modalImage.src = hdSrc;
        caption.textContent = imgCaption;

        modal.classList.remove('hidden');
    }
});

// Hide Modal on Click
modal.addEventListener('click', () => {
    modal.classList.add('hidden');
    modalImage.src = '';
    caption.textContent = '';
});