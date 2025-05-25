<<<<<<< HEAD
const Userdata=[
    {id: 1, name:"Prashant", age:20, gender: "Male", hasPassOut: true, occupation:"intern"},
    {id: 2, name:"Shalin", age:20, gender: "Male", hasPassOut: true, occupation:"animator"},
    {id: 3, name:"Jalan", age:23, gender: "Male", hasPassOut: false, occupation:undefined},
    {id: 4, name:"Nirpa", age:19, gender: "Male", hasPassOut: true, occupation:undefined},
    {id: 5, name:"Saphalta", age:20, gender: "Female", hasPassOut: true, occupation:"SSWE"},
    {id: 6, name:"Priyanka", age:19, gender: "Female", hasPassOut: true, occupation:undefined},
    {id: 7, name:"Pewang", age:100, gender: "Male", hasPassOut: false, occupation:undefined}
]

const response={
    status: 200,
    message: "Data fetched successfully",
    data: Userdata
}

const getUserName=()=>{
    const APIStatus=response.status
    if(APIStatus===200){
        const result=response.data
        .filter((user)=>user.occupation)
        .map(user=>user.name)
        return result
    }
}

console.log(getUserName());
=======
console.log("Hello, GitHub!");
console.log("Git change test!");
console.log("changing code")
console.log("learing the js basics")
console.log("very interesting")
console.log("resolving conflict")
console.log("This code is changing")

>>>>>>> c8404c315b65d1cacb8137afb8c9e04e2afcd7ff
