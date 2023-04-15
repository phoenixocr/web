/*
   Jersey
   ========================================================================== */

function openModal(element) {
    const imageUrl = element.style.backgroundImage.slice(5, -2);
    document.getElementById('modal-img').src = imageUrl;
    document.getElementById('modal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('modal').classList.add('hidden');
}
