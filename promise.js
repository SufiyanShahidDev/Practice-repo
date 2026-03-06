const fetchData = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("Data received from server");
    }, 2000);

});

// fetchData
//     .then(data => console.log(data))
//     .catch(err => console.log(err));