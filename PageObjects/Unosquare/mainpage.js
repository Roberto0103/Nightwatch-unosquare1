


var validateContactUs = {
  contactUnosquare: function() {
    browser.windowMaximize()
    this.api
    return this.waitForElementVisible('@contactusMenu', 1000)
      .click('@contactusMenu')
      .setValue('@companyTextField', 'QA CoE course')
      .setValue('@phoneTextField', '3300000000')
      .setValue('@messageTextArea', 'This is a Random Text used in a Course')
      .click('@submitBtn')
      .waitForElementVisible('@nameWarningMsg')
  }
};

var validateSearchMenu = {
  searchbar: function() {
    browser.windowMaximize()
    this.api
    return this.waitForElementVisible('@blogMenu') 
    .click ('@blogMenu')
    .assert.visible('@searchBlog')
    .setValue('@searchBlog', 'services')
    .click ('@submit')
    .pause(3*1000)
    .assert.textEquals('#wrapper > header > div.container-fluid.content-blog > div > div.col-lg-9 > h3', 'RESULTS FOUND FOR THE SEARCH TERM "services"')
    .assert.urlEquals('https://info.unosquare.com/blog-search?query=services')
  }
};


var validateIndustries = {
  Industries: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@Industries', 1000)
      .click('@Industries')
      .assert.urlContains('unosquare')
      .assert.titleContains('INDUSTRIES')
        
  }
};

module.exports = {
  url: 'https://www.unosquare.com',
  commands: [validateContactUs ,validateSearchMenu],
  elements: {
    
    contactusMenu: {
      selector: "li a[href = '/ContactUs']"
    },
    industriesMenu: {
      selector: "li a[href = '/Industries']"
    },
    aboutMenu: {
      selector: "li a[href = '/About']"
    },
    servicesMenu: {
      selector: "li a[href = '/Services']"
    },
    careersMenu:{
      selector: "#navbarSupportedContent > ul > li:nth-child(1) > a"
    },
    blogMenu: {
      selector: "#navbarSupportedContent > ul > li:nth-child(8) > a"
    },
    searchBlog: { 
      selector: "#search-bar"
    },
    coloroftext: {
      selector: "#quotesIndicators > h2", "color": "rgba(33, 37, 41, 1)"
    },
    submit: {
      selector: "#side-bar-container > form > button"
    },
    nameinput:{
      selector: "#name-2a32df81-981f-4329-b943-9f2e76efe5f0"
    },
    submitbtm:{
      selector: "#hsForm_2a32df81-981f-4329-b943-9f2e76efe5f0 > div.hs_submit.hs-submit > div.actions > input"
    },
    messageinput: {
      selector: "#message-2a32df81-981f-4329-b943-9f2e76efe5f0"
    },

    
    companyTextField: {
      selector: "input.hs-input[name = 'company']"
    },
    phoneTextField: {
      selector: "input.hs-input[name = 'phone']"
    },
    messageTextArea: {
      selector: "textarea.hs-input[name = 'message']"
    },
    submitBtn: {
      selector: "input[value = 'Submit']"
    },
    nameWarningMsg: {
      selector: "//div[contains(@class, 'hs_name')]//label[contains(., 'Please complete this required field.')]",
      locateStrategy: 'xpath'
    }


  }
};