import { refs } from './refs';

refs.createButton.addEventListener('click', () => {
  refs.modal.classList.remove('hidden');
});

refs.closeButton.addEventListener('click', () => {
  refs.modal.classList.add('hidden');
});
