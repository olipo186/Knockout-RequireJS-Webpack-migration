define(function (require) {

    var ko = require("knockout");
    
    function Message(message) {
        this.text = ko.observable(message);
    };

    return Message;
});