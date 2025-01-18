/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    let res = arr.map(x=>{
        if(x.profession=="developer"){
            return x;
        }else{
            return undefined;
        }
    }).filter(x => x !== undefined);
    console.log(res);
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach((val)=>{
        if(val.profession=="developer"){
            console.log(val);
        }
    })
  }
  
  function addData() {
    //Write your code here, just console.log
    employee = {id: 4,name: "susan",age: "20",profession: "intern" };
    arr.push(employee);
    console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    let res = arr.filter(x => x.profession !== "admin");
    console.log(res);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let arr1 = [
        { id: 5, name: "Rahil", age: "26", profession: "associate" },
        { id: 6, name: "Rafique", age: "34", profession: "sales" },
        { id: 7, name: "Alam", age: "36", profession: "hr" },
      ];
    let combined = arr.concat(arr1);
    console.log(combined);
  }