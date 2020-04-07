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
    Tab: ['Tab', 'Tab', 'Tab', 'Tab'], KeyQ: ['q', 'Q', 'й', 'Й'], KeyW: ['w', 'W', 'ц', 'Ц'], KeyE: ['e', 'E', 'у', 'У'], KeyR: ['r', 'R', 'к', 'К'], KeyT: ['t', 'T', 'е', 'Е'], KeyY: ['y', 'Y', 'н', 'Н'], KeyU: ['u', 'U', 'г', 'Г'], KeyI: ['i', 'I', 'ш', 'Ш'], KeyO: ['o', 'O', 'щ', 'Щ'], KeyP: ['p', 'P', 'з', 'З'], BracketLeft: ['[', '{', 'х', 'Х'], BracketRight: [']', '}', 'ъ', 'Ъ'], Backslash: ['\\', '|', '\\', '/'], Delete: ['Del', 'Del', 'Del', 'Del'],
  },
  rowThird: {
    CapsLock: ['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock'], KeyA: ['a', 'A', 'ф', 'Ф'], KeyS: ['s', 'S', 'ы', 'Ы'], KeyD: ['d', 'D', 'в', 'В'], KeyF: ['f', 'F', 'а', 'А'], KeyG: ['g', 'G', 'п', 'П'], KeyH: ['h', 'H', 'р', 'Р'], KeyJ: ['j', 'J', 'о', 'О'], KeyK: ['k', 'K', 'л', 'Л'], KeyL: ['l', 'L', 'д', 'Д'], Semicolon: [';', ':', 'ж', 'Ж'], Quote: ["'", '"', 'э', 'Э'], Enter: ['Enter', 'Enter', 'Enter', 'Enter'],
  },
  rowFourth: {
    ShiftLeft: ['Shift', 'Shift', 'Shift', 'Shift'], KeyZ: ['z', 'Z', 'я', 'Я'], KeyX: ['x', 'X', 'ч', 'Ч'], KeyC: ['c', 'C', 'с', 'С'], KeyV: ['v', 'V', 'м', 'М'], KeyB: ['b', 'B', 'и', 'И'], KeyN: ['n', 'N', 'т', 'Т'], KeyM: ['m', 'M', 'ь', 'Ь'], Comma: [',', '<', 'б', 'Б'], Period: ['.', '>', 'ю', 'Ю'], Slash: ['/', '?', '.', ','], ArrowUp: ['Up', 'Up', 'Up', 'Up'], ShiftRight: ['Shift', 'Shift', 'Shift', 'Shift'],
  },
  rowFifth: {
    ControlLeft: ['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'], MetaLeft: ['Win', 'Win', 'Win', 'Win'], AltLeft: ['Alt', 'Alt', 'Alt', 'Alt'], Space: ['Space', 'Space', 'Space', 'Space'], AltRight: ['Alt', 'Alt', 'Alt', 'Alt'], ControlRight: ['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'], ArrowLeft: ['Left', 'Left', 'Left', 'Left'], ArrowDown: ['Down', 'Down', 'Down', 'Down'], ArrowRight: ['Right', 'Right', 'Right', 'Right'],
  },
};

for (const row in keyBoard) {
  const divRow = document.createElement('div');
  divRow.className = `row ${row}`;
  document.querySelector('.keyboard').append(divRow);
  for (const keys in keyBoard[row]) {
    const divKey = document.createElement('div');
    const spanEng = document.createElement('span');
    const spanRus = document.createElement('span');
    divKey.className = `key ${keys}`;
    spanEng.className = 'eng';
    spanRus.className = 'rus hidden';
    document.querySelector(`.${row}`).append(divKey);
    document.querySelector(`.${keys}`).append(spanEng);
    document.querySelector(`.${keys}`).append(spanRus);
    for (let i = 0; i < keyBoard[row][keys].length; i += 1) {
      const span = document.createElement('span');
      span.append(keyBoard[row][keys][i]);
      if (i === 0 || i === 1) {
        document.querySelector(`.${keys} .eng`).append(span);
        if (i === 1) {
          span.classList.add('hidden');
        }
      } else {
        document.querySelector(`.${keys} .rus`).append(span);
        if (i === 3) {
          span.classList.add('hidden');
        }
      }
    }
  }
}

const p = document.createElement('p');
document.querySelector('.wrapper').append(p);
document.querySelector('p').innerText = "Данная клавиатура выполнена для Windows. Для переключения языка используйте ctrl+alt.";

const addClickTabHandler = () => {
  // const textArea = document.querySelector('textarea');
  textArea.value += '  ';
};

const addClickBackspaceHandler = () => {
  // const textArea = document.querySelector('textarea');
  textArea.setRangeText('', textArea.selectionStart - 1, textArea.selectionEnd);
};

const addClickDelHandler = () => {
  textArea.setRangeText('', textArea.selectionStart, textArea.selectionEnd + 1);
};

const addClickSpaceHandler = () => {
  // const textArea = document.querySelector('textarea');
  textArea.value += ' ';
};

const addClickEnterHandler = () => {
  // const textArea = document.querySelector('textarea');
  textArea.value += '\n';
};

const addClickSpecialKeysHandler = () => {
  // const textArea = document.querySelector('textarea');
  textArea.value += '';
};

const arrowLeft = (elm) => {
  elm.selectionStart = elm.selectionEnd -= 1;
};

const arrowRight = (elm) => {
  elm.selectionStart = elm.selectionEnd += 1;
};

const arrowDown = (elm) => {
  let pos = elm.selectionEnd;
  const prevLine = elm.value.lastIndexOf('\n', pos);
  const nextLine = elm.value.indexOf('\n', pos + 1);
  if (nextLine === -1) return;
  pos -= prevLine;
  elm.selectionStart = elm.selectionEnd = nextLine + pos;
};

const arrowUp = (elm) => {
  let pos = elm.selectionEnd;
  const prevLine = elm.value.lastIndexOf('\n', pos);
  const TwoBLine = elm.value.lastIndexOf('\n', prevLine - 1);
  if (prevLine === -1) return;
  pos -= prevLine;
  elm.selectionStart = elm.selectionEnd = TwoBLine + pos;
};

let capsLock = true;

const addChangeCapslockUppercase = (e) => {
  const keyCapslock = e.target.textContent.substring(0, 8);
  const keyTarget = e.target.textContent;
  if (e.code === 'CapsLock' || keyCapslock === 'CapsLock' || keyTarget === 'CapsLock') {
    if (capsLock) {
      document.querySelectorAll('span span:first-child').forEach((elem) => {
        if (elem.innerHTML.length === 1) {
          elem.innerHTML = elem.innerHTML.toUpperCase();
        }
      });
      capsLock = false;
    } else {
      document.querySelectorAll('span span:first-child').forEach((elem) => {
        if (elem.innerHTML.length === 1) {
          elem.innerHTML = elem.innerHTML.toLowerCase();
        }
      });
      capsLock = true;
    }
  }
};

const addChangeShiftUppercase = (e) => {
  const KeyShift = e.target.textContent.substring(0, 5);
  const keyTarget = e.target.textContent;
  let flag = true;
  if (e.code === 'ShiftLeft' || e.code === 'ShiftRight' || KeyShift === 'Shift' || keyTarget === 'Shift' && flag) {
    document.querySelectorAll('span span').forEach((elem) => {
      if (elem.classList.contains('hidden')) {
        elem.classList.remove('hidden');
      } else {
        elem.classList.add('hidden');
      }
    });
    flag = false;
  }
};

// let language = true;

const addChangeLanguage = (e) => {
  if (e.ctrlKey && e.altKey) {
    e.preventDefault();
    document.querySelectorAll('.key .eng').forEach((elem) => {
      if (elem.classList.contains('hidden')) {
        elem.classList.remove('hidden');
      } else {
        elem.classList.add('hidden');
      }
    });
    document.querySelectorAll('.key .rus').forEach((elem) => {
      if (elem.classList.contains('hidden')) {
        elem.classList.remove('hidden');
      } else {
        elem.classList.add('hidden');
      }
    });
    // language = false;
  }
};

const updateValueFromRealKeyBoard = (e) => {
  if (e.code !== 'Enter' && e.code !== 'Backspace' && e.code !== 'ArrowLeft' && e.code !== 'ArrowUp' && e.code !== 'ArrowDown' && e.code !== 'ArrowRight' && e.code !== 'Delete') {
    e.preventDefault();
  }
  const classKey = document.querySelector(`.${e.code}`);
  if (e.key.length === 1) {
    if (document.querySelector(`.${e.code} .eng`).classList.contains('hidden')) {
      textArea.value += classKey.textContent[2];
    } else {
      textArea.value += e.key;
    }
  }
};

const updateValueFromMouse = (e) => {
  const keyTab = e.target.textContent.substring(0, 3);
  const KeyBackspace = e.target.textContent.substring(0, 9);
  const keyDel = e.target.textContent.substring(0, 3);
  const KeySpace = e.target.textContent.substring(0, 5);
  const KeyEnter = e.target.textContent.substring(0, 5);
  const KeyShift = e.target.textContent.substring(0, 5);
  const keyCtrl = e.target.textContent.substring(0, 4);
  const keyWin = e.target.textContent.substring(0, 3);
  const keyAlt = e.target.textContent.substring(0, 3);
  const keyUp = e.target.textContent.substring(0, 2);
  const keyLeft = e.target.textContent.substring(0, 4);
  const keyDown = e.target.textContent.substring(0, 4);
  const keyRight = e.target.textContent.substring(0, 5);
  const keyCapslock = e.target.textContent.substring(0, 8);
  const keyTarget = e.target.textContent;
  if (e.target.textContent.length > 1) {
    if (keyTab === 'Tab' || keyTarget === 'Tab') {
      addClickTabHandler();
    } else if (KeyBackspace === 'Backspace' || keyTarget === 'Backspace') {
      addClickBackspaceHandler();
    } else if (KeySpace === 'Space' || keyTarget === 'Space') {
      addClickSpaceHandler();
    } else if (KeyEnter === 'Enter' || keyTarget === 'Enter') {
      addClickEnterHandler();
    } else if (keyCapslock === 'CapsLock' || keyUp === 'Up' || keyLeft === 'Left' || keyDown === 'Down' || keyRight === 'Right' || KeyShift === 'Shift' || keyCtrl === 'Ctrl' || keyWin === 'Win' || keyAlt === 'Alt' || keyTarget === 'Ctrl' || keyTarget === 'Win' || keyTarget === 'Alt' || keyTarget === 'Shift' || keyTarget === 'CapsLock' || keyTarget === 'Up' || keyTarget === 'Left' || keyTarget === 'Down' || keyTarget === 'Right') {
      addClickSpecialKeysHandler();
    } else if (keyDel === 'Del' || keyTarget === 'Del') {
      addClickDelHandler();
    } else if (document.querySelector('.key .eng').classList.contains('hidden')) {
      textArea.value += e.target.textContent[2];
    } else {
      textArea.value += e.target.querySelector('span span').textContent;
    }
  } else {
    textArea.value += e.target.textContent;
  }
};

document.addEventListener('keydown', (event) => {
  if (event.code === 'Tab') {
    event.preventDefault();
    addClickTabHandler();
  }
  if (event.altKey) {
    event.preventDefault();
    addClickSpecialKeysHandler();
  }
  document.querySelector(`.${event.code}`).classList.add('background');
  addChangeCapslockUppercase(event);
  addChangeShiftUppercase(event);
  addChangeLanguage(event);
  updateValueFromRealKeyBoard(event);
});

document.addEventListener('keyup', (event) => {
  document.querySelector(`.${event.code}`).classList.remove('background');
  addChangeShiftUppercase(event);
});

document.querySelector('.keyboard').addEventListener('mousedown', (event) => {
  textArea.focus();
  event.target.classList.add('background');
  addChangeCapslockUppercase(event);
  updateValueFromMouse(event);
  addChangeShiftUppercase(event);
});

document.querySelector('.ArrowLeft').addEventListener('click', () => {
  textArea.focus();
  arrowLeft(textArea);
});

document.querySelector('.ArrowUp').addEventListener('click', () => {
  textArea.focus();
  arrowUp(textArea);
});

document.querySelector('.ArrowDown').addEventListener('click', () => {
  textArea.focus();
  arrowDown(textArea);
});

document.querySelector('.ArrowRight').addEventListener('click', () => {
  textArea.focus();
  arrowRight(textArea);
});

document.querySelector('.wrapper').addEventListener('mouseup', (event) => {
  textArea.focus();
  event.target.classList.remove('background');
  addChangeShiftUppercase(event);
});