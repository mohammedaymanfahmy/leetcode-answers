var reverseWords = function (s) {
  x = s.split(" ");
  let arr = [];
  for (let i = 0; i < x.length; i++) {
    if (x[i] == "") {
      continue;
    } else {
      arr.push(x[i] + " ");
    }
  }
  arr.reverse();
  arr2 = arr.join("").trim();
  return arr2;
};

reverseWords("  hello   world  ");
