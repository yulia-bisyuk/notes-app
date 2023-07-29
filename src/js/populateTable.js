import { refs } from './refs';
import { notes } from '../data/notes';
import { createCategoryIcon } from '../utils';
import { createNote, deleteNote, editNote } from './actions';

export const populateTable = () => {
  // remove old notes before render new
  document.querySelectorAll('.table-body-item').forEach((tr) => tr.remove());
  return notes.map((note, index) => {
    const dates = note.content.includes('10/9/2023') ? '10/9/2023' : '';
    let template = refs.rowTemplate.content.cloneNode(true);

    template.querySelector('.created').textContent = note.created;
    template
      .querySelector('.category-icon')
      .insertAdjacentHTML(
        'afterbegin',
        createCategoryIcon(note.category) || ''
      );
    template.querySelector('.category-name').textContent = note.category || '';
    template.querySelector('.content').textContent = note.content;
    template.querySelector('.dates').textContent = dates;

    const deleteBtn = template.querySelector('.delete-button');
    deleteBtn.addEventListener('click', () => deleteNote(notes, index));

    const editBtn = template.querySelector('.edit-button');
    editBtn.addEventListener('click', () => editNote(note));

    refs.tableBody.appendChild(template);
  });
};

refs.createForm.addEventListener('submit', (e) => createNote(e, notes));

populateTable();
