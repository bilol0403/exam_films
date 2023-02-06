const exe = alert('uchinchi masala console.log da')


const arrayResult = (arr) => {
    let result = [];
    for(let i in arr){
        if(arr[i] < 0){
            result.push(arr[i]);
        }
    }
    console.log(result);
}

arrayResult([3, 2, -1, -3, -4, -4 , 5 , -6])
