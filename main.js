// Exercise 1

let dog_string = 'Hello Max, my name is Dog, and I have purple eyes!'
let dog_names = ['Max', 'HAS', 'PuRple', 'dog']

function findwords(dog_string, dog_names){
    for(let i = 0; i < dog_string.length; i++){
        if(dog_string.includes(dog_names[0])){
            return `Matched ${dog_names[0]}`
        }
        else if(dog_string.includes(dog_names[1])){
            return `Matched ${dog_names[1]}`
        }
        else if(dog_string.includes(dog_names[2])){
            return `Matched ${dog_names[2]}`
        }
        else if(dog_string.includes(dog_names[3])){
            return `Matched ${dog_names[3]}`
        }
        else{
            return 'No Matches'
        }
    }
}
console.log(findwords(dog_string,dog_names))


//  Exercise 2

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
function replaceEvens(arr){
    let newArr = []
    for(let i = 0; i < arr.length; i++ ){
        if(i % 2 == 0){
            newArr.push(arr[i])
            newArr.splice(i,1,'Even Index')     
        }
        else{
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(replaceEvens(arr))
