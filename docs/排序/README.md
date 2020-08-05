## 概览

| 算法     | 最好       | 平均       | 稳定性     | 辅助空间       | 稳定性 |
| -------- | ---------- | ---------- | ---------- | -------------- | ------ |
| 冒泡排序 | $O(n)$     | $O(n^2)$   | $O(n^2)$   | $O(1)$         | 稳定   |
| 选择排序 | $O(n^2)$   | $O(n^2)$   | $O(n^2)$   | $O(1)$         | 稳定   |
| 直接插入 | $O(n)$     | $O(n^2)$   | $O(n^2)$   | $O(1)$         | 稳定   |
| 希尔排序 | $O(nlogn)$ | -          | $O(n^2)$   | $O(1)$         | 不稳定 |
| 堆排序   | $O(nlogn)$ | $O(nlogn)$ | $O(nlogn)$ | $O(1)$         | 不稳定 |
| 快速排序 | $O(nlogn)$ | $O(nlogn)$ | $O(n^2)$   | $O(logn)-O(n)$ | 不稳定 |
| 归并排序 | $O(nlogn)$ | $O(nlogn)$ | $O(nlogn)$ | $O(n)$         | 稳定   |



## 简介

就不一一实现的，仅在后续部分介绍几个有用的，对于一般的能一两句话描述清楚应该面试就够用了。



## 稳定的排序：归并

```cpp
void Merge(int start,int m,int end){
    int acnt = start;
    int bcnt = m+1;
    int cnt = start;
    while (acnt<=m&&bcnt<=end){
        if(a[acnt]<a[bcnt]){
            b[cnt++]=a[acnt++];
        }
        else{
            b[cnt++]=a[bcnt++];
        }
    }
    if(acnt<=m){
        for (int i = acnt; i <=m ; ++i) {
            b[cnt++] = a[i];
        }
    }else if(bcnt<=end){
        for (int i = bcnt; i <=end ; ++i) {
            b[cnt++] = a[i];
        }
    }
    for (int i = start; i <=end ; ++i) {
        a[i] = b[i];
    }

}

void MSort(int start,int end){
    int m;
    if(start==end){
        b[start] = a[start];
    }
    else{
        m = (start+end)/2;
        MSort(start,m);
        MSort(m+1,end);
        Merge(start,m,end);
    }
}

void MergeSort(){
    MSort(x,y);
}
```

<br>

## 自定义排序

```cpp
//sort格式
sort(buf,buf+n,cmp);
//1.降序
bool cmp(int x,int y){
    return x>y;
}
//2.自定义数据结构的排序
struct E{
    int a,b,c;
    char name[100];
}
bool cmp(E x, E y){
    //优先级由高到低
    if(x.a!=y.a)return x.a<y.a;//a属性升序排列
    if(x.b!=y.b)return x.b>y.b;//a属性相同则b属性降序排列
    int tmp = strcmp(x.name,y.name);
    if(!tmp)return tmp < 0;//b属性相同则name属性字典序升序排列
    else return x.c < y.c;//name相同则c属性升序排列
}
//3.重载操作符
struct E{
    int a,b,c;
    char name[100];
    bool operator < (const E &x)const{
        //和上面一样 
        if(x.a!=y.a)return x.a<y.a;
        if(x.b!=y.b)return x.b>y.b;
        int tmp = strcmp(x.name,y.name);
        if(!tmp)return tmp < 0;
        else return x.c < y.c;
    }
}buf[100]
sort(buf,buf+100)；
```


