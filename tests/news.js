module.exports = {
    tags: ['news'],
    'mobile device visit': function(browser) {
        browser
            .page.news().mobileVisit()
    },
    'Desktop device visit': function(browser) {
        browser
            .page.news().desktopVisit()
            .end()
    }
    
};