/**
 * 翻转一个字符串
 * @param  原始字符串
 * @return 翻转后的字符串
 */
function reverseString (str) {
    var arr = str.split('');
    str = arr.reverse().join('');
    return str;
}

/**
 * 求一个数的阶乘
 * @param  整数num
 * @return 阶乘结果!num
 */
function factorialize(num) {
    if(num === 0) return 1;
    return num * factorialize(num - 1);
}

/**
 * 判断一个字符串是否是回文
 * @param  字符串str
 * @return 是回文返回true，否则false
 */
function isPalindrome(str) {
    // 如果一个字符串忽略标点符号、大小写和空格，
    // 正着读和反着读一模一样，
    // 那么这个字符串就是palindrome(回文)。
    var flag = true;
    str = str.replace(/[\W_]/g, '').toLowerCase();
    for(var i = 0, j = str.length-1; i < j; i++, j--) {
        if(str.charAt(i) !== str.charAt(j)) {
            flag = false;
            break;
        }
    }
    return flag;
}

var result = isPalindrome('0_0 (: /-\ :) 0-0');
console.log(result);