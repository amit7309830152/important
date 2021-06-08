var a = ['amit','sumit', 'senior', 'junior'];
console.log(a[1]);
a.find(ele => {
    console.log(ele);
    if(ele === 'amit')
    return ele;
});



