import { refs } from './refs';
import { notes } from '../data/notes';
import { createCategoryIcon } from '../utils';
import { createNote, deleteNote, editNote, setArchived } from './actions';

const getActive = (notes) => (notes = notes.filter((note) => !note.archived));
const getSummary = (notes) => {
  const result = notes.reduce((acc, note) => {
    const foundCategory = acc.find((item) => item.category === note.category);

    if (!foundCategory) {
      acc.push({
        category: note.category,
        active: 0,
        archived: 0,
      });
    }
    const index = acc.findIndex((item) => item.category === note.category);
    note.archived ? (acc[index].archived += 1) : (acc[index].active += 1);
    return acc;
  }, []);

  return result;
};

export const populateMainTable = () => {
  const activeNotes = getActive(notes);
  // remove old notes before render new
  document.querySelectorAll('.table-body-item').forEach((tr) => tr.remove());

  return activeNotes.map((note) => {
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
    template.querySelector('.dates').textContent = note.dates;

    const deleteBtn = template.querySelector('.delete-button');
    deleteBtn.addEventListener('click', () => deleteNote(notes, note.id));

    const editBtn = template.querySelector('.edit-button');
    editBtn.addEventListener('click', () => editNote(note));

    const archiveBtn = template.querySelector('.archive-button');
    archiveBtn.addEventListener('click', () => setArchived(notes, note.id));

    refs.tableBody.appendChild(template);
  });
};

export const populateSummaryTable = () => {
  const statistics = getSummary(notes);

  return statistics.map((item) => {
    let summaryTemplate = refs.summaryRowTemplate.content.cloneNode(true);

    summaryTemplate
      .querySelector('.category-icon')
      .insertAdjacentHTML(
        'afterbegin',
        createCategoryIcon(item.category) || ''
      );
    summaryTemplate.querySelector('.category-name').textContent =
      item.category || '';

    summaryTemplate.querySelector('.active').textContent = item.active;
    summaryTemplate.querySelector('.archived').textContent = item.archived;

    refs.summaryTableBody.appendChild(summaryTemplate);
  });
};

refs.createForm.addEventListener('submit', (e) => createNote(e, notes));

populateMainTable();
populateSummaryTable();
