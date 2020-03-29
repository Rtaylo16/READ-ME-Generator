const api = {
  function({username}) {
    const queryUrl = `https://api.github.com/users/${username}`;
        axios.get(queryUrl).then(function(response) {
            console.log(response)
        });

  }
};

module.exports = api;
