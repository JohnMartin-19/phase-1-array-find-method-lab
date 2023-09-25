// code your solution here
const obj = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
]

function superBowlWin(obj){
    for(item in obj){
        if(item.result === 'W'){
            console.log(item)
        }
    }
    
};
obj.find(superBowlWin)