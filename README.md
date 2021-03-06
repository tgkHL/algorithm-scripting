# algorithm-scripting
一些JavaScript算法练习

[TOC]

### 翻转字符串

```javascript
function reverseString (str) {
    var arr = str.split('');
    str = arr.reverse().join('');
    return str;
}
```

### 求一个数的阶乘

```javascript
function factorialize(num) {
    if(num === 0) return 1;
    return num * factorialize(num - 1);
}
```

### 判断是否是回文

```javascript
function isPalindrome(str) {
    // 如果一个字符串忽略标点符号、大小写和空格，
    // 正着读和反着读一模一样，
    // 那么这个字符串就是palindrome(回文)。
    var flag = true;
    str = str.replace(/\W/g, '').toLowerCase();
    for(var i = 0, j = str.length-1; i < j; i++, j--) {
        if(str.charAt(i) !== str.charAt(j)) {
            flag = false;
            break;
        }
    }
    return flag;
}
```

### 找到最长的单词长度

```javascript
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
```

### 单词首字母大写

```javascript
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
```

### 获取子数组最大数字，并组成新数组

```javascript
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
```

### 检查字符串是否以指定字符串结尾

```javascript
function confirmEnding(str, target) {
    var index = str.length - target.length;
    return str.substr(index) === target ? true : false;
}
```

### 重复字符串

```javascript
function repeat(str, num) {
    if(num < 0) return '';
    var result = '';
    for(var i = 0; i < num; i++) {
        result += str;
    }
    return result;
}
```

### 截断字符串
```javascript
function truncate(str, num) {
    if(num >= str.length) return str;
    return str.slice(0, num > 3 ? num-3 : num) + '...';
}
```

