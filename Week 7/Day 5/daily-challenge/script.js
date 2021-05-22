
function anagrams(str1, str2) {

    let regex = /[^\w]/g
    str1 = str1.replace(regex, '').toLowerCase()
    str2 = str2.replace(regex, '').toLowerCase()

    let sortedStr1 = str1.split('').sort().join('')
    let sortedStr2 = str2.split('').sort().join('')

    return sortedStr1 === sortedStr2}

console.log(anagrams('silent', 'listen'))
