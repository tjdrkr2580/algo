function solution(dartResult) {
    let answer = [];
    let word = '';
    
    for(let dart of dartResult) {
        if(dart.match(/[0-9]/g)) {
            word += dart;
        }
        else if(dart === 'S') {
            answer.push(Math.pow(Number(word), 1));
            word = '';
        }
        else if(dart === 'D') {
            answer.push(Math.pow(Number(word), 2));
            word = '';
        }
        else if(dart === 'T') {
            answer.push(Math.pow(Number(word), 3));
            word = '';
        }
        else if(dart === '*') {
            if(answer.length > 1) {
                answer[answer.length - 1] *= 2;
                answer[answer.length - 2] *= 2;
            }
            else {
                answer[answer.length - 1] *= 2;
            }
        }
        else if(dart === '#') {
              answer[answer.length - 1] *= -1;
        }
    }
    return answer.reduce((a,b) => a + b, 0);
}