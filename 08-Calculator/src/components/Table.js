import Number from './Number.js';

export default function Table({
  targetEl,
  onNumberClick,
  onCountClick,
  onClearClick,
}) {
  const tableEl = document.createElement('table');
  const trEl1 = document.createElement('tr');
  const trEl2 = document.createElement('tr');
  const trEl3 = document.createElement('tr');
  const trEl4 = document.createElement('tr');
  const trEl5 = document.createElement('tr');
  tableEl.setAttribute('border', '1');

  new Number({
    targetEl: trEl1,
    state: '1',
    onClick: onNumberClick,
  });
  new Number({
    targetEl: trEl1,
    state: '2',
    onClick: onNumberClick,
  });
  new Number({
    targetEl: trEl1,
    state: '3',
    onClick: onNumberClick,
  });
  new Number({
    targetEl: trEl2,
    state: '4',
    onClick: onNumberClick,
  });
  new Number({
    targetEl: trEl2,
    state: '5',
    onClick: onNumberClick,
  });
  new Number({
    targetEl: trEl2,
    state: '6',
    onClick: onNumberClick,
  });
  new Number({
    targetEl: trEl3,
    state: '7',
    onClick: onNumberClick,
  });
  new Number({
    targetEl: trEl3,
    state: '8',
    onClick: onNumberClick,
  });
  new Number({
    targetEl: trEl3,
    state: '9',
    onClick: onNumberClick,
  });
  new Number({
    targetEl: trEl1,
    state: '+',
    onClick: onNumberClick,
  });
  new Number({
    targetEl: trEl2,
    state: '-',
    onClick: onNumberClick,
  });
  new Number({
    targetEl: trEl3,
    state: '*',
    onClick: onNumberClick,
  });
  new Number({
    targetEl: trEl4,
    state: '.',
    onClick: onNumberClick,
  });
  new Number({
    targetEl: trEl4,
    state: '0',
    onClick: onNumberClick,
  });
  new Number({
    targetEl: trEl4,
    state: 'C',
    onClick: onClearClick,
  });
  new Number({
    targetEl: trEl4,
    state: '/',
    onClick: onNumberClick,
  });
  new Number({
    targetEl: trEl5,
    state: '=',
    onClick: onCountClick,
  });

  tableEl.appendChild(trEl1);
  tableEl.appendChild(trEl2);
  tableEl.appendChild(trEl3);
  tableEl.appendChild(trEl4);
  tableEl.appendChild(trEl5);
  targetEl.appendChild(tableEl);
}
