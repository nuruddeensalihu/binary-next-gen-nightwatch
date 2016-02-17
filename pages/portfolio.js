module.exports = function(browser) {
    return {
        visit: function() {
            var data = browser.globals.pages.portfolio;
            var login = browser.globals.pages.login;
            return browser
                .verifyLogin(login.token,function(result){
                    console.log("Login verification ");
                })
                .url(data.url)
                .waitForElementVisible('body', 3000)
                .verify.elementNotPresent(login.tokenInput)
                .verify.elementPresent('table')
                .verify.containsText('table','Ref')
                .verify.containsText('table','Indicative')
                .verify.containsText('table','Purchase')

        },
    };

}