`use strict`;

function tableCreate(row, col) {
    let number = 0
    let body = document.body;
    let tbl = document.createElement('table');

    for (let i = 0; i < row; i++) {
        let tr = tbl.insertRow();
        for (let j = 0; j < col; j++) {
            let td = tr.insertCell();
            number++
            td.appendChild(document.createTextNode(`${number}`));

        }
    }
    body.appendChild(tbl);
}

tableCreate(10, 10);