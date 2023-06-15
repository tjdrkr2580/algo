function solution(name, yearning, photo) {
    let answer = [];
    let hash = {};
    for(let i = 0 ; i < name.length ; i++) {
       hash[name[i]] = yearning[i];
    }
    for(let i = 0 ; i < photo.length ; i++) {
        let sum = 0;
        for(let j = 0 ; j < photo[i].length ; j++) {
            if(hash[photo[i][j]]) sum += hash[photo[i][j]];
        }
        answer.push(sum);
    }
    return answer;
}