define(function (require) {

    var ko = require("knockout");
    
    function MessageWidget(params) {
        this.message = params.message;
    };

    return { viewModel: MessageWidget, template: require("text!app/components/message-widget.html") };
});