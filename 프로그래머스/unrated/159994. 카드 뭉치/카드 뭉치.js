function solution(cards1, cards2, goal) {
    let in1 = 0;
    let in2 = 0;
    let in3 = 0;
    while(in3 < goal.length) {
        if(in1 < cards1.length && cards1[in1] === goal[in3]) in1++;
        else if(in2 < cards2.length && cards2[in2] === goal[in3]) in2++;
        else return 'No';
        in3++;
    }
    return "Yes";
}