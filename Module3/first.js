function tokenizeText(input) {
    return input.trim().split(/\s+/);
}

const sampleText = '  привет   мир привет  мир ';
const resultWords = tokenizeText(sampleText);

console.log('Исходная строка:', sampleText);
console.log('Разделённые слова:', resultWords);
