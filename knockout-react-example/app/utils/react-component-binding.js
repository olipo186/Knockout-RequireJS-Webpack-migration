import ko from 'knockout';
import React from '../../node_modules/react';
import ReactDOM from '../../node_modules/react-dom';

ko.bindingHandlers.reactComponent = {
    init: function (element, valueAccessor, allBindings) {
        
        var options = ko.unwrap(valueAccessor());

        if(!options || !options.component)
            return;

        var subscriptions = [];

        var props = options.props || {};
        var componentInstance;

        function mountReactComponent() {
            
            var reactElement = React.createElement(options.component, options.props);

            componentInstance = ReactDOM.render(
                reactElement,
                element
            );
    
            if (options.ref) {
                options.ref(componentInstance);
            }
        }

        // Initial mount
        mountReactComponent();

        // Iterate over passed props and look for knockout observables
        Object.keys(props).forEach(key => {

            if(ko.isObservable(props[key])) {

                // If found, start subscribing for changes
                subscriptions.push(props[key].subscribe(n => {

                    // Unmount
                    ReactDOM.unmountComponentAtNode(element);

                    // When change is detected, rerender the react component
                    mountReactComponent();

                }));
            }
        });

        // Dispose subscriptions
        ko.utils.domNodeDisposal.addDisposeCallback(element, function() {
            subscriptions.map(x => x.dispose());
        });

        return {
            controlsDescendantBindings: true
        };
    }
};