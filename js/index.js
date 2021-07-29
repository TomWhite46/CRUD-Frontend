'use strict';

// getall

const baseURL = "http://localhost:8080";
const mainTableBody = document.querySelector("#mainTableBody");
const createForm = document.querySelector("#createForm");

//*********************************SHOW ALL, calling render word for each item*************************
const showAll = () => {
    mainTableBody.innerHTML="";

    axios.get(`${baseURL}/getAll`)
        .then(res => {
            const words = res.data;
            words.forEach(word => {
                renderWord(word, mainTableBody);
                // console.log(word);
            })
        }).catch(err => console.log(err));
}

//*********************render word as row in tbody******************************
const renderWord = (word, section) => {
    //create row
    const newRow = document.createElement('tr');
    newRow.id = word.id; //adds word id as row id

    // create cells
    const iclCell = document.createElement('td');
    const engCell = document.createElement('td');
    const posCell = document.createElement('td');
    const scoreCell = document.createElement('td');

    //2d array for cells and values
    const cellsVals = [[iclCell, word.icelandic], [engCell, word.english], [posCell,word.pos], [scoreCell,word.score]];

    for (let i = 0; i < cellsVals.length; i++) {
        let subDiv = document.createElement('div');
		//subdiv needs onclick function added here for update function
        subDiv.addEventListener('click', (e) => divToInput(e.target, i));
		
        subDiv.innerText = cellsVals[i][1];
        cellsVals[i][0].appendChild(subDiv);
        newRow.appendChild(cellsVals[i][0]);
    }
    
    //insert delete button
    const delCell = document.createElement('td');
    const delButton = document.createElement('button');
    delButton.innerText="Delete";
    
    delButton.addEventListener('click', function(e) {
        deleteById(word.id);
    });
    
    
    delCell.appendChild(delButton);
    newRow.appendChild(delCell);

    section.appendChild(newRow);

}

//*************************************CREATE NEW **********************************************
const createWord = (newWord) => {
    //post new word with create request
    axios.post(`${baseURL}/create`, newWord)
    .then(res => {
        showAll(); //call show all to refresh with new word added
    }).catch(err => console.log(err));

}

//apply above function to 'add word' button
createForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const thisForm = e.target;

    let newIcl = thisForm.icl.value;
    let newEng = thisForm.eng.value;
    let newPos = thisForm.pos.value;
    let newWord = {icelandic:newIcl,english:newEng,pos:newPos};
    createWord(newWord);
    thisForm.icl.value ="";
    thisForm.eng.value ="";
    thisForm.pos.value ="";
    thisForm.icl.focus();
})

//************************************DELETE BY ID *****************************************/
const deleteById = (id) => {
    axios.delete(`${baseURL}/delete/${id}`)
    .then(res => {
        showAll();
    }).catch(err => console.log(err));
}


//*************************************REPLACE BY ID ******************************************/
const replace = (id, replacementWord) => {
    axios.put(`${baseURL}/update/${id}`, replacementWord)
    .then(res => {
        showAll();
    }).catch(err => console.log(err));
}

//converts divs in getall table to text inputs
const divToInput= (thisDiv, colNo) => {
    //create input
    const newInput = document.createElement('input');
    newInput.type = "text";
    newInput.class = "specialInput";
    newInput.style.width="70px";
    newInput.value = thisDiv.innerText;
    //event listener for input
    newInput.addEventListener('focusout', (e) => inputToDiv(e.target));
    newInput.addEventListener('keydown', function (e) {
        //handle enter keypress
        if (e.key === 'Enter') {
            e.preventDefault();
            createForm.icl.focus();
        }

        
        
    });

    //make div invisible
    thisDiv.classList.add("hidden");

    //insert input into parent td
    thisDiv.parentElement.appendChild(newInput);
    newInput.focus();
}

// ****************** run immediately ************************
showAll();
getRandom();