const modal = document.querySelector('.modal-wrapper');
const nameTariff = document.querySelector('.modal-title-tariff');

document.addEventListener('click', openModal);
modal.addEventListener('click', closeModal);

function openModal(e) {
    e.preventDefault();

    if(!e.target.classList.contains( 'js-open-menu' )) return;

    nameTariff.insertAdjacentHTML('afterbegin', e.target.dataset.name);
    modal.classList.add('active');
}

function closeModal(e) {
    e.preventDefault();

    if(e.target.nodeName !== 'SPAN' && e.target.dataset.close !== 'close-modal') return;

    nameTariff.innerHTML = '';
    modal.classList.remove('active');
}
