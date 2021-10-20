function getSecondLargest(nums) {

    let max = Math.max(...nums)
    let array = []
    
    


    for (var i=0; i<nums.length; i++) {
        if(nums[i]<max){
            array.push(nums[i])
        }    
           
    } let finalMax = Math.max(...array)
    return finalMax
    

}



getSecondLargest(nums)



