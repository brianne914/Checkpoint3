var emObject = {}

module.exports = {
    beforeEach: browser => {
        emObject = browser.page.emObject()
        emObject.navigate()
    },
    'Employee Record Contents': browser => {
        emObject
            .waitForElementPresent('@title')
            .assert.containsText('@title', 'Employee Manager')
            .waitForElementPresent('[name="employee5"]', 20000)
            .click('[name="employee5"]')
            .assert.containsText('@nameLabel', 'Name')
            .assert.containsText('@phoneLabel', 'Phone')
            .assert.containsText('@emailLabel', 'Email')
            .assert.containsText('@titleLabel', 'Title')
    },
    'Add Employee has default info': browser => {
        emObject
            .waitForElementPresent('@title')
            .assert.containsText('@title', 'Employee Manager')
            .click('@addNew')
            .pause(3000)
            .assert.containsText('@employeeList', 'New Employee')
            .click('@new')
            .waitForElementPresent('@employeeName')
            .assert.valueContains('@nameInput', 'New Employee')
            .pause(2000)
            .assert.valueContains('@phoneInput', '1111111111')
            .assert.valueContains('@emailInput', 'abc')
            .assert.valueContains('@titleInput', 'New Employee')
    },
    'Can Edit': browser => {
        emObject
            .click('@new')
            .clearValue('@nameInput')
            .setValue('@nameInput', 'Hannah Brown')
            .clearValue('@phoneInput')
            .setValue('@phoneInput', '0987654321')
            .clearValue('@emailInput')
            .setValue('@emailInput', 'abc@email.com')
            .clearValue('@titleInput')
            .setValue('@titleInput', 'beast')
            .click('@save')
            .pause(3000)
            .assert.valueContains('@nameInput', 'Hannah Brown')
    },
    'Changes Persist When Saved and Revert When Cancelled': browser => {
        emObject
        .waitForElementPresent('@employeeList', 10000)
        .click('@otherEmployee')
        .clearValue('@emailInput')
        .setValue('@emailInput', 'show@3stooges.org')
        .click('@save')
        .useXpath()
        .click('//li[text()="Spiderman"]')
        .useCss()
        .click('@otherEmployee')
        .verify.valueContains('@emailInput', 'show@3stooges.org')
        .click('@otherEmployee')
        .clearValue('@emailInput')
        .setValue('@emailInput', 'show@gmail.com')
        .click('@cancel')
        .verify.valueContains('@emailInput', 'show@3stooges.org')

    },
    'Can Delete from Employee List': browser => {
        emObject
        .verify.containsText('@employeeList', 'Hannah Brown')
        .useXpath()
        .click('//li[text()[contains(.,"Hannah Brown")]]')
        .pause(3000)
        .useCss()
        .verify.valueContains('@nameInput', 'Hannah Brown')
        .click('@delete')
        .pause(2000)
        .acceptAlert()
        .assert.That('@employeeList').excludes('Hannah Brown')
        
    }
    // 'ID Numbers': browser => {

    // },
    // 'Error on Incorrect Fields': browser => {

    // },
    // 'Confirm Search Field Filters List': browser => {

    // }
// }
}