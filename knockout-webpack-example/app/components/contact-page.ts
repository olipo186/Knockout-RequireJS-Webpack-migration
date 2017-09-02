import * as ko from "knockout";
import Message from "app/models/message";

export default class ContactPage {
    
    sampleMessage = "Hi,\n\nThis view model was written with TypeScript.\n\nBR"
    sentMessage = ko.observable();
    message = ko.observable(new Message(this.sampleMessage));

    constructor() {
    }

    reset = () => {
        this.message().text(this.sampleMessage);
    };

    submit = () => {
        this.sentMessage(this.message());
        this.message(new Message(""));
    };

}