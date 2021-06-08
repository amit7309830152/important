arr = [0,2,3,4,5,6,7,8];
prime = arr.filter(x => {
    if(x  < 2) 
        return false;
    for(i=2;i<x;i++) {
        if(x%i == 0) 
            return false;
    }
    return true;
})

console.log(prime);