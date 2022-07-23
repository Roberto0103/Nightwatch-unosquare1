
module.exports = {
    'Demo test unosquare' : function(browser) {
      browser
      .windowMaximize()
      .url('https://www.unosquare.com')
      .waitForElementVisible('body') // 1.- Go to unosquare.com
      .click ("#navbarSupportedContent > ul > li:nth-child(8) > a")  //2.-Go to Blog
      .pause(3*1000)
      .assert.containsText("#wrapper > header > div.breadcrumb-container > h1" ,"DIGITAL TRANSFORMATION BLOG") //3.-Validate that the following header "DIGITAL TRANSFORMATION BLOG" exists
      .assert.urlContains('https://blog.unosquare.com/') //4.- Using asserts, validate that the URL should be: https://blog.unosquare.com/
      .assert.visible({selector: '#side-bar-container > main > label:nth-child(2)', supressNotFoundErrors: true}) // 5.- Under the search bar validate that Recent Post and Popular Posts elements are visible
      .click ("#navbarSupportedContent > ul > li:nth-child(6) > a")  //7.- Go to About page
      .pause(4.1000)
      .assert.visible({selector: '#about > div.gray-section > div > div.mt-5 > div > div > div:nth-child(1) > div > span.name', supressNotFoundErrors: true})  //8.- Using asserts verify that the following names are present: Mario Di Vece, Giancarlo Di Vece, Eduardo Arias, Ignacion Miranda and Diego Huerta
      .assert.visible({selector: '#about > div.gray-section > div > div.mt-5 > div > div > div:nth-child(2) > div > span.name', supressNotFoundErrors: true})  // Giancarlo Di Vece
      .assert.visible({selector: '#about > div.gray-section > div > div.mt-5 > div > div > div:nth-child(3) > div > span.name', supressNotFoundErrors: true})  // Eduardo Arias
      .assert.visible({selector: '#about > div.gray-section > div > div.mt-5 > div > div > div:nth-child(4) > div > span.name', supressNotFoundErrors: true})  // Ignacion Miranda
      .assert.visible({selector: '#about > div.gray-section > div > div.mt-5 > div > div > div:nth-child(5) > div > span.name', supressNotFoundErrors: true})  // Diego Huerta
    }
};



/*
Create a script with the following: 

Go to unosquare.com
Go to Blog
Validate that the following header "DIGITAL TRANSFORMATION BLOG" exists
Using asserts, validate that the URL should be: https://blog.unosquare.com/
Under the search bar validate that Recent Post and Popular Posts elements are visible
Using the visible Search bar and a JSON file to provide the data, search the following: "QA", "Development", "JAVA", "Testing"
Go to About page
Using asserts verify that the following names are present: Mario Di Vece, Giancarlo Di Vece, Eduardo Arias, Ignacion Miranda and Diego Huerta
*/
