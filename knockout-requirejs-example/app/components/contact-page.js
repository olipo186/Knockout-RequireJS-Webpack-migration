define(function (require) {

    var ko = require("knockout");
    var Message = require("app/models/message");
    
    function ContactPage() {
        this.sampleMessage = "Hi,\n\nThis view model was written with JavaScript.\n\nBR"
        this.sentMessage = ko.observable();
        this.message = ko.observable(new Message(this.sampleMessage));
    };

    ContactPage.prototype.reset = function () {
        this.message().text(this.sampleMessage);
    };

    ContactPage.prototype.submit = function () {
        this.sentMessage(this.message());
        this.message(new Message());
    };

    return {
        viewModel: ContactPage,
        template: require('text!app/components/contact-page.html')
    };
});