import { refs } from './refs';
import { populateMainTable, populateSummaryTable } from './populateTables';
import { setDate, formatDate } from '../utils';

let isEdit = false;
let updateId;

export const createNote = (e, notes) => {
  e.preventDefault();

  const dates = formatDate(refs.startDate.value, refs.endDate.value);

  if (!refs.contentInput.value.trim()) {
    refs.errorMessage.innerText = '*Please enter text of your note';
    return;
  }

  const noteDetails = {
    created: setDate(),
    category: refs.categoryInput.value.trim(),
    content: refs.contentInput.value.trim(),
    dates,
    archived: false,
  };

  if (isEdit) {
    let noteToUpdate = notes.find((note) => note.id === updateId);
    let noteToUpdateIdx = notes.indexOf(noteToUpdate);

    const updatedNote = {
      id: noteToUpdate.id,
      ...noteDetails,
    };
    notes[noteToUpdateIdx] = updatedNote;
    isEdit = false;
  } else {
    const newNote = {
      id: Math.floor(Math.random() * 100),
      ...noteDetails,
    };
    notes.push(newNote);
  }

  refs.createForm.reset();
  refs.closeButton.click();
  populateMainTable();
  populateSummaryTable();
};

export const deleteNote = (notes, id) => {
  console.log(`index: `, index);
  const index = notes.indexOf((note) => note.id === id);
  notes.splice(index, 1);
  populateMainTable();
  populateSummaryTable();
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

export const toggleStatus = (notes, id) => {
  let noteToUpdate = notes.find((note) => note.id === id);

  noteToUpdate.archived = !noteToUpdate.archived;

  populateMainTable();
  populateSummaryTable();
};
