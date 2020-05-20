/**
 * List to Tree O(N)复杂度
 * 
 * <leastcoding@foxmail.com>
 * */
Array.prototype.toTree = function(key = 'id',parentKey = 'parentId',subname = 'chidren',start = '0'){


    let  tree = [];
    let  temp = {'0':[]};

    let length = this.length;

    for(let i=0;i<length;i++)                   
    {   

        let attr =this[i][parentKey] ;

        if(!temp[attr])temp[attr] = [];

        temp[attr].push(i);

        if(attr == start) tree.push(this[i]);
    }

    for(let i=0;i<length;i++)                         
    { 
        let attr = this[i][key];

        if(temp[attr]){

            let count = temp[attr].length;

            this[i][subname] = [];

            for(let j=0;j<count;j++)
            {
                this[i][subname].push(this[temp[attr][j]]);
            }
        }       
    }
    
    return tree;
}