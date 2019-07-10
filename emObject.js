module.exports = {
    url: "https://devmountain-qa.github.io/employee-manager-v2/build/index.html",
    // commands: [employeeCommands],
    elements: {
        title: ".titleText",
        searchBox: "[name='searchBox']",
        searchClear: {
            selector: '//*[@name="clearSearch"]',
            locateStrategy: 'xpath'
        },
        firstEmployee: {
            selector: '[name="employee5"]',
            locateStrategy: 'xpath'
        },
        nameInput: '[name="nameEntry"]',
        phoneInput: '[name="phoneEntry"]',
        emailInput: '[name="emailEntry"]',
        titleInput: '[name="titleEntry"]',
        nameLabel: '[name="nameLabel"]',
        phoneLabel: '[name="phoneLabel"',
        emailLabel: '[name="emailLabel"',
        titleLabel: '[name="titleLabel"',
        addNew: '[name="addEmployee"]',
        employeeList: '.listContainer',
        employeeName: '[name="employeeName"]',
        new: {
            selector: '//li[text()="New Employee"]',
            locateStrategy: 'xpath'
        },
        save: '#saveBtn',
        otherEmployee: '[name="employee17657"]',
        cancel: '[name="cancel"]',
        delete: '[name="delete"]',
        
    }
}