import { doc } from 'prettier';

/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    let new_button = document.createElement('button');
    new_button.innerHTML = 'Удали меня';
    document.body.appendChild(new_button);

    let button = document.getElementsByTagName('button');
    button[0].addEventListener('click', () => button[0].remove());
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    let ul = document.createElement('ul');
    document.body.appendChild(ul);
    for (let i = 0, ln = arr.length; i < ln; i++) {
        let li = document.createElement('li');
        li.innerHTML = arr[i];
        ul.appendChild(li);
        li.addEventListener('mouseover', () =>
            li.setAttribute('Title', arr[i]),
        );
    }
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    let link = document.createElement('a');
    link.innerHTML = 'tensor';
    link.setAttribute('href', 'https://tensor.ru/');
    document.body.appendChild(link);
    link.addEventListener('click', function () {
        link.innerHTML = link.innerHTML + ' ' + link.getAttribute('href');
    });
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    let ul = document.createElement('ul');
    document.body.appendChild(ul);
    let li = document.createElement('li');
    li.innerHTML = 'Пункт';
    ul.appendChild(li);

    li.addEventListener('click', () => (li.innerHTML = li.innerHTML + '!'));

    let new_button = document.createElement('button');
    new_button.innerHTML = 'Добавить пункт';
    document.body.appendChild(new_button);

    new_button.addEventListener('click', function () {
        let li = document.createElement('li');
        li.innerHTML = 'Пункт';
        ul.appendChild(li);
        li.addEventListener('click', () => (li.innerHTML = li.innerHTML + '!'));
    });
}
