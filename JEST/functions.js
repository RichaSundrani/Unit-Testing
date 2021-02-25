const { default: axios } = require("axios");

const functions = {
    add: (n1, n2) => n1 + n2,
    isNull: () => null,
    checkValue: (x) => x,
    createUser: () => {
        const user = {
            firstName: 'Richard',
            lastName: 'Parkar'
        }
        return user;
    },
    fetchUser: () => axios.get('https://jsonplaceholder.typicode.com/users/7').then(res => res.data).catch(err => err)

}

module.exports = functions;