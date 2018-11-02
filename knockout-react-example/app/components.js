define(function (require) {

    var ko = require("knockout");

    ko.components.register("index-page", require('app/components/index-page'));
    ko.components.register("main-page", require('app/components/main-page'));
    ko.components.register("contact-page", require('app/components/contact-page'));
    ko.components.register("message-widget", require('app/components/message-widget'));
    ko.components.register("hello-message-react", require('app/components/hello-message'));
    
});