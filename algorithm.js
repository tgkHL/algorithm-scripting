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

/**
 * 找到最长单词长度
 * @param  str
 * @return 长度
 */
function findLongestWord(str) {
    var arr = str.split(/\W/),
        longestStr,
        maxLength = 0;
    // console.log(arr);
    for(var i = 0; i < arr.length; i++) {
        if(arr[i].length > maxLength) {
            longestStr = arr[i];
            maxLength = arr[i].length;
        }
    }
    return longestStr.length;
}

/**
 * 单词首字母大写
 * @param  {[type]} str [description]
 * @return {[type]}     [description]
 */
function titleCase(str) {
    var arr = str.toLowerCase().split(/\s+/);
    // console.log(arr)
    for(var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].replace(/^\w/, function(match) {
            return match.toUpperCase();
        });
    }
    str = arr.join(' ');
    return str;
}

/**
 * 将二重数组中的每个子数组中的最大数组成新数组
 * @param  {[type]} arr [description]
 * @return {[type]}     [description]
 */
function largestOfFour(arr) {
    var result = [];
    for(var i = 0; i < arr.length; i++) {
        var maxNum = arr[i][0];
        for(var j = 1; j < arr[i].length; j++) {
            if(arr[i][j] > maxNum) {
                maxNum = arr[i][j];
            }
        }
        result[result.length] = maxNum;
    }
    return result;
}

/**
 * 检查字符串是否以指定字符串结尾
 * @param  {[type]} str    [description]
 * @param  {[type]} target [description]
 * @return {[type]}        [description]
 */
function confirmEnding(str, target) {
    var index = str.length - target.length;
    return str.substr(index) === target ? true : false;
}

// 测试
var result = confirmEnding("Bastian", "an");
console.log(result);