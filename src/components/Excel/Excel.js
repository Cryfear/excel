import { $ } from '@core/dom';

export default class Excel {
  constructor($root, options) {
    // root - куда идет весь html

    this.$root = $($root);
    this.components = options.components || [];
  }

  getRoot() {
    const $root = $.create('div', 'excel');

    this.components = this.components.map(Component => {
      const element = $.create('div', Component.className);
      const component = new Component(element);

      element.html(component.toHTML());
      $root.append(element);

      return component;
    });

    return $root;
  }

  render() {
    this.$root.append(this.getRoot());

    this.components.forEach(component => component.init());
  }
}

