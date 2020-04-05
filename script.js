const div = document.createElement('div');
const divKeyBoard = document.createElement('div');
div.classList.add('wrapper');
divKeyBoard.classList.add('keyboard');
document.querySelector('body').append(div);
document.querySelector('.wrapper').innerHTML = "<textarea class='textarea' id='textarea' rows='5' cols='50'></textarea>";
const textArea = document.querySelector('textarea');
textArea.focus();

document.querySelector('.wrapper').append(divKeyBoard);


const keyBoard = {
  rowFirst: {
    Backquote: ['`', '~', 'ё', 'Ё'], Digit1: ['1', '!', '1', '!'], Digit2: ['2', '@', '2', '"'], Digit3: ['3', '#', '3', '№'], Digit4: ['4', '$', '4', ';'], Digit5: ['5', '%', '5', '%'], Digit6: ['6', '^', '6', ':'], Digit7: ['7', '&', '7', '?'], Digit8: ['8', '*', '8', '*'], Digit9: ['9', '(', '9', '('], Digit0: ['0', ')', '0', ')'], Minus: ['-', '_', '-', '_'], Equal: ['=', '+', '=', '+'], Backspace: ['Backspace', 'Backspace', 'Backspace', 'Backspace'],
  },
  rowSecond: {
    Tab: ['Tab', 'Tab', 'Tab', 'Tab'], KeyQ: ['q', 'Q', 'й', 'Й'], KeyW: ['w', 'W', 'ц', 'Ц'], KeyE: ['e', 'E', 'у', 'У'], KeyR: ['r', 'R', 'к', 'К'], KeyT: ['t', 'T', 'е', 'Е'], KeyY: ['y', 'Y', 'н', 'Н'], KeyU: ['u', 'U', 'г', 'Г'], KeyI: ['i', 'I', 'ш', 'Ш'], KeyO: ['o', 'O', 'щ', 'Щ'], KeyP: ['p', 'P', 'з', 'З'], BracketLeft: ['[', '{', 'х', 'Х'], BracketRight: [']', '}', 'ъ', 'Ъ'], Backslash: ['\\', '|', '\\', '/'],
  },
  rowThird: {
    CapsLock: ['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock'], KeyA: ['a', 'A', 'ф', 'Ф'], KeyS: ['s', 'S', 'ы', 'Ы'], KeyD: ['d', 'D', 'в', 'В'], KeyF: ['f', 'F', 'а', 'А'], KeyG: ['g', 'G', 'п', 'П'], KeyH: ['h', 'H', 'р', 'Р'], KeyJ: ['j', 'J', 'о', 'О'], KeyK: ['k', 'K', 'л', 'Л'], KeyL: ['l', 'L', 'д', 'Д'], Semicolon: [';', ':', 'ж', 'Ж'], Quote: ["'", '"', 'э', 'Э'], Enter: ['Enter', 'Enter', 'Enter', 'Enter'],
  },
  rowFourth: {
    ShiftLeft: ['Shift', 'Shift', 'Shift', 'Shift'], KeyZ: ['z', 'Z', 'я', 'Я'], KeyX: ['x', 'X', 'ч', 'Ч'], KeyC: ['c', 'C', 'с', 'С'], KeyV: ['v', 'V', 'м', 'М'], KeyB: ['b', 'B', 'и', 'И'], KeyN: ['n', 'N', 'т', 'Т'], KeyM: ['m', 'M', 'ь', 'Ь'], Comma: [',', '<', 'б', 'Б'], Period: ['.', '>', 'ю', 'Ю'], Slash: ['/', '?', '.', ','], ArrowUp: ['AU', 'AU', 'AU', 'AU'], ShiftRight: ['Shift', 'Shift', 'Shift', 'Shift'],
  },
  rowFifth: {
    ControlLeft: ['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'], MetaLeft: ['Win', 'Win', 'Win', 'Win'], AltLeft: ['Alt', 'Alt', 'Alt', 'Alt'], Space: ['', '', '', ''], AltRight: ['Alt', 'Alt', 'Alt', 'Alt'], ControlRight: ['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'], ArrowLeft: ['AL', 'AL', 'AL', 'AL'], ArrowDown: ['AD', 'AD', 'AD', 'AD'], ArrowRight: ['AR', 'AR', 'AR', 'AR'],
  },
};

for (const row in keyBoard) {
  const divRow = document.createElement('div');
  divRow.className = 'row ' + `${row}`;
  document.querySelector('.keyboard').append(divRow);
  for (const keys in keyBoard[row]) {
    const divKey = document.createElement('div');
    const spanEng = document.createElement('span');
    const spanRus = document.createElement('span');
    divKey.className = 'key ' + `${keys}`;
    spanEng.className = 'eng';
    spanRus.className = 'rus hidden';
    document.querySelector('.' + `${row}`).append(divKey);
    document.querySelector('.' + `${keys}`).append(spanEng);
    document.querySelector('.' + `${keys}`).append(spanRus);
    for (let i = 0; i < keyBoard[row][keys].length; i += 1) {
      const span = document.createElement('span');
      span.append(keyBoard[row][keys][i]);
      if (i === 0 || i === 1) {
        document.querySelector('.' + `${keys}` + ' .eng').append(span);
      } else {
        document.querySelector('.' + `${keys}` + ' .rus').append(span);
      }
    }
  }
}

document.addEventListener('keydown', (event) => {
  // if (event.code != "Enter" || event.code != "Backspace") {
  //   event.preventDefault();
  // }
  document.querySelector(`.${event.code}`).classList.add('background');
  // updateValueFromKeyBoard(event);
});

document.addEventListener('keyup', (event) => {
  document.querySelector(`.${event.code}`).classList.remove('background');
});

document.querySelector('.keyboard').addEventListener('mousedown', (event) => {
  textArea.focus();
  event.target.classList.add('background');
  updateValueFromMouse(event);
});

document.querySelector('.wrapper').addEventListener('mouseup', (event) => {
  textArea.focus();
  event.target.classList.remove('background');
});

const updateValueFromKeyBoard = (e) => {
  if (e.code === "Enter") {
    return textarea.value;
  }
  if (e.code != "Backspace")
  textarea.value = textarea.value + document.querySelector(`.${e.code}`).textContent;
}

const updateValueFromMouse = (e) => {
   textarea.value = textarea.value + e.target.textContent;
}