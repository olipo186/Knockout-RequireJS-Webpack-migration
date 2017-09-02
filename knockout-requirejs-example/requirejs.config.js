// cf. https://github.com/requirejs/example-multipage
requirejs.config({
    baseUrl: "",
    paths: {
        knockout: [
            "app/lib/knockout",
            "knockout"
        ],
        text: "//cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text"
    }
});
