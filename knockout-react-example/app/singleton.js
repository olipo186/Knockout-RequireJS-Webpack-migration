import ko from "knockout";

class Singleton {
    constructor() {
        this.phrase = ko.observable("Hello world");
    }
    update() {
        this.phrase(this.phrase() + " again");
    }
}

export default new Singleton();