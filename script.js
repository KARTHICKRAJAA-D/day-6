class person{
    constructor(name,age,gender,bloodgroup){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.bloodgroup = bloodgroup;
    }
}
var person1 = new person('karthick','28','M','o+ve');
console.log(person1);


class uber{
    constructor(distance,price){
        this.distance = distance;
        this.price = price;

       this.price = ()=>{
            return distance*price;
       }
    }
    }
var uberprice = new uber(5,30);
console.log(uberprice.price());