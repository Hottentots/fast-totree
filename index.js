Array.prototype.toTree = function(
config = {

    key:'id',
    pid:'parentId',
    chidren:'chidren',
    value:'0'
})
{
    
    let tree    = [];
    let relation = {}; relation[config.value] = [];

    let count   = this.length;

    for(let i = 0;i < count;i++)
    {
        let key =this[i][config.pid];

        if(!relation[key])
        {

            relation[key] = [];
        } 

        relation[key].push(i);
    }

    for(let i = 0;i < count;i++)
    {
        let key = this[i][config.key];

        if(relation[key])
        {

            let total = relation[key].length;

            this[i][config.chidren] = [];

            for(let j = 0;j < total;j++)
            {
                this[i][config.chidren].push(this[relation[key][j]]);
            }
        }       
    }
   
    relation[config.value].forEach(element => {
        
        tree.push(this[element]);
    });

    return tree;
}