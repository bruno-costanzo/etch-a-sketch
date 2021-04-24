const grid = document.querySelector('.grid');
const gridSize = document.querySelector('#gridSize');
document.createElement('div');

gridSize.addEventListener('change', () => {
  while (grid.firstChild) {
    grid.removeChild(grid.lastChild);
  }
  let gridRows = [];
  for (let i = 0; i < parseInt(gridSize.value); i++) {
    gridRows.push(document.createElement('div'));
    gridRows[i].classList.add('gridRow');
    for (let j = 0; j < parseInt(gridSize.value); j++) {
      let square = document.createElement('div');
      square.classList.add('square');
      gridRows[i].append(square);
    }
    grid.append(gridRows[i]);
    for (let gridChild of grid.children) {
      for (let square of gridChild.children) {
        square.addEventListener(
          'mouseover',
          () =>
            (square.style.backgroundColor = `${
              '#' +
              (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6)
            }`)
        );
      }
    }
  }
});
