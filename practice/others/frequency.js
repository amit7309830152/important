function getFrequency(string) {
    allChar = string.split('')
    freq = {}
    for (let i = 0; i < string.length; i++) {
        const element = string.charAt(i);
        if (element == ' ') {
            continue
        }
        if (freq[element]) {
            freq[element]++
        } else {
            freq[element] = 1
        }

    }
    return freq
};

console.log(getFrequency('amit kumar'));