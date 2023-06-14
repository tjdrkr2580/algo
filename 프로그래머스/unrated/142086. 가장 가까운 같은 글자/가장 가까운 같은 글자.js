function solution(s) {
    let answer = new Array(s.length).fill(-1);
    let hash = {};
    for(let i = 0 ; i < s.length ; i++){
        let char = s[i];
        console.log()
        if(char in hash) answer[i] = i - hash[char];
        hash[char] = i;
    }
    return answer;
}