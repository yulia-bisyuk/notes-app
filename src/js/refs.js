export const refs = {
  tableBody: document.getElementById('table-body'),
  summaryTableBody: document.getElementById('summary-table-body'),

  rowTemplate: document.getElementById('table-item'),
  summaryRowTemplate: document.getElementById('summary-table-item'),

  modal: document.getElementById('modal'),
  modalTitle: document.querySelector('.modal-title'),
  modalSubmitButton: document.getElementById('submit-button'),

  createButton: document.getElementById('create'),
  closeButton: document.getElementById('close'),

  createForm: document.getElementById('create-form'),
  categoryInput: document.getElementById('category'),
  contentInput: document.getElementById('note-content'),
  startDate: document.getElementById('start'),
  endDate: document.getElementById('end'),
  errorMessage: document.querySelector('.error-message'),
};
