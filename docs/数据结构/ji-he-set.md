### 集合set

> include &lt;set&gt;

set和map一样是用平衡二叉树构造的，所以和map一样插入和查找极快。自动以从下到达顺序排序，支持以下构造方法：

```cpp
set<int,greater<int>>s1;
```

其它的方法大致和map一样。



### 哈希集unordered_set

>  include<unordered_set>

unordered_set和set不同的是底层实现，是一个哈希表。unordered_set在哈希函数重复度低的情况下查找会比树快。

```cpp
//查找9是否出现
unordered_set<int>hashset;
hashset.count(9)//不存在返回0
```

