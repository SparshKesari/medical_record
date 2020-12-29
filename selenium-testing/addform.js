require("chromedriver"); 
    

let swd = require("selenium-webdriver"); 
let browser = new swd.Builder(); 
let tab = browser.forBrowser("chrome").build(); 

let {email, pass } = credentials[i]; 



let tabToOpen = 
    tab.get("http://localhost:3000/login"); 
tabToOpen 
    .then(function () { 


        let findTimeOutP = 
            tab.manage().setTimeouts({ 
                implicit: 10000,  
            }); 
        return findTimeOutP; 
    }) 
    .then(function () { 


        let promiseUsernameBox = 
            tab.findElement(swd.By.css("#formBasicEmail")); 
        return promiseUsernameBox; 
    }) 
    .then(function (usernameBox) { 


        let promiseFillUsername = 
            usernameBox.sendKeys(email); 
        return promiseFillUsername; 
    }) 
    .then(function () { 
        console.log( 
            "Username entered successfully in"
        ); 


        let promisePasswordBox = 
            tab.findElement(swd.By.css("#formBasicPassword")); 
        return promisePasswordBox; 
    }) 
    .then(function (passwordBox) { 


        let promiseFillPassword = 
            passwordBox.sendKeys(pass); 
        return promiseFillPassword; 
    }) 
    .then(function () { 
        console.log( 
            "Password entered successfully in"
        ); 


        let promiseSignInBtn = tab.findElement( 
            swd.By.css(".mb-3.btn.btn-primary") 
        ); 
        return promiseSignInBtn; 
    }) 
    .then(function (signInBtn) { 

        let promiseClickSignIn = signInBtn.click(); 
        return promiseClickSignIn; 
    }).then(function () {
        
    }) 
    .then(function () { 
        console.log("Successfully signed");
    }) 
    .catch(function (err) { 
        console.log("Error ", err, " occurred!"); 
    }); 