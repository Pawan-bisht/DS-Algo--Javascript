const move = (arr) => {
    let prev = 0;
    for(let i=0;i< arr.length;i++) {
        if(arr[i] !== 0) {
            //swapping
            let temp = arr[i];
            arr[i] = arr[prev];
            arr[prev] = temp;
            prev++;
        }
    }
    console.log(arr)
}

move([1, 2, 0, 4, 3, 0, 5, 0]);