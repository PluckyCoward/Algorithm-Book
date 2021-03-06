> \#include&lt;vector&gt;

---

vector是STL提供的一个容器，能够存放任意类型的动态数组，能够增加和压缩数据。

### 初始化

```cpp
vector<int> v = vector<int>(len)
vector<int> v = vector<int>(len,0)
```

### 静态方法

**.push\_back\(\)** 压如一个数据(c++17后提供的emplace_back()会比push快)

**.pop\_back\(\)** 删除末尾数据

**.assign\(\)** 给向量赋值

```cpp
v2.assign(v1.begin(),v1.end());        //把v1赋给v2
v2.assign(20,0);                        //把20个0赋给v2
```

**.begin\(\)** 返回一个指向第一个数据的迭代器指针

**.end\(\)**  返回一个指向最后一个数据的下一个迭代器指针

**.front\(\)** 返回第一个数据

**.back\(\)**  返回最后一个数据

**.empty\(\)** 是否为空

**.size\(\)**  返回数据个数

**.insert\(\)**  插入数据

```cpp
v.insert(v.begin()+8,20);        //在v中的第8位插入20
```

**.clear\(\)** 清空

**.resize\(\)** 重新定义大小

**.erase\(\)**  删除指定迭代器位置的数据

