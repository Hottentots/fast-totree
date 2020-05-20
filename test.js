require('./index');
function testdata(num)
{
    let data = [];
    for(let i=0;i<num;i++)
    {
        data.push({id:i+1,name:'max'+i,pid:i});
    }
    return data;
}

let data = testdata(500000);

let begin = new Date().getTime();

let tree = data.toTree('id','pid');

console.log(new Date().getTime() - begin);