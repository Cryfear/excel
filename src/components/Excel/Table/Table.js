import ExcelComponent from '@core/ExcelComponent';

export default class Table extends ExcelComponent {
  static className = 'table';

  toHTML() {
    return `
    <div class="row">

      <div class="row-info"></div>

      <div class="row-data">
        <div class="column">
          A
        </div>
        <div class="column">
          B
        </div>
        <div class="column">
          A
        </div>
        <div class="column">
          B
        </div>
        <div class="column">
          A
        </div>
        <div class="column">
          B
        </div>
        <div class="column">
          A
        </div>
        <div class="column">
          B
        </div>
        <div class="column">
          A
        </div>
        <div class="column">
          B
        </div>
        <div class="column">
          A
        </div>
        <div class="column">
          B
        </div>
        <div class="column">
          A
        </div>
        <div class="column">
          B
        </div>
        <div class="column">
          A
        </div>
        <div class="column">
          B
        </div>
        <div class="column">
          A
        </div>
        <div class="column">
          B
        </div>

        <div class="column">
          A
        </div>
        <div class="column">
          B
        </div>
      </div>

    </div>

    <div class="row">
      <div class="row-info">
        1
      </div>

      <div class="row-data">
        <div class="cell selected" contenteditable="">A1</div>
        <div class="cell" contenteditable="">B2</div>
      </div>
    </div>

    <div class="row">
      <div class="row-info">
        2
      </div>

      <div class="row-data">
        <div class="cell">A1</div>
        <div class="cell">B2</div>
      </div>
    </div>`;
  }
}
