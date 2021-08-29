 str = 'my name is amit';
 // one way
 console.log(str.split(' ').reverse().join().replace(/,/g, ' '))
     // another way
 str = 'my name is amit ';
 let lastSpace = 0
 reverseArr = []
 for (let i = 0; i < str.length; i++) {
     if (str.charAt(i) == ' ') {
         reverseArr.push(str.substring(lastSpace, i))
         lastSpace = i
     }
 }
 console.log(reverseArr.reverse().join().replace(/,/g, ''))