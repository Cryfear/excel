const CODES = {
  A: 65,
  Z: 90,
};

function toCell(value = '') {
  return `<div class="cell" contenteditable="true">${value}</div>`;
}

function toColumn(col) {
  return `<div class="column">${col}</div>`;
}

function createRow(content, index = '', cels) {
  return `
    <div class="row">
      <div class="row-info">${index}</div>
      <div class="row-data">${content} ${cels || ''}</div>
    </div>
  `;
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index);
}

export function createTable(rowsCount = 20) {
  const colsCount = CODES.Z - CODES.A + 1; // how many columns we need
  const rows = []; // rows, vertical just numbers of lines
  const cels = new Array(colsCount).fill('').map(toCell); // horizontal contenteditable cels
  const cols = new Array(colsCount).fill('').map(toChar).map(toColumn).join(''); // horizontal letters with html, header vertical rows

  rows.push(createRow(cols));

  for (let i = 1; i <= rowsCount; i++) {
    rows.push(createRow('', i, cels.join('')));
  }

  return rows.join('');
}
