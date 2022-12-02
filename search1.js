const mas = [1,3,5,7,8,99,100]
function lSearch(mas, key)
{
    for(let i=0; i<mas.length; i++){
        if(mas[i]===key){
            return i;
        }}
    return -1;
        }
    console.log(lSearch(mas,5))