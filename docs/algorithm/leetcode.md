# leetcode记录



## 常见题目

**1. 两数之和**（简单）

> 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
>
> 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍
>
> 示例：给定 nums = [2, 7, 11, 15], target = 9
>
> 因为 nums[0] + nums[1] = 2 + 7 = 9
> 所以返回 [0, 1]



```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = {};
    for(let i=0; i<nums.length; i++){
        let temp = target - nums[i];
        if(map[temp] != undefined){
           return [map[temp],i];
        }
        map[nums[i]] = i;
    }
};
```



```java
class Solution {
    public int[] twoSum(int[] nums, int target) {
		Map<Integer,Integer> map = new HashMap();
        for(int i=0; i<nums.length; i++){
            int temp = target - nums[i];
            if(map.containsKey(temp)){
                return new int[]{map.get(temp),i};
            }
            map.put(nums[i], i);
        }
        throw new IllegalArgumentException("No two sum solution");
    }

}
```



**15.三数相加**

> 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
>
> 注意：答案中不可以包含重复的三元组。
>
> 示例：
>
> 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
>
> 满足要求的三元组集合为：
> [
>   [-1, 0, 1],
>   [-1, -1, 2]
> ]
>
> 来源：力扣（LeetCode）
> 链接：https://leetcode-cn.com/problems/3sum
> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。





```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let res = [];
    nums.sort((a,b) => a-b);
    for(let i=0; i <= nums.length-2 ;i++){
        //如果数组首个对象都大于0则不可能相加等于0
        if(nums[i] > 0) break;
        // 如果游标i对象和上一个一样，避免重复应该跳过
        if(i >0 && nums[i] === nums[i-1]) continue;
        let j = i+1;
        let k = nums.length -1;
        while(j < k){
            let sum = nums[i] + nums[j] + nums[k]
            if (sum < 0) {
                while( j<k && nums[j] === nums[++j]){}
            } else if (sum > 0){
                while( j<k && nums[k] === nums[--k]){}
            }else{
                res.push([nums[i],nums[j],nums[k]])
                while( j<k && nums[j] === nums[++j]){}
                while( j<k && nums[k] === nums[--k]){}
            }
        }


    }
    return res
};
```



```java
class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        //排序
    	Arrays.sort(nums);
        List<List<Integer>> res = new ArrayList();
        for(int i=0; i < nums.length -2; i++ ){
            if(nums[i] > 0) {
                break;
            }
            if(i > 0 && nums[i] == nums[i-1]){
                continue;
            }
            //双指针逼近
            int j = i+1;
            int k = nums.length -1;
            while(j < k){
                int sum = nums[i] + nums[j] + nums[k];
                if (sum > 0){
                    while(j < k && nums[k] == nums[--k]){}
                }else if(sum < 0){
  					while(j < k && nums[j] == nums[++j]){}
                }else{
					res.add(new ArrayList<Integer>(Arrays.asList(nums[i], nums[j], nums[k])));
                    while(j < k && nums[k] == nums[--k]){}
                    while(j < k && nums[j] == nums[++j]){}
                }
            }

        }
        return res;
        
        
  
    }
}
```



## 数据结构

### 链表

**21. 合并两个有序链表**（简单）

> 将两个升序链表合并为一个新的 **升序** 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的
>
> ```
> 输入：1->2->4, 1->3->4
> 输出：1->1->2->3->4->4
> ```

```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    
     public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
         if(l1 ==null){
             return l2;
         }
         if(l2 == null){
             return l1;
         }
         if(l1.val < l2.val){
             l1.next = mergeTwoLists(l1.next,l2);
             return l1;
         }else{
             l2.next = mergeTwoLists(l1,l2.next);
             return l2;
         }
         
     }
}
```

