function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]");

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( (res) => { return res.json() })
    .then( states => {

        for( const state of states ) {
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }
    } );
}

populateUFs();

function getCities(event) {
    const citySelect = document.querySelector("select[name=city]");
    const stateInput = document.querySelector("input[name=state]");

    const ufValue = event.target.value;

    const indexOfSelectedState = event.target.selectedIndex;
    stateInput.value = event.target.options[indexOfSelectedState].text;

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`;

    citySelect.innerHTML = `<option>Selecione a Cidade</option>`;
    citySelect.disabled = true;

    fetch(url)
    .then( (res) => { return res.json() })
    .then( cities => {
        
        for( const city of cities ) {
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }

        citySelect.disabled = false;
    } );

}

document
        .querySelector("select[name=uf]")
        .addEventListener("change", getCities);

// Itens de coleta
const itemsToCollect = document.querySelectorAll(".items-grid li");

for (const item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItem)
}

const colectedItems =  document.querySelector("input[name=items]");

let selectedItems = [];

function handleSelectedItem(event) {
    const itemLi = event.target;

    // adicionar ou remover classe com js
    itemLi.classList.toggle("selected");

    const itemId = itemLi.dataset.id;

    // verificar se existem item selecionados, se sim
    // pegar os item selecionados

    const alreadySelected = selectedItems.findIndex( item => item == itemId );

    // se já estiver selecionado, tirar da seleção

    if (alreadySelected >= 0) {
        // tirar da seleção
        const filteredItems = selectedItems.filter((item => item != itemId));

        selectedItems = filteredItems;
    } else {
        // se não estiver selecionado, adicionar a seleção
        // adicionar a seleção

        selectedItems.push(itemId);
    }

    //atualizar o campo escondido com os items selecionados
    colectedItems.value = selectedItems;
}