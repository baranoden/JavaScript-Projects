
//Explaination is very simple, getting
//Max of n but lesser then k
//Hackerrank's problem explaination style is poorly bad. (makes problem even harder)



function getMaxLessThanK(n,k) {
    var bit=0;
    for(let i=1;i<=n;i++) {
        for(let j=i+1;j<=n;j++) {
            var x = i&j;
            if(x > bit & x < k){
                bit = x;
            }
        }
    }
    return(bit);
}