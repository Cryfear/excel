const CODES = {
  A: 65,
  Z: 90,
};

function toCell(char) {
  return `<div class="cell" data-resize-id=${char} contenteditable="true">${''}</div>`;
}

function toColumn(col) {
  return `
    <div class="column" data-type="resizable" data-resize-id=${col}>
        ${col}
        <div class="col-resize" data-resize="col"></div>
    </div>`;
}

function createRow(content, index = '', cels) {
  const resizer = index ? `<div class="row-resize" data-resize="row"></div>` : '';
  return `
    <div class="row" data-type="resizable">
      <div class="row-info">${index}${resizer}</div>
      <div class="row-data">${content} ${cels || ''}</div>
    </div>
  `;
}


function toChar(_, index) {
  return String.fromCharCode(CODES.A + index);
}

export function createTable(rowsCount = 20) {
  const colsCount = CODES.Z - CODES.A + 1; // how many columns we need
  const rows = [];
  const chared = new Array(colsCount).fill('').map(toChar);

  const cels = chared.map(toCell);
  // horizontal contenteditable cels
  const cols = chared.map(toChar).map(toColumn).join(''); // horizontal letters with html, header vertical rows

  rows.push(createRow(cols));

  for (let i = 1; i <= rowsCount; i++) {
    rows.push(createRow('', i.toString(), cels.join('')));
  }

  return rows.join('');
}
