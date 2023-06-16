function solution(k, m, score) {
    score.sort((a,b) => b-a);
    let result = 0;
    let lastAmount = m - 1;
    for(let i = 0 ; i < Math.floor(score.length / m) ; i ++) {
        result += score[lastAmount] * m;
        lastAmount += m;
    }
    return result;
}