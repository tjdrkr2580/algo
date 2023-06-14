function solution(a, b, n) {
    let coke = 0;
    while(n >= a) {
        //n을 a로 나누고 받는 콜라b
        coke += Math.floor(n/a)*b
        //위와 같은 수식이지만 콜라가 남는 병은 n으로 n%a;
        n = Math.floor(n/a)*b + n%a;
    }
    return coke;
}