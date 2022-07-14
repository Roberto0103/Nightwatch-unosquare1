

var util = require('util');
var events = require('events');

function apiPost () {}
util.inherits(apiPost, events.EventEmitter);

apiPost.prototype.command = function (apiUrl, postBody, postHeaders, postAuth, success) {
    var request = require("request");

    var options = {
        uri: apiUrl,
        method: "POST",
        json: postBody
    };

    if (postHeaders !== undefined) {
        options.headers = postHeaders;
    }
    if (postAuth !== undefined) {
        options.auth = postAuth;
    }

    request(options, function (error, response) {
        if (error) {
            console.log(error);
            return;
        }

        success(response);
        this.emit('complete');
    }.bind(this));
};

var validateContactUs = {
    contactUnosquare: function() {
      this.api.pause(1000);
      const form = getData(); // this is the important part
      return this.waitForElementVisible('@contactusMenu', 1000)
        .click('@contactusMenu')
        .setValue('@companyTextField', form.company)
        .setValue('@phoneTextField', form.phone)
        .setValue('@messageTextArea', form.message)
        .click('@submitBtn')
        .waitForElementVisible('@nameWarningMsg')
    }
  };


  function getData() {
    return require('../dataExternal/unosquareForm'); // Using the correct path is important
    };

module.exports = apiPost;