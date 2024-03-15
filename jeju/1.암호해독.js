const str = '   + -- + - + -   '
+ '   + --- + - +   '
+ '   + -- + - + -   '
+ '   + - + - + - +   ';
console.log(str.replace(/\+/gi, '1')
  .replace(/-/gi, '0')
  .split('   ')
  .filter((v) => v.length !== 0)
  .map((v) => v.replace(/ /gi, ''))
  .map((v) => parseInt(v, 2))
  .map((v) => String.fromCharCode(v))
  .join(''));
