import { refs } from './refs';

refs.createButton.addEventListener('click', () => {
  refs.modal.classList.remove('hidden');
  refs.modalTitle.innerText = 'Create New Note';
  refs.modalSubmitButton.innerText = 'Create';
  refs.errorMessage.innerText = '';
});

refs.closeButton.addEventListener('click', () => {
  refs.modal.classList.add('hidden');
});
