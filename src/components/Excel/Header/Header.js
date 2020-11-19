import ExcelComponent from '@core/ExcelComponent';

export default class Header extends ExcelComponent {
  static className = 'header';

  toHTML() {
    return `
        <input placeholder="Новая таблица" class="header__input">
        <div class="header__icons-wrapper">
          <span class="material-icons">
            delete
          </span>
          <span class="material-icons">
            exit_to_app
          </span>
        </div>
    `;
  }
}
