define(function (require) {

    var ko = require("knockout");

    // When using require() to import ES6 modules with a default export
    // we need to append .default
    var Message = require("app/models/message").default;
    
    function MainPage() {
        this.message = ko.observable(new Message("This is the main page"));
    };

    return {
        viewModel: MainPage,
        template: require("app/components/main-page.html")
    };
});