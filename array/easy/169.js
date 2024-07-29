
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    
  var a = []
  for(let i = 0 ; i < nums.length ; i++){
      a.push(1)
  }
  for(let i = 0 ; i < nums.length ; i++){
      if(a[i] !== 0){
          for(let j = i+1; j < nums.length;j++){
          if(nums[i] === nums[j] && a[j] !== 0){
              a[i]++
              a[j] = 0
          }   
      }
      }
  }
  var max = a[0]
  var maxIndex = 0
  for(let i = 1 ; i < nums.length; i++){
      if(a[i] > max){
          max = nums[i]
          maxIndex = i
      }
  }
  return nums[maxIndex]
  
  return max
};