define(function (require) {

    var ko = require("knockout");
    var singleton = require('../singleton').default;

    function IndexPage() {
        this.page = ko.observable("main");
        this.phrase = singleton.phrase;
        this.update = singleton.update.bind(singleton);
    };

    return {
        viewModel: IndexPage,
        template: require('app/components/index-page.html')
    };
});