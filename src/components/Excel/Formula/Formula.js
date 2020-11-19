import ExcelComponent from '@core/ExcelComponent';

export default class Formula extends ExcelComponent {
  static className = 'formula';

  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click']
    });
  }

  toHTML() {
    return `
    <div class="formula__info">fx</div>
    <div class="formula__input" contenteditable="true" spellcheck="false"></div>
`;
  }

  onInput(event) {
    console.log(event);
  }

  onClick() {
    console.log('clicked');
  }
}
