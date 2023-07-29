import { refs } from './refs';
import { populateTable } from './populateTable';
import { setDate } from '../utils';

let isEdit = false;
let updateId;

export const createNote = (e, notes) => {
  e.preventDefault();

  if (!refs.contentInput.value.trim()) {
    refs.errorMessage.innerText = '*Please enter text of your note';

    return;
  }

  const noteDetails = {
    created: setDate(),
    category: refs.categoryInput.value.trim(),
    content: refs.contentInput.value.trim(),
  };

  if (isEdit) {
    let noteToUpdate = notes.find((note) => note.id === updateId);
    let noteToUpdateIdx = notes.indexOf(noteToUpdate);

    const updatedNote = {
      id: noteToUpdate.id,
      ...noteDetails,
    };
    notes[noteToUpdateIdx] = updatedNote;
  } else {
    const newNote = {
      id: Math.floor(Math.random() * 100),
      ...noteDetails,
    };
    notes.push(newNote);
  }

  refs.createForm.reset();
  refs.closeButton.click();
  populateTable();
};

export const deleteNote = (notes, index) => {
  notes.splice(index, 1);
  populateTable();
};

export const editNote = (note) => {
  isEdit = true;
  updateId = note.id;
  refs.createButton.click();
  refs.modalTitle.innerText = 'Edit Your Note';
  refs.modalSubmitButton.innerText = 'Edit';

  refs.categoryInput.value = note.category;
  refs.contentInput.value = note.content;
};
