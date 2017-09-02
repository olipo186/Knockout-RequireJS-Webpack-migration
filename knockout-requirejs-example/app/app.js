define(function (require) {

    var MasterViewModel = require("app/master-viewmodel");
    var ko = require("knockout");

    require("app/components");
    
    ko.applyBindings(new MasterViewModel()), document.getElementById("root");

});