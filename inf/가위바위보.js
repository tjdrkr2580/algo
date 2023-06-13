function solution(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) console.log("D");
    else if (arr1[i] == 1 && arr2[i] == 3) console.log("A");
    else if (arr1[i] == 2 && arr2[i] == 1) console.log("A");
    else if (arr1[i] == 3 && arr2[i] == 2) console.log("A");
    else console.log("B");
  }
}

solution([2, 3, 3, 1, 3], [1, 1, 2, 2, 3]);
