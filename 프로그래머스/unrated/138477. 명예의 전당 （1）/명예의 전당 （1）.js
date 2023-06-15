function solution(k, score) {
    var answer = [];
    let arrK = [];
    for(let i = 0 ; i < score.length ; i++ ) {
            arrK.push(score[i])
            arrK.sort((a,b) => b-a);    
        if(k < arrK.length) arrK.pop();
        answer.push(arrK[arrK.length - 1]);
    }

    return answer;
}