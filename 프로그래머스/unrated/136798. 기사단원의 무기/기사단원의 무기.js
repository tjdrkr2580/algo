function solution(number, limit, power) {
    let answer = 0; // 필요한 철의 총 무게를 저장할 변수

    for (let i = 1; i <= number; i++) {
        let factors = getFactors(i); // 기사의 번호의 약수를 구함
        let powerPoint = factors.length; // 약수의 개수가 공격력이 됨

        if (powerPoint > limit) {
            powerPoint = power;
        }

        answer += powerPoint; // 총 무게에 공격력을 더함 (공격력 1당 철 1kg 필요)
    }

    return answer;
}

function getFactors(num) {
    let factorArr = [];
    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            factorArr.push(i);
            if (num / i !== i) {
                factorArr.push(num / i);
            }
        }
    }
    return factorArr;
}