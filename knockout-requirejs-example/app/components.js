define(function (require) {

    var ko = require("knockout");
    
    function RegisterComponent(name, container) {

        // If imported module is an ES6 module, the component object is nested
        if(container.__esModule === true) {

            if(!container.default)
                throw "No default export found in module: " + name
            
            container = container.default;
        }

        // Test for viewModel and template inside module
        if(!container.viewModel || !container.template)
            throw "Expected module to contain both viewModel and template: " + name
        
        ko.components.register(name, {
            viewModel: container.viewModel,
            template: container.template
        });
    }

    RegisterComponent("index-page", require('app/components/index-page'));
    RegisterComponent("main-page", require('app/components/main-page'));
    RegisterComponent("contact-page", require('app/components/contact-page'));
    RegisterComponent("message-widget", require('app/components/message-widget'));
    
});