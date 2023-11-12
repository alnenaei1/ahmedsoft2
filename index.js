let users =[
    {name:"ahmed",age:28},
    {name:"aly",age:20},
    {name:"omar",age:25},
    {name:"osama",age:45},
]
let age =[]
users.forEach(()=>{
    age = users.filter((aging)=>aging.age>=28)
})
age.forEach(e=>{
    console.log(e.name,e.age)
})