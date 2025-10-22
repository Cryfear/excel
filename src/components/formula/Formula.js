import { ExcelComponent } from '@core/ExcelComponent';
import { $ } from '@core/dom';

export class Formula extends ExcelComponent {
  static className = 'excel__formula';

  constructor($root, options) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click', 'keydown'],
      ...options,
    });
  }

  toHTML() {
    return `
      <div class="info">fx</div>
      <div class="input" contenteditable spellcheck="false"></div>
    `;
  }

  init() {
    super.init();

    this.$on('table:input', value => {
      this.$root.$el.querySelector('.input').innerText = value;
    });
  }

  onInput(event) {
    this.emitter.emit('formula:input', $(event.target).text());
  }

  onClick(event) {

  };

  onKeydown(event) {
    const { key } = event;

    if (key === 'Tab') {
      event.preventDefault();
    } else if (key === 'Enter') {
      event.preventDefault();
      this.emitter.emit('formula:done');
      this.emitter.emit('formula:input', $(event.target).text());
    }
  }
}
