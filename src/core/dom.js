class Dom {
  constructor(selector) {
    this.$el = typeof selector === 'string'
      ? document.querySelector(selector)
      : selector;
  }

  html(html) {
    if (typeof html === 'string') {
      this.$el.innerHTML = html;
      return this;
    }
    return this.$el.outerHTML.trim();
  }

  clear() {
    this.html('');
    return this;
  }

  on(eventType, callback) {
    this.$el.addEventListener(eventType, callback);
  }

  off(eventType, callback) {
    this.$el.removeEventListener(eventType, callback);
  }

  append(nodeElement) {
    if (nodeElement instanceof Dom) nodeElement = nodeElement.$el;

    if (Element.prototype.append) this.$el.append(nodeElement);
    else {
      this.$el.appendChild(nodeElement);
    }

    return this;
  }

  get data() {
    return this.$el.dataset;
  }

  closest(selector) {
    return $(this.$el.closest(selector));
  }

  getCoords() {
    return this.$el.getBoundingClientRect();
  }

  findAll(tagName) {
    return this.$el.querySelectorAll(tagName);
  }

  css(styles = {}) {
    for (const [property, value] of Object.entries(styles)) {
      if (property.startsWith('--')) {
        this.$el.style.setProperty(property, value);
      } else {
        this.$el.style[property] = value;
      }
    }
  }
}

export function $(selector) {
  return new Dom(selector);
}

$.create = (tagName, classes = '') => {
  const el = document.createElement(tagName);
  if (classes) el.classList.add(classes);
  return $(el);
};
