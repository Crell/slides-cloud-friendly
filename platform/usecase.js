(function() {
    // If the <body> tag has an attribute `data-usecase`, then any <section> tag that
    // has a `data-usecase` attribute that is NOT the same will be removed from the page.
    // A <section> with no attribute or a matching attribute will be unaffected.
    // If there is no `data-usecase` attribute on the body, nothing happens.

    Reveal.addEventListener('ready', (event) => {
        let body = document.getElementsByTagName('body')[0];
        if (body.hasAttribute('data-usecase')) {
            let usecase = body.getAttribute('data-usecase');
            document.querySelectorAll('section[data-usecase]').forEach((elm) => {
                if (elm.getAttribute('data-usecase') !== usecase) {
                    elm.parentNode.removeChild(elm);
                }
            });
            Reveal.sync();
        }
    });
})();
