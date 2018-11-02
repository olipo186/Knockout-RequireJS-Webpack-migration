import * as template from "app/components/message-widget.html";

class MessageWidget {
    constructor(params) {
        this.message = params.message;
    }
}

export { template as template }
export { MessageWidget as viewModel }