const solution = (str) => {
  const arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "A") arr[i] = "#";
  }
  return arr.join("");
};

console.log(solution("BANANA"));
