function solution(s) {
    var answer = [];
    let length = s.length;
    for(let i = 0 ; i < length ; i++) {
        let sliceS = s.slice(0, i + 1);
        let lastChar = sliceS.substr(i);
        sliceS = sliceS.substring(0, sliceS.length - 1);
        if(sliceS.lastIndexOf(lastChar) !== -1) {
            answer.push(i - sliceS.lastIndexOf(lastChar));
        }
        else {
            answer.push(-1);    
        }
    }
    return answer;
}