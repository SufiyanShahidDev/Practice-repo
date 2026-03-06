
const fetchData = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("Data received from server");
    }, 2000);

});

fetchData
    .then(data => console.log(data))
    .catch(err => console.log(err));

// login Promise

const login = new Promise((resolve, reject) => {
    let password = 1234;

    if(password === 123){
        resolve("Login Successfully")
    }
    else{
        reject("Wrong Password")
    }
}

)

login
    .then(res => console.log(res))
    .catch(err => console.log(err));