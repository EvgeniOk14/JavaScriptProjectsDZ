function filterVowels(word)
{
    let vowels = 'aeiouAEIOU';
    const vowelCount = word.split('').filter(letter => vowels.includes(letter)).length;
    return vowelCount;
}