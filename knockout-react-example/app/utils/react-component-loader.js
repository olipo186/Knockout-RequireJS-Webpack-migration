import ko from 'knockout';

class ReactComponentLoader {

    static loadComponent(name, componentConfig, callback) {
        
        // Intercept the loading of components ending with "-react"
        if(name.match(/\-react$/)) {

            ko.components.defaultLoader.loadComponent(name, {

                // Inject a wrapping element that invokes a custom knockout binding that loads the react component
                template: '<div data-bind="reactComponent: reactComponentOptions"></div>',

                // The view model passes on it's params to the react component
                viewModel: function(params, componentInfo) {
                    return {
                        reactComponentOptions: {
                            component: componentConfig.default,
                            props: params
                        }
                    };
                }
            }, callback);

        } else {
            
            callback(null);

        }
    }
}

export default ReactComponentLoader;