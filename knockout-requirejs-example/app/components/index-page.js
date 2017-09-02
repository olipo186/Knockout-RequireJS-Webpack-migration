define(function (require) {

    var ko = require("knockout");
    
    function IndexPage() {
        this.page = ko.observable("main");
    };

    return {
        viewModel: IndexPage,
        template: require('text!app/components/index-page.html')
    };
});