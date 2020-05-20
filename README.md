# fast-totree


## Installation

```bash
$ npm install fast-totree --save
```

## Usage

```js

require('fast-totree');

let data = [

  {id:1,name:'max1',pid:0},
  {id:2,name:'max2',pid:0},
  {id:3,name:'max3',pid:1},
  {id:4,name:'max4',pid:1},
  {id:5,name:'max5',pid:2},
];


let tree = data.toTree('id','pid');//toTree函数包含四个参数，分别是键名=id、父键名=parentId、孩子名=chidren、起始父键值=0

//data.toTree('id','pid','items',0);

/*
 * Output:
 *
 * item 0
 *   item 2 
 *   item 3
 * item 1
 *   item 4
 */
```


## 性能测试
|name|1千条|1万条|10万条|50万|
|:-|:-:|-:|-:|-:|
|fast-totree|1ms|15ms|95ms|450ms|
|array-to-tree|9ms|溢出|溢出|溢出|
|totree|2ms|溢出|溢出|溢出|
|performant-array-to-tree|1ms|10ms|103ms|500ms|
|list-to-tree|26ms|溢出|溢出|溢出|