let population = 100
let vote_A = new Array(52).fill('A')
let vote_B = new Array(48).fill('B')

sample_list = [...vote_A, ...vote_B]

// a) pick 20 rand numbers from the set
iteration = 0
prob_a = 0
 
while(iteration < 100){
    count_a = 0
    count_b = 0
    while(count_a + count_b < 20){
        var item = sample_list[Math.floor(Math.random()*sample_list.length)]
        if(item == 'A') {
            count_a = count_a + 1
        } else {
            count_b = count_b + 1
        }
    }
    if(count_a > count_b) {
        prob_a += 1
    }
    iteration += 1
}
console.log(prob_a/100);


// b) pick 100 rand numbers from the set  
iteration = 0
prob_a = 0

while(iteration < 100){
    count_a = 0
    count_b = 0
    while(count_a + count_b < 100){
        var item = sample_list[Math.floor(Math.random()*sample_list.length)]
        if(item == 'A') {
            count_a = count_a + 1
        } else {
            count_b = count_b + 1
        }
    }
    if(count_a > count_b) {
        prob_a += 1
    }
    iteration += 1
}
console.log(prob_a/100);

// c) pick 400 rand numbers from the set  
iteration = 0
prob_a = 0

while(iteration < 100){
    count_a = 0
    count_b = 0
    while(count_a + count_b < 400){
        var item = sample_list[Math.floor(Math.random()*sample_list.length)]
        if(item == 'A') {
            count_a = count_a + 1
        } else {
            count_b = count_b + 1
        }
    }
    if(count_a > count_b) {
        prob_a += 1
    }
    iteration += 1
}
console.log(prob_a/100);


// B) 
iteration = 0
prob_a = 0

while(iteration < 100){
    count_a = 0
    count_b = 0
    while(count_a + count_b < 1000){
        var item = sample_list[Math.floor(Math.random()*sample_list.length)]
        if(item == 'A') {
            count_a = count_a + 1
        } else {
            count_b = count_b + 1
        }
    }
    if(count_a > count_b) {
        prob_a += 1
    }
    iteration += 1
}
console.log(prob_a/100);

// C) 
iteration = 0
prob_a = 0
vote_A = new Array(55).fill('A')
vote_B = new Array(45).fill('B')

sample_list = [...vote_A, ...vote_B]

while(iteration < 100){
    count_a = 0
    count_b = 0
    while(count_a + count_b < 200){
        var item = sample_list[Math.floor(Math.random()*sample_list.length)]
        if(item == 'A') {
            count_a = count_a + 1
        } else {
            count_b = count_b + 1
        }
    }
    if(count_a > count_b) {
        prob_a += 1
    }
    iteration += 1
}
console.log(prob_a/100);