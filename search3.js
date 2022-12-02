const mas = [
    [1,2,4],
    [3,6,9],
    [10,13,15,18],
    [21,56,89,90]
]; 
function lSearch2(mas, key)
{
    for(let i=0; i<mas.length; i++)
            for(let j=0; j<mas[i].length; j++){
                if(mas[i][j]===key){
            return "["+i+"]["+j+"]"
        } }
        return -1
        } 
        
    console.log(lSearch2(mas,21))