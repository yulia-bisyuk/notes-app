import { refs } from './refs';
import { notes } from '../data/notes';
import { setDate } from '../utils';

refs.createForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const newNote = {
    id: Math.floor(Math.random() * 100),
    created: setDate(),
    category: refs.categoryInput.value,
    content: refs.contentInput.value,
  };

  const updatedNotes = [...notes, newNote];
  //   notes = updatedNotes;
  console.log(`updatedNotes: `, updatedNotes);
  //   return notes;
  return updatedNotes;

  //   console.log(`  refs.contentInput.value: `, refs.contentInput.value);
}
