define(function (require) {

    var ko = require("knockout");
    var Message = require("app/models/message");
    
    function MainPage() {
        this.message = ko.observable(new Message("This is the main page"));
    };

    return {
        viewModel: MainPage,
        template: require('text!app/components/main-page.html')
    };
});