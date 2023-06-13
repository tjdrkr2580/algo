function solution(food) {
    let food_arr = [];
    let answer = [];
    food = food.map((element) => Math.floor((element / 2)));
    food.map((element, index) => {
        if(element) {
            for(let i = 0 ; i < element ; i++) {
                food_arr.push(index);
            }
        }
    })
    answer.push(...food_arr, 0, ...food_arr.reverse())
    return answer.join("")
}