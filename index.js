/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Application} app
 */
var _ = require('lodash');
var axios = require('axios');
module.exports = app => {
  // Your code here
  app.log('Yay, the app was loaded!')


  app.on('push', async context => {

    let model = {
      repository: null,
      sender: null,
      installation: null,
      commits: null
    };
    let result = _.pick(context.payload, _.keys(model));
    // result.repository = repo_result
    // console.log(result)
    app.log(result);
    //send to microservice

    axios.post('https://smee.io/yrt37hGR4UhaKry', result)
      .then(() => { console.log("sent") })
  })
}
