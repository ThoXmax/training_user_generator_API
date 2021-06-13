function randomUser() {
    axios.get('https://randomuser.me/api/')
    .then(function(response) {
        document.getElementById("userName").innerHTML = response.data.results[0].name.last + " " + response.data.results[0].name.first;
        document.getElementById("userImage").src = response.data.results[0].picture.large;
        document.getElementById("userEmail").innerHTML = response.data.results[0].email;
    })
    .catch(function(error) {
        console.log(error);
    });
}

// load page execute
randomUser();