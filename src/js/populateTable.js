import { refs } from './refs';
import { notes } from '../data/notes';
import { createCategoryIcon } from './templates';
{
  /* <svg width='24' height='24'>
  <use href='../icons/sprite.svg#icon-thinking'></use>
</svg>; */
}

const populateTable = (content) => {
  const rows = content
    .map((elem) => {
      const dates = elem.content.includes('10/9/2023') ? '10/9/2023' : '';

      return ` <tr class="table-body-item">
    <td>${elem.created}</td>
    <td>
    <div class="flex-start">
    ${createCategoryIcon(elem.category)} <span>${elem.category}</span>
    </div>
    </td>
    <td>${elem.content}</td>
    <td>${dates}</td>
    <td >
    <div class="flex">
<button class="table-body-button">
<svg
width='30'
height='30'
viewBox='0 0 32 32'
xmlns='http://www.w3.org/2000/svg'
fill="none"
>
<path d="M15 6.00019L18 9.00019M13 20.0002H21M5 16.0002L4 20.0002L8 19.0002L19.586 7.41419C19.9609 7.03913 20.1716 6.53051 20.1716 6.00019C20.1716 5.46986 19.9609 4.96124 19.586 4.58619L19.414 4.41419C19.0389 4.03924 18.5303 3.82861 18 3.82861C17.4697 3.82861 16.9611 4.03924 16.586 4.41419L5 16.0002Z" stroke="#777777" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
   </button>

    <button class="table-body-button">
<svg
width='30'
height='30'
viewBox='0 0 32 32'
xmlns='http://www.w3.org/2000/svg'
>
<path d="M20.54 5.23L19.15 3.55C18.88 3.21 18.47 3 18 3H6C5.53 3 5.12 3.21 4.84 3.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V6.5C21 6.02 20.83 5.57 20.54 5.23ZM6.24 5H17.76L18.57 5.97H5.44L6.24 5ZM5 19V8H19V19H5ZM13.45 10H10.55V13H8L12 17L16 13H13.45V10Z" fill="#777777"/>
</svg>
    </button class="table-body-button">

    <button class="table-body-button">
<svg
width='30'
height='30'
viewBox='0 0 32 32'
xmlns='http://www.w3.org/2000/svg'
>
<path d="M7 4C7 3.46957 7.21071 2.96086 7.58579 2.58579C7.96086 2.21071 8.46957 2 9 2H15C15.5304 2 16.0391 2.21071 16.4142 2.58579C16.7893 2.96086 17 3.46957 17 4V6H21C21.2652 6 21.5196 6.10536 21.7071 6.29289C21.8946 6.48043 22 6.73478 22 7C22 7.26522 21.8946 7.51957 21.7071 7.70711C21.5196 7.89464 21.2652 8 21 8H19.931L19.064 20.142C19.0281 20.6466 18.8023 21.1188 18.4321 21.4636C18.0619 21.8083 17.5749 22 17.069 22H6.93C6.42414 22 5.93707 21.8083 5.56688 21.4636C5.1967 21.1188 4.97092 20.6466 4.935 20.142L4.07 8H3C2.73478 8 2.48043 7.89464 2.29289 7.70711C2.10536 7.51957 2 7.26522 2 7C2 6.73478 2.10536 6.48043 2.29289 6.29289C2.48043 6.10536 2.73478 6 3 6H7V4ZM9 6H15V4H9V6ZM6.074 8L6.931 20H17.07L17.927 8H6.074ZM10 10C10.2652 10 10.5196 10.1054 10.7071 10.2929C10.8946 10.4804 11 10.7348 11 11V17C11 17.2652 10.8946 17.5196 10.7071 17.7071C10.5196 17.8946 10.2652 18 10 18C9.73478 18 9.48043 17.8946 9.29289 17.7071C9.10536 17.5196 9 17.2652 9 17V11C9 10.7348 9.10536 10.4804 9.29289 10.2929C9.48043 10.1054 9.73478 10 10 10ZM14 10C14.2652 10 14.5196 10.1054 14.7071 10.2929C14.8946 10.4804 15 10.7348 15 11V17C15 17.2652 14.8946 17.5196 14.7071 17.7071C14.5196 17.8946 14.2652 18 14 18C13.7348 18 13.4804 17.8946 13.2929 17.7071C13.1054 17.5196 13 17.2652 13 17V11C13 10.7348 13.1054 10.4804 13.2929 10.2929C13.4804 10.1054 13.7348 10 14 10Z" fill="#777777"/>
</svg>
    </button>
 </div>
</td>
  </tr>`;
    })
    .join('');
  refs.tableBody.insertAdjacentHTML('beforeend', rows);
};

populateTable(notes);
