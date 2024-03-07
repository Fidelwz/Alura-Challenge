const vowels =   ['a', 'e', 'i', 'o', 'u']
// const a = 'ai'
// const e = 'enter'
// const i = 'imes'
// const o = 'ober'
// const u = 'ufat'

const data = document.getElementById('textData');
const encriptarBtn = document.getElementById('encriptarBtn');

encriptarBtn.addEventListener('click', function() {
    

})

function searchLetter(vowels,texts){
    return  vowels.filter((vowel) => {
    return [...vowel].every(match => texts.includes(match))
})}


var texts = 'avcsdafadfe'
const result = searchLetter(vowels,texts)
console.log(result)

