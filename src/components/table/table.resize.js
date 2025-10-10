import { $ } from '@core/dom';

export function resizeHandler(event, $root) {
  const type = event.target.dataset.resize;
  const resizer = $(event.target);
  const parent = resizer.closest('[data-type="resizable"]');
  const sideProp = type === 'col' ? 'bottom' : 'right';

  const cords = parent.getCoords();

  resizer.css({ opacity: 1, [sideProp]: '-5000px' });

  document.onmousemove = e => {
    if (type === 'col') {
      const delta = e.pageX - cords.right;
      resizer.css({ right: -delta + 'px' });
    } else {
      const delta = e.pageY - cords.bottom;
      resizer.css({ bottom: -delta + 'px' });
    }
  };

  document.onmouseup = e => {
    document.onmouseup = null;
    document.onmousemove = null;

    if (type === 'col') {
      const colId = parent.data['resizeId'];
      const columns = $root.findAll(`.cell[data-resize-id=${colId}]`);

      const delta = e.pageX - cords.right;
      const value = cords.width + delta;

      columns.forEach(item => item.style.width = value + 'px');

      resizer.css({ right: 0 });
      parent.css({ width: value + 'px' });
    } else {
      const delta = e.pageY - cords.bottom;
      const value = cords.height + delta;

      parent.css({ height: value + 'px' });
    }

    resizer.css({ opacity: 0, bottom: 0 });
  };
}

export const shouldResize = event => event.target.dataset.resize;
