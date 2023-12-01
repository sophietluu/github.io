let HR = {
  employees: [
    {
      firstName: "Sam",
      department: "Tech",
      designation: "Manager",
      salary: 40000,
      raiseEligible: true,
    },
    {
      firstName: "Mary",
      department: "Finance",
      designation: "Trainee",
      salary: 18500,
      raiseEligible: true,
    },
    {
      firstName: "Bill",
      department: "HR",
      designation: "Executive",
      salary: 21200,
      raiseEligible: false,
    },
  ],
};

let company = {
    companyInfo: [
      {
        companyName: "Tech Stars",
        website: "www.techstars.site",
        employees: HR["employees"],
      },
    ],
  };

// Problem 1
console.log(HR["employees"]);

// Problem 2
console.log(company["companyInfo"]);

// Problem 3
HR["employees"].push(
    {
    firstName: "Anna",
    department: "Tech",
    designation: "Executive",
    salary: 25600,
    raiseEligible: false
});
console.log(company["companyInfo"][0]["employees"][HR["employees"].length -1]);

// Problem 4
let totalSalary = 0;
for(let i = 0; i < HR["employees"].length; i++){
    totalSalary += HR["employees"][i].salary;
}
console.log("Total salary for all company employees: " + totalSalary);

// Problem 5
function giveRaise() {
    for(let i = 0; i < HR['employees'].length; i++) {
        if(HR["employees"][i]['raiseEligible'] == true){
            HR["employees"][i]["salary"] += HR["employees"][i]["salary"] * 1.1; 
            HR["employees"][i]['raiseEligible'] = false;
        }
    }
    console.log(HR['employees'])
}
giveRaise()

// Problem 6
const wfh = ['Anna', 'Sam'];
for(let i = 0; i < HR['employees'].length; i++) {
    if (wfh.includes(HR["employees"][i]["firstName"])){
        HR["employees"][i]["wfh"] = true;
    }
    else{
        HR["employees"][i]["wfh"] = false;
    }
}
console.log(HR["employees"])