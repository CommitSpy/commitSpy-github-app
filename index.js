/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Application} app
 */
var _ = require('lodash')
module.exports = app => {
  // Your code here
  app.log('Yay, the app was loaded!')


  app.on('push', async context => {
    let repository = {
      id: null,
      node_id: null,
      name: null,
      full_name: null,
      private: null
    }

    let repo_result = _.pick(context.payload.repository, _.keys(repository));


    let model = {
      sender: null,
      installation: null,
      commits: null
    };
    let result = _.pick(context.payload, _.keys(model));
    result.repository = repo_result
    // console.log(result)
    app.log(result);
    //send to microservice


  })

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
}
