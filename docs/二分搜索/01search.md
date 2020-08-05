### 查找特定的数

查找特定的数比较简单，没有很多需要注意的点和繁琐的变换，只需要记住while中是<=，当left大于right时跳出循环。一般复杂的题目用到的是二分搜索

#### 最常用模板

```cpp
int left = 0,right = nums.size() - 1;
while(left <= right){
  int mid = left + (right - left) / 2;//防止越界
  if(nums[mid] == target)
    return mid;
  if(mid > target)
    right = mid - 1;
  else
    left = mid + 1;
}
return -1;
```

**要点**:

1. `left > right`时跳出循环。
2. 自带函数`binary_search`，但只能返回bool值不能返回位置，如果要返回位置可以利用二分插入算法，如使用`lower_bound()`再判断迭代器所指的值是否与目标值相同。