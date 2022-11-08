//The Answer

/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[\W_]/g,"");
        let left = 0 ; 
        let right = s.length -1

        while(left<right){
            if (s[left] !== s[right])
                {
                    return false
                }
                right--
                left++
        }
                return true
};