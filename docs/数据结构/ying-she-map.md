## 映射MAP

> include\<map>

map中存储着key与value，可以利用key访问到value。一般key为有序数，因为map会自动按照key的值进行从小到大的排序。

### 插入

```cpp
map<int,int>m1;
m1.insert(pair<int,int>(1,3));
m1[2]=3;
```

### 取值

```cpp
int x = m1.first;
int y = m1[2];
```

### 遍历/迭代

```cpp
map<int,int>::iterator it;
for(it = m1.begin();it!=m1.end();it++){
    int x = it->first;
    int y= it->second;
}
```

### 查找

```cpp
it = m1.find(2); //若没有找到，返回m1.end()
m1.count(9)//不存在9的话返回0
```

### 删除

```cpp
map<int,int>::iterator it =v.begin()+5;
m1.erase(it);            
m1.erase(5);        
m1.erase(m1.begin(),m1.end());   //左闭右开
```

### 其它静态方法

**.size\(\)**

.**empty\(\)**

**.clear\(\)**

###unordered_map

> include\<unordered_map>

同unordered_set一样，用哈希实现的map。性质与unordered_set类似。