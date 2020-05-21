# fast-totree


## Installation

```bash
$ npm install fast-totree --save
```

## Usage

```js

require('fast-totree');

let list = [

  {id:1,name:'max1',parentId:0},
  {id:2,name:'max2',parentId:0},
  {id:3,name:'max3',parentId:1},
  {id:4,name:'max4',parentId:1},
  {id:5,name:'max5',parentId:2},
];


let tree = list.toTree();

//reset the config {_id:1,name:'max',_pid:0}
const config = {

    key:'_id',
    pid:'_pid',        
    chidren:'_chidren',
    value:'0'
}

let tree2 = list.toTree(config);

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
|name|1千条|1万条|10万条|50万条|
|:-|:-:|-:|-:|-:|
|fast-totree|1ms|15ms|95ms|450ms|
|array-to-tree|9ms|溢出|溢出|溢出|
|totree|2ms|溢出|溢出|溢出|
|performant-array-to-tree|1ms|10ms|103ms|500ms|
|list-to-tree|26ms|溢出|溢出|溢出|