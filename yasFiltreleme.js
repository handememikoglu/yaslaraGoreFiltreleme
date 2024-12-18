//Yaşlara Göre Filtreleme
const ages = [
{
    name: "Hande",
    age: 26
},
{
    name: "Yağmur",
    age: 2
},
{
    name:"Efe",
    age: 14
},
{
    name: "Ayla",
    age: 59
}
];

function ageFilter() {
    const sum = ages.filter(newAge => newAge.age >= 18);
    if(sum.length >= 1){
        console.log(sum);
        return;
    }else{
        console.log("18 yaşından büyük kimse yok");
        return;
        
    }
    
    
}
ageFilter();