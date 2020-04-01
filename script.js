let div = document.createElement("div");
div.classList.add("wrapper");
document.querySelector("body").append(div);

let keyBoard = {
  rowFirst: [["`", "~"], ["1", "!"], ["2", "@"], ["3", "#"], ["4", "$"], ["5", "%"], ["6", "^"], ["7", "&"], ["8", "*"], ["9", "("], ["0", ")"], ["-", "_"], ["=", "+"], ["Backspace", "Backspace"]],
  rowSecond: [["Tab", "Tab"], ["q", "Q"], ["w", "W"], ["e", "E"], ["r", "R"], ["t", "T"], ["y", "Y"], ["u", "U"], ["i", "I"], ["o", "O"], ["p", "P"], ["[", "{"], ["]", "}"], ["\\", "|"]],
  rowThird: [["CapsLock", "CapsLock"], ["a", "A"], ["s", "S"], ["d", "D"], ["f", "F"], ["g", "G"], ["h", "H"], ["j", "J"], ["k", "K"], ["l", "L"], [";", ":"], ["'", "\""], ["Enter", "Enter"]],
  rowFourth: [["Shift", "Shift"], ["z", "Z"], ["x", "X"], ["c", "C"], ["v", "V"], ["b", "B"], ["n", "N"], ["m", "M"], [",", "<"], [".", ">"], ["/", "?"], ["AU", "AU"], ["Shift", "Shift"]],
  rowFifth: [["Ctrl", "Ctrl"], ["Win", "Win"], ["Alt", "Alt"], ["", ""], ["Alt", "Alt"], ["Ctrl", "Ctrl"], ["AL", "AL"], ["AD", "AD"], ["AR", "AR"]]
}

for (let row in keyBoard) {
  const getKeyBoardRow = (KeyBoardRow) => {
    let result = [];
    KeyBoardRow.forEach((elem) => {
      let div = document.createElement("div");
      let span = document.createElement("span");
      div.classList.add("key");
      span.classList.add("eng");
      let resultKey = [];
      elem.forEach((key) => {
        let span = document.createElement("span");
        span.append(key);
        resultKey.push(span);
      });
      resultKey.forEach((el) => {
        span.append(el);
      })
      div.append(span);
      result.push(div);
    });
    return result;
  }
  let div = document.createElement("div");
  div.classList.add(`${row}`);
  document.querySelector(".wrapper").append(div);
  document.querySelector("." + `${row}`).append(...getKeyBoardRow(keyBoard[row]));
}