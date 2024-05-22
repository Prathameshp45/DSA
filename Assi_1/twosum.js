var nums = [4,7,25,11];

var target = 18;

function twoSum(nums, target) {
  for (var i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      var addition = nums[i] + nums[j];
      console.log(addition);
      if (target === addition) {
       
        return [i, j];
      }
    }
  }
}
var output = twoSum(nums, target);
console.log(output);