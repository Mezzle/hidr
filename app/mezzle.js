const axios = require('axios');

module.exports = async (req, res) => {
    const response = await axios.get('http://api.github.com/users/mezzle');

    let state = 'is not';

    if (response.data.hireable) {
        state = 'is';
    }

    const name = response.data.name;

    res.send(`${name} ${state} hireable. Sounds like a bug, you should fix it.`);
};

