let div = document.createElement("div");
div.classList.add("wrapper");
document.querySelector("body").append(div);

let keyBoard = {
  rowFirst: {Backquote: ["`", "~", "ё", "Ё"], Digit1: ["1", "!", "1", "!"], Digit2: ["2", "@", "2", "\""], Digit3: ["3", "#", "3", "№"], Digit4: ["4", "$", "4", ";"], Digit5: ["5", "%", "5", "%"], Digit6: ["6", "^", "6", ":"], Digit7: ["7", "&", "7", "?"], Digit8: ["8", "*", "8", "*"], Digit9: ["9", "(", "9", "("], Digit0: ["0", ")", "0", ")"], Minus: ["-", "_", "-", "_"], Equal: ["=", "+", "=", "+"], Backspace: ["Backspace", "Backspace", "Backspace", "Backspace"]},
  rowSecond: {Tab: ["Tab", "Tab", "Tab", "Tab"], KeyQ: ["q", "Q", "й", "Й"], KeyW: ["w", "W", "ц", "Ц"], KeyE: ["e", "E", "у", "У"], KeyR: ["r", "R", "к", "К"], KeyT: ["t", "T", "е", "Е"], KeyY: ["y", "Y", "н", "Н"], KeyU: ["u", "U", "г", "Г"], KeyI: ["i", "I", "ш", "Ш"], KeyO: ["o", "O", "щ", "Щ"], KeyP: ["p", "P", "з", "З"], BracketLeft: ["[", "{", "х", "Х"], BracketRight: ["]", "}", "ъ", "Ъ"], Backslash: ["\\", "|", "\\", "/"]},
  rowThird: {CapsLock: ["CapsLock", "CapsLock", "CapsLock", "CapsLock"], KeyA: ["a", "A", "ф", "Ф"], KeyS: ["s", "S", "ы", "Ы"], KeyD: ["d", "D", "в", "В"], KeyF: ["f", "F", "а", "А"], KeyG: ["g", "G", "п", "П"], KeyH: ["h", "H", "р", "Р"], KeyJ: ["j", "J", "о", "О"], KeyK: ["k", "K", "л", "Л"], KeyL: ["l", "L", "д", "Д"], Semicolon: [";", ":", "ж", "Ж"], Quote: ["'", "\"", "э", "Э"], Enter: ["Enter", "Enter", "Enter", "Enter"]},
  rowFourth: {ShiftLeft: ["Shift", "Shift", "Shift", "Shift"], KeyZ: ["z", "Z", "я", "Я"], KeyX: ["x", "X", "ч", "Ч"], KeyC: ["c", "C", "с", "С"], KeyV: ["v", "V", "м", "М"], KeyB: ["b", "B", "и", "И"], KeyN: ["n", "N", "т", "Т"], KeyM: ["m", "M", "ь", "Ь"], Comma: [",", "<", "б", "Б"], Period: [".", ">", "ю", "Ю"], Slash: ["/", "?", ".", ","], ArrowUp: ["AU", "AU", "AU", "AU"], ShiftRight: ["Shift", "Shift", "Shift", "Shift"]},
  rowFifth: {ControlLeft: ["Ctrl", "Ctrl", "Ctrl", "Ctrl"], MetaLeft: ["Win", "Win", "Win", "Win"], AltLeft: ["Alt", "Alt", "Alt", "Alt"], Space: ["", "", "", ""], AltRight: ["Alt", "Alt", "Alt", "Alt"], ControlRight: ["Ctrl", "Ctrl", "Ctrl", "Ctrl"], ArrowLeft: ["AL", "AL", "AL", "AL"], ArrowDown: ["AD", "AD", "AD", "AD"], ArrowRight: ["AR", "AR", "AR", "AR"]}
}

document.onkeypress = (event) => {
  console.log(event.code);
}

for (let row in keyBoard) {
  let div = document.createElement("div");
  div.className = "row " + `${row}`;
  document.querySelector(".wrapper").append(div);
  for (let keys in keyBoard[row]) {
    let div = document.createElement("div");
    let spanEng = document.createElement("span");
    let spanRus = document.createElement("span");
    div.className = "key " + `${keys}`;
    spanEng.className = "eng";
    spanRus.className = "rus hidden";
    document.querySelector("." + `${row}`).append(div);
    document.querySelector("." + `${keys}`).append(spanEng);
    document.querySelector("." + `${keys}`).append(spanRus);
    for (let i = 0; i < keyBoard[row][keys].length; i++) {
      let span = document.createElement("span");
      span.append(keyBoard[row][keys][i]);
      if (i === 0 || i === 1) {
        document.querySelector("." + `${keys}` + " .eng").append(span);
      } else {
        document.querySelector("." + `${keys}` + " .rus").append(span);
      }
    }
  }
}

document.addEventListener('keydown', function(event) {
  document.querySelector("." + event.code).classList.add("bg");
});

document.addEventListener('keyup', function(event) {
  document.querySelector("." + event.code).classList.remove("bg");
});