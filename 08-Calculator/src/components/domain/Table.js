import { Number } from '../base/index.js';

export default function Table({
  targetEl,
  onNumberClick,
  onCountClick,
  onClearClick,
}) {
  const tableEl = document.createElement('div');
  tableEl.className = 'table';

  const divEl1 = document.createElement('div');
  const divEl2 = document.createElement('div');
  const divEl3 = document.createElement('div');
  const divEl4 = document.createElement('div');
  const divEl5 = document.createElement('div');

  new Number({
    targetEl: divEl1,
    state: '1',
    onClick: onNumberClick,
  });
  new Number({
    targetEl: divEl1,
    state: '2',
    onClick: onNumberClick,
  });
  new Number({
    targetEl: divEl1,
    state: '3',
    onClick: onNumberClick,
  });
  new Number({
    targetEl: divEl2,
    state: '4',
    onClick: onNumberClick,
  });
  new Number({
    targetEl: divEl2,
    state: '5',
    onClick: onNumberClick,
  });
  new Number({
    targetEl: divEl2,
    state: '6',
    onClick: onNumberClick,
  });
  new Number({
    targetEl: divEl3,
    state: '7',
    onClick: onNumberClick,
  });
  new Number({
    targetEl: divEl3,
    state: '8',
    onClick: onNumberClick,
  });
  new Number({
    targetEl: divEl3,
    state: '9',
    onClick: onNumberClick,
  });
  new Number({
    targetEl: divEl1,
    state: '+',
    color: '#ffb84d',
    onClick: onNumberClick,
  });
  new Number({
    targetEl: divEl2,
    state: '-',
    color: '#ffcc80',
    onClick: onNumberClick,
  });
  new Number({
    targetEl: divEl3,
    state: '*',
    color: '#ffe0b3',
    onClick: onNumberClick,
  });
  new Number({
    targetEl: divEl4,
    state: '.',
    onClick: onNumberClick,
  });
  new Number({
    targetEl: divEl4,
    state: '0',
    onClick: onNumberClick,
  });
  new Number({
    targetEl: divEl4,
    state: 'C',
    onClick: onClearClick,
  });
  new Number({
    targetEl: divEl4,
    state: '/',
    color: '#fff5e6',
    onClick: onNumberClick,
  });
  new Number({
    targetEl: divEl5,
    state: '=',
    onClick: onCountClick,
  });

  tableEl.appendChild(divEl1);
  tableEl.appendChild(divEl2);
  tableEl.appendChild(divEl3);
  tableEl.appendChild(divEl4);
  tableEl.appendChild(divEl5);

  targetEl.appendChild(tableEl);
}
