let e;const t={tableBody:document.getElementById("table-body"),summaryTableBody:document.getElementById("summary-table-body"),rowTemplate:document.getElementById("table-item"),summaryRowTemplate:document.getElementById("summary-table-item"),modal:document.getElementById("modal"),modalTitle:document.querySelector(".modal-title"),modalSubmitButton:document.getElementById("submit-button"),createButton:document.getElementById("create"),closeButton:document.getElementById("close"),createForm:document.getElementById("create-form"),categoryInput:document.getElementById("category"),contentInput:document.getElementById("note-content"),startDate:document.getElementById("start"),endDate:document.getElementById("end"),errorMessage:document.querySelector(".error-message")},c=[{id:1,created:"Jul 08, 2023",category:"Task",content:"Learn Node.js till 10/09/2023",dates:"10/09/2023",archived:!0},{id:2,created:"Jul 20, 2023",category:"Random Thought",content:"Learn as if you will live forever, live like you will die tomorrow.",dates:"",archived:!1},{id:3,created:"Jul 21, 2023",category:"Idea",content:"Make a cake for my best friend birthday party",dates:"",archived:!1},{id:4,created:"Jul 21, 2023",category:"Task",content:"Get signature of Lady Gaga on her concerts 30/08/2023 and 01/09/2023",dates:"30/08/2023, 01/09/2023",archived:!0},{id:5,created:"Jul 23, 2023",category:"Idea",content:"Write web application using React.js + Node.js",dates:"",archived:!1},{id:6,created:"Jul 24, 2023",category:"Random Thought",content:"When you change your thoughts, remember to also change your world.",dates:"",archived:!1},{id:7,created:"Jul 26, 2023",category:"Task",content:"To buy a book about JavaScript ",dates:"",archived:!1}],o=()=>{let e=new Date,t=e.toDateString().slice(4,10)+","+e.toDateString().slice(10,15);return t},r=(e,t)=>{if(!e&&!t)return;let c=e=>{let t=e.split("-");return t[2]+"/"+t[1]+"/"+t[0]};return e?t?`${c(e)}, ${c(t)}`:c(e):c(t)},a=e=>"Task"===e?`<svg
        class='category-icon'
        width='30'
        height='30'
        viewBox='0 0 32 32'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
      >
        <path
          fill='none'
          stroke='#777'
          style='stroke: var(--color1, #777)'
          stroke-linejoin='round'
          stroke-linecap='round'
          stroke-miterlimit='4'
          stroke-width='2'
          d='M12 8h14.667M5.067 7.733l1.067 1.067 2.667-2.667M5.067 15.733l1.067 1.067 2.667-2.667M5.067 23.733l1.067 1.067 2.667-2.667M12 16h14.667M12 24h14.667'
        ></path>
      </svg>`:"Random Thought"===e?`<svg
        class='category-icon'
        width='35'
        height='35'
        viewBox='0 0 32 32'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fill='#777'
          style='fill: var(--color1, #777)'
          d='M5.333 24c0.707 0 1.386 0.281 1.886 0.781s0.781 1.178 0.781 1.886c0 0.707-0.281 1.385-0.781 1.886s-1.178 0.781-1.886 0.781c-0.707 0-1.386-0.281-1.886-0.781s-0.781-1.178-0.781-1.886c0-0.707 0.281-1.385 0.781-1.886s1.178-0.781 1.886-0.781zM5.333 26c-0.177 0-0.346 0.070-0.471 0.195s-0.195 0.295-0.195 0.471 0.070 0.346 0.195 0.471c0.125 0.125 0.295 0.195 0.471 0.195s0.346-0.070 0.471-0.195c0.125-0.125 0.195-0.295 0.195-0.471s-0.070-0.346-0.195-0.471c-0.125-0.125-0.295-0.195-0.471-0.195zM12.667 20c0.884 0 1.732 0.351 2.357 0.976s0.976 1.473 0.976 2.357-0.351 1.732-0.976 2.357c-0.625 0.625-1.473 0.976-2.357 0.976s-1.732-0.351-2.357-0.976c-0.625-0.625-0.976-1.473-0.976-2.357s0.351-1.732 0.976-2.357c0.625-0.625 1.473-0.976 2.357-0.976zM12.667 22c-0.354 0-0.693 0.141-0.943 0.391s-0.391 0.589-0.391 0.943c0 0.354 0.14 0.693 0.391 0.943s0.589 0.391 0.943 0.391c0.354 0 0.693-0.141 0.943-0.391s0.391-0.589 0.391-0.943c0-0.354-0.141-0.693-0.391-0.943s-0.589-0.391-0.943-0.391zM15.764 2.667c1.696 0 3.338 0.598 4.637 1.688s2.174 2.602 2.469 4.272h0.109c1.331 0 2.608 0.529 3.55 1.47s1.47 2.218 1.47 3.55c0 1.331-0.529 2.608-1.47 3.55s-2.218 1.47-3.55 1.47h-14.431c-1.331 0-2.608-0.529-3.55-1.47s-1.47-2.218-1.47-3.55c0-1.331 0.529-2.608 1.47-3.55s2.218-1.47 3.55-1.47h0.108c0.296-1.67 1.17-3.183 2.469-4.272s2.941-1.687 4.637-1.688zM15.772 4.664c-1.343-0-2.635 0.515-3.608 1.44s-1.554 2.189-1.622 3.53c-0.012 0.237-0.114 0.46-0.286 0.624s-0.4 0.255-0.637 0.255h-0.933c-0.414-0.015-0.826 0.054-1.212 0.202s-0.739 0.372-1.037 0.66c-0.298 0.287-0.535 0.632-0.697 1.013s-0.245 0.79-0.245 1.204c0 0.414 0.083 0.823 0.245 1.204s0.399 0.725 0.697 1.013 0.651 0.512 1.037 0.66c0.386 0.148 0.799 0.217 1.212 0.202h14.173c0.414 0.015 0.826-0.054 1.212-0.202s0.739-0.372 1.037-0.66c0.298-0.287 0.535-0.632 0.696-1.013s0.245-0.79 0.245-1.204c0-0.414-0.083-0.823-0.245-1.204s-0.399-0.725-0.696-1.013c-0.298-0.287-0.651-0.512-1.037-0.66s-0.799-0.217-1.212-0.202h-0.933c-0.237-0-0.465-0.091-0.637-0.255s-0.274-0.387-0.286-0.624c-0.068-1.341-0.649-2.605-1.622-3.53s-2.265-1.441-3.608-1.44z'
        ></path>
      </svg>`:"Idea"===e?`<svg
        class='category-icon'
        width='30'
        height='30'
        viewBox='0 0 32 32'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
      >
        <path
          fill='#777'
          style='fill: var(--color1, #777); stroke: var(--color1, #777)'
          stroke='#777'
          stroke-linejoin='miter'
          stroke-linecap='butt'
          stroke-miterlimit='4'
          stroke-width='0.8'
          d='M15.9 4.009c4.754-0.221 8.693 3.58 8.693 8.287 0 2.364-0.994 4.501-2.584 6.011-0.629 0.597-0.964 1.463-0.964 2.357v1.016c0 2.168-1.769 3.935-3.937 3.935h-2.947c-0.276 0-0.488 0.213-0.486 0.489 0.001 0.274 0.212 0.484 0.486 0.484h4.35c0.815 0 1.487 0.672 1.487 1.487v0.050c0 0.815-0.672 1.487-1.487 1.487h-4.266c-0.066 0.001-0.132-0.011-0.194-0.036s-0.117-0.061-0.165-0.108-0.085-0.102-0.11-0.163c-0.026-0.061-0.039-0.127-0.039-0.193s0.013-0.132 0.039-0.193c0.026-0.061 0.063-0.117 0.11-0.163s0.103-0.083 0.165-0.108c0.062-0.025 0.127-0.037 0.194-0.036h4.266c0.275 0 0.487-0.213 0.487-0.487v-0.050c0-0.275-0.213-0.487-0.487-0.487h-4.35c-0.813 0-1.483-0.667-1.486-1.481-0.004-0.818 0.669-1.493 1.486-1.493h2.947c1.627 0 2.937-1.308 2.937-2.935v-1.016c0-1.144 0.427-2.277 1.275-3.083 1.4-1.329 2.272-3.201 2.272-5.285 0-4.152-3.448-7.484-7.646-7.288-3.477 0.162-6.751 3.415-6.936 6.891-0.115 2.177 0.721 4.147 2.13 5.554 0.844 0.843 1.403 1.982 1.407 3.211 0.005 1.17 0.835 1.95 1.5 1.95h1.702v-5.826c-0.551-0.077-1.091-0.243-1.531-0.596-0.575-0.46-0.969-1.189-0.969-2.078 0-1.208 0.858-2 1.75-2s1.75 0.792 1.75 2v1.589c0.323-0.072 0.672-0.105 0.906-0.292 0.363-0.29 0.594-0.686 0.594-1.297-0.001-0.066 0.011-0.132 0.036-0.194s0.061-0.117 0.108-0.165c0.047-0.047 0.102-0.085 0.163-0.11s0.127-0.039 0.193-0.039c0.066 0 0.132 0.013 0.193 0.039s0.117 0.063 0.163 0.11c0.047 0.047 0.083 0.103 0.108 0.165s0.037 0.127 0.036 0.194c0 0.889-0.394 1.618-0.969 2.078-0.441 0.352-0.98 0.518-1.531 0.596v6.326c0 0.133-0.053 0.26-0.146 0.353s-0.221 0.147-0.354 0.147h-2.202c-1.355 0-2.493-1.311-2.5-2.946-0.003-0.926-0.433-1.827-1.114-2.507-1.6-1.597-2.553-3.849-2.422-6.314 0.215-4.052 3.835-7.648 7.888-7.837zM15.75 14.114c0-0.792-0.392-1-0.75-1s-0.75 0.208-0.75 1c0 0.611 0.231 1.007 0.594 1.297 0.234 0.187 0.583 0.22 0.906 0.292v-1.589z'
        ></path>
      </svg>`:void 0,n=e=>e=e.filter(e=>!e.archived),l=e=>{let t=e.reduce((e,t)=>{let c=e.find(e=>e.category===t.category);c||e.push({category:t.category,active:0,archived:0});let o=e.findIndex(e=>e.category===t.category);return t.archived?e[o].archived+=1:e[o].active+=1,e},[]);return t},d=()=>{let e=n(c);return document.querySelectorAll(".table-body-item").forEach(e=>e.remove()),e.map((e,o)=>{let r=t.rowTemplate.content.cloneNode(!0);r.querySelector(".created").textContent=e.created,r.querySelector(".category-icon").insertAdjacentHTML("afterbegin",a(e.category)||""),r.querySelector(".category-name").textContent=e.category||"",r.querySelector(".content").textContent=e.content,r.querySelector(".dates").textContent=e.dates;let n=r.querySelector(".delete-button");n.addEventListener("click",()=>m(c,o));let l=r.querySelector(".edit-button");l.addEventListener("click",()=>y(e));let d=r.querySelector(".archive-button");d.addEventListener("click",()=>g(c,e.id)),t.tableBody.appendChild(r)})},i=()=>{let e=l(c);return e.map(e=>{let c=t.summaryRowTemplate.content.cloneNode(!0);c.querySelector(".category-icon").insertAdjacentHTML("afterbegin",a(e.category)||""),c.querySelector(".category-name").textContent=e.category||"",c.querySelector(".active").textContent=e.active,c.querySelector(".archived").textContent=e.archived,t.summaryTableBody.appendChild(c)})};t.createForm.addEventListener("submit",e=>u(e,c)),d(),i();let s=!1;const u=(c,a)=>{c.preventDefault();let n=r(t.startDate.value,t.endDate.value);if(!t.contentInput.value.trim()){t.errorMessage.innerText="*Please enter text of your note";return}let l={created:o(),category:t.categoryInput.value.trim(),content:t.contentInput.value.trim(),dates:n,archived:!1};if(s){let t=a.find(t=>t.id===e),c=a.indexOf(t),o={id:t.id,...l};a[c]=o,s=!1}else{let e={id:Math.floor(100*Math.random()),...l};a.push(e)}t.createForm.reset(),t.closeButton.click(),s=!1,d(),i()},m=(e,t)=>{e.splice(t,1),d(),i()},y=c=>{s=!0,e=c.id,t.createButton.click(),t.modalTitle.innerText="Edit Your Note",t.modalSubmitButton.innerText="Edit",t.categoryInput.value=c.category,t.contentInput.value=c.content,s=!1},g=(e,t)=>{e.find(e=>e.id===t).archived=!0,d(),i()};t.createButton.addEventListener("click",()=>{t.modal.classList.remove("hidden"),t.modalTitle.innerText="Create New Note",t.modalSubmitButton.innerText="Create",t.errorMessage.innerText=""}),t.closeButton.addEventListener("click",()=>{t.modal.classList.add("hidden")});
//# sourceMappingURL=index.dfc8cac7.js.map
