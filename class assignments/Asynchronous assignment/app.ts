//                     //Question 1:

async function fetchGreeting(greeting:string) {
    setTimeout(()=>{
        console.log(greeting);
        
    },2000)
}
fetchGreeting("Assalam-o-Alaikum")


// console.log("--------------------------------------------------------------");

                    //Question# 2

async function simulateTask() {
    console.log("Task started");
    
    setTimeout(() => {
        console.log("task Completed");
    }, 1000);
}                    

simulateTask()

// console.log("--------------------------------------------------------------");

                   // Question# 3

async function fetchData() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Data fetched successfully!");
            
        }, 1000);
    })
}     
fetchData().then((data)=>console.log(data));             

//  console.log("--------------------------------------------------------------");

                    //Question# 4

async function fetchWithError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random()<0.5) {
                resolve("Data fetched successfully!")
            }
            else{
                reject("Data fetch failed")
            }
        }, 1000);
    })
}     
fetchWithError().then((data)=>console.log(data)).catch((error)=>console.log(error))               

//  console.log("--------------------------------------------------------------");

                    //Question# 5
function fetchData1() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("Fetching Data");
            
            resolve("Data fetched successfully")
        },1000)
})
}

function processData(){
    return new Promise((resolve,reject)=>{
setTimeout(()=>{
    console.log("Processing data");

    resolve("Data processed successfully")
},2000)
    })
}

function executeSequentially(){
    fetchData1().then((data)=>console.log(data))
    processData().then((data)=>console.log(data))
}
executeSequentially();