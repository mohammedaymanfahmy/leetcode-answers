/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  myPal = x.toString().split("");
  left = 0;
  right = myPal.length - 1;
  for (let i = 0; i < myPal.length; i++) {
    if (myPal[left] != myPal[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
