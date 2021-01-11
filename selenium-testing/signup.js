
require("chromedriver"); 
  

let swd = require("selenium-webdriver"); 
let browser = new swd.Builder(); 
let tab = browser.forBrowser("chrome").build(); 
  

let { name ,email, number, password } = require("./signupcredentials.json"); 
  

let tabToOpen = 
    tab.get("http://localhost:3000/signup"); 
tabToOpen 
    .then(function () { 
  
        let findTimeOutP = 
            tab.manage().setTimeouts({ 
                implicit: 10000,  
            }); 
        return findTimeOutP; 
    })
    .then(function () {
        let nameBox = 
            tab.findElement(swd.By.css("#formName"));
        return nameBox;    
    })
    .then(function (nameBox) {
        let nameFill = nameBox.sendKeys(name);
        return nameFill
    }).then(function () {
        console.log("name Entered Succesfully")

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
            "Email entered successfully in"
        ); 

        let numberBox = 
            tab.findElement(swd.By.css("#formBasicNumber")); 
        return numberBox; 
    }) 
    .then(function (numberBox) { 
  

        let numberFill = 
            numberBox.sendKeys(number); 
        return numberFill; 
    }) 
    .then(function () { 
        console.log( 
            "Number entered successfully in" 
        ); 
            let passwordBox = 
                tab.findElement(swd.By.css("#formBasicPassword"))
            return passwordBox;
    })
    .then(function (passwordBox) {
        let passwordFill = 
            passwordBox.sendKeys(password)
        return passwordFill;
    })
    .then(function () {
        console.log("password entered succesfully")

        let cpasswordBox = 
            tab.findElement(swd.By.css("#formBasicCPassword"))
        return cpasswordBox;
    })
    .then(function (cpasswordBox) {
        let cpasswordFill = cpasswordBox.sendKeys(password);
        return cpasswordFill;
    })
    .then(function () {
        console.log("confirm password entered succesfully")
        let promiseSignInBtn = tab.findElement( 
            swd.By.css(".mb-3.btn.btn-primary") 
            ); 
        return promiseSignInBtn; 
    }) 
    .then(function (signInBtn) { 

        let promiseClickSignIn = signInBtn.click(); 
        return promiseClickSignIn; 
    }) 
    .then(function () { 
        console.log("Successfully signed in"); 
    }) 
    .catch(function (err) { 
        console.log("Error ", err, " occurred!"); 
    }); 