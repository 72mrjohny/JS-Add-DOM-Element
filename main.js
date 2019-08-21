const clearForm = () => {
    addForm.elements.node.value = '';
    addForm.elements.text.value = '';
    addForm.elements.attr.value = '';
    addForm.elements.value.value = '';
}

const addElement = (e, node, txt, attr, value) => {
    e.preventDefault();
    const element = document.createElement(node);
    const text = document.createTextNode(txt);
    if (text) {
        element.appendChild(text);
    }
    if (attr) {
        element.setAttribute(attr, value);
    }
    document.querySelector('.content').appendChild(element);
    clearForm();

}

const searchElements = (e, nameElement) => {
    e.preventDefault();
    const infoElement = document.querySelector('.result');
    infoElement.textContent = '';
    const elements = [...document.querySelectorAll(nameElement)];

    if (elements.length) {
        infoElement.innerHTML = `<p class="result__info">W dokumencie znaleziono <strong>${elements.length}</strong> elementów <strong>${nameElement} </strong></p>`;
        showInfo(elements, infoElement);
    } else {
        infoElement.innerHTML = `<p class="result__info">W dokumencie nie znaleziono elementów <strong>${nameElement} </strong></p>`;
        return;
    }

}

const showInfo = (elements, infoElement) => {
    console.log(elements);
    elements.forEach((element) => {
        const item = document.createElement('div');
        item.className = 'element-info';
        item.innerHTML = `
        <div>${element.nodeName}</div>
        <div>klasy: <strong>${element.className}</strong></div>
        <div>Wysokość elementu (offsetHeigh): <strong>${element.offsetHeight}</strong></div>
        <div>Szerokość elementu (offsetWidth): <strong>${element.offsetWidth}</strong></div>
        <div>Odległość od lewej krawędzi (offsetLeft): <strong>${element.offsetLeft}</strong></div>
        <div>Odległość od górnej krawędzi (offsetTop): <strong>${element.offsetTop}</strong></div>
        <div>Liczba elementów dzieci (childElementCount): <strong>${element.childElementCount}</strong></div>
        `;
        infoElement.appendChild(item);
    })
};


// listenery
const addForm = document.querySelector('.form--add');
addForm.addEventListener('submit', (e) => addElement(
    e,
    addForm.elements.node.value,
    addForm.elements.text.value,
    addForm.elements.attr.value,
    addForm.elements.value.value,
))

const searchForm = document.querySelector('.form--search');
searchForm.addEventListener('submit', (e) => searchElements(e, searchForm.elements['searching-element'].value));