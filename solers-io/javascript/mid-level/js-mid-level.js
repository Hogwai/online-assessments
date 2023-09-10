function stringSuffix(s) {
  let similarities = 0;

  for (let i = 0; i < s.length; i++) {
    const suffix = s.substring(i);
    const similarity = calculateSimilarity(s, suffix);
    similarities += similarity;
  }

  return similarities;
}

function calculateSimilarity(str1, str2) {
  let count = 0;

  for (let i = 0; i < str1.length && i < str2.length; i++) {
    if (str1[i] === str2[i]) {
      count++;
    } else {
      break;
    }
  }

  return count;
}