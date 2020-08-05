## 查找满足特定条件的数

在查找满足条件时，写一个二分搜索有几个要点：

1. 退出循环的条件是`left > right`还是`left = right`。
2. 当`num[mid]==target`时，更新左边界还是右边界。
3. 边界更新时是否需要包含`mid`，如果需要，是哪个边界需要。

下面通过一个`lower_bound`及`upper_bound`的实现思路来模拟一个书写过程。

### lower_bound

lower_bound查找的是第一个大于等于target的位置，考虑上述的`2`和`3`。

2. 由于查找的是**第一个大于等于target的位置**,当`num[mid]==target`时，此时位置的数等于target，但不一定是**第一个**等于target的位置，所以更新右边界。

3. 先考虑右边界的更新情况:当`num[mid]>=target`(上一条解释了为什么有=)更新右边界，由于查找的是**第一个大于等于target的位置**，即找到的值应该**大于等于target**,所以当`num[mid]>=target`时，`num[mid]`有可能就是我们要查找的target，所以更新右边界需要包含mid，即`right = mid`而不是`right = mid - 1`；

   再考虑左边界的更新情况:当`num[mid]<target`更新左边界，由于`num[mid]`比target小，可以判断`num[mid]`一定不是target，所以更新边界时不需要包含`mid`，即`left=num[mid]+1`。

最后我们考虑第一条，这个我还没找到什么规律，但是我猜普遍地如果有一个边界更新时要包含`mid`的话，最终left不可能大于right,所以退出循环的条件应该是`left=right`。

这三条想清楚就可以写了。

```cpp
int left = 0,right = nums.size();//有可能插到最末尾，所以不能-1.
while(left < right){
  int mid = left + (right - left)/2;
  if(nums[mid] >= target)
    right = mid;
  else
    left = mid + 1;
}
return left;
```



> 根据上面的思考方法，请wch同学写出upper_bound的实现



### upper_bound

upper_bound查找的是第一个大于target的位置。

```

```

