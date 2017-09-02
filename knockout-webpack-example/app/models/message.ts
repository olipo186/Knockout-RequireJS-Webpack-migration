import * as ko from "knockout"

export default class Message {

    text = ko.observable();

    constructor(message:string) {
        this.text(message);
    }
}