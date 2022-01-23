const loadUsers = () => {
    fetch('https://gorest.co.in/public/v1/users')
        .then(res => res.json())
        .then(data => displayUsers(data.data));
};

loadUsers();

const displayUsers = fetchAPI => {
    const usersDiv = document.getElementById('users');
    const users = fetchAPI;

    for (const user of users) {
        console.log(user);
        // const p = document.createElement('p');
        // p.innerHTML = `<b>Name:</b> ${user.name.title} ${user.name.first} ${user.name.last}, <b>Email:</b> ${user.email}`;
        // usersDiv.appendChild(p);
    }
}