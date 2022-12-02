const mas = [{name:"Aelin", age:19, title:"Queen of Terrasen"}, 
{name:"Rowan", age:325, title:"Prince of Doranelle"},
{name:"Feyre", age:20, title:"High Lady of the Night Court"},
{name:"Rhysand", age:536, title:"High Lord of the Night Court"}]
function lSearch(mas, key)
{
    for(let i=0; i<mas.length; i++){
        if(mas[i].name===key){
            return i;
        }else if(mas[i].age===key){
            return i;
        }else if(mas[i].title===key){
            return i;
        }
    }
    return -1;
        }
    console.log(lSearch(mas,325))