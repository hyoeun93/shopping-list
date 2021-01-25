const inputText = document.querySelector('.footer__input');
const list = document.querySelector('ul');
const addBtn = document.querySelector('.footer__button');
const trashBtn = document.querySelector('.trash');

function onAdd() {
  const text = inputText.value;
  if (text === '') {
    inputText.focus();
    return;
  }
  const item = createItem(text);
  list.appendChild(item);

  item.scrollIntoView({ block: 'center' });

  inputText.value = '';
  inputText.focus();
}

let id = 0;
function createItem(text) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'list__name');
  itemRow.setAttribute('data-id', id);
  itemRow.innerHTML = `
    <div class="item">
        <span class="item__name">${text}</span>
        <button class="trash">
          <i class="fas fa-trash-alt" data-id=${id}></i>
        </button>
    </div>
    <div class="item__divider"></div>
  `;
  id++;

  // const item = document.createElement('div');
  // item.setAttribute('class', 'item');

  // const span = document.createElement('span');
  // span.setAttribute('class', 'item__name');
  // span.innerText = text;

  // const deleteBtn = document.createElement('button');
  // deleteBtn.setAttribute('class', 'trash');
  // deleteBtn.innerHTML = ' <i class="fas fa-trash-alt"></i>';
  // deleteBtn.addEventListener('click', () => {
  //   list.removeChild(itemRow);
  // });

  // const itemDivider = document.createElement('div');
  // itemDivider.setAttribute('class', 'item__divider');

  // item.appendChild(span);
  // item.appendChild(deleteBtn);

  // itemRow.appendChild(item);
  // itemRow.appendChild(itemDivider);
  return itemRow;
}

addBtn.addEventListener('click', () => {
  onAdd();
});

inputText.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    onAdd();
  }
});

list.addEventListener('click', (event) => {
  const id = event.target.dataset.id;
  if (id) {
    const toBeDeleted = document.querySelector(`.list__name[data-id="${id}"]`);
    toBeDeleted.remove();
  }
});
