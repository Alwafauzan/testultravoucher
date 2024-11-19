function groupAnagrams(words) {
  const anagramGroups = {};

  for (let i = 0; i < words.length; i++) {
    const sortedWord = sortString(words[i]);

    if (!anagramGroups[sortedWord]) {
      anagramGroups[sortedWord] = [];
    }
    anagramGroups[sortedWord].push(words[i]);
  }

  const result = [];
  for (const key in anagramGroups) {
    result.push(anagramGroups[key]);
  }

  return result;
}

function sortString(str) {
  const charArray = str.split("");
  for (let i = 0; i < charArray.length - 1; i++) {
    for (let j = 0; j < charArray.length - i - 1; j++) {
      if (charArray[j] > charArray[j + 1]) {
        const temp = charArray[j];
        charArray[j] = charArray[j + 1];
        charArray[j + 1] = temp;
      }
    }
  }
  return charArray.join("");
}

// Pengujian
const words = ["cook", "save", "taste", "aves", "vase", "state", "map"];
console.log(groupAnagrams(words));
