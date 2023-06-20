function solution(number, limit, power) {
    let totalWeight = 0; // 필요한 철의 총 무게를 저장할 변수

    // 각 기사에 대해
    for (let i = 1; i <= number; i++) {
        let factors = getFactors(i); // 기사의 번호의 약수를 구함
        let attackPower = factors.length; // 약수의 개수가 공격력이 됨

        // 공격력이 제한수치보다 크면 power를 사용
        if (attackPower > limit) {
            attackPower = power;
        }

        totalWeight += attackPower; // 총 무게에 공격력을 더함 (공격력 1당 철 1kg 필요)
    }

    return totalWeight; // 필요한 철의 총 무게를 반환
}

function getFactors(num) {
    let factors = [];

    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            factors.push(i);
            if (num / i !== i) {
                factors.push(num / i);
            }
        }
    }

    return factors;
}