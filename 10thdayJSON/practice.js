const person =[
    {
        name: "Jabed",
        Age : 20,
        Skill:"Java"
    },
    {
        name: "fahad",
        Age : 20,
        Skill:"Java"
    },
    {
        name: "kalam",
        Age : 20,
        Skill:"Java"
    },
]

console.log(JSON.stringify(person));



///we mus use template literal and then 
const persons=
    `{
        "employees":[
          {
              "firstName":"John",
               "lastName":"Doe"
            },
          {
              "firstName":"Anna",
               "lastName":"Smith"
            },
          {
              "firstName":"Peter",
           "lastName":"Jones"
        }
        ]   
}`

const obj=JSON.parse(persons);
console.log(obj)



