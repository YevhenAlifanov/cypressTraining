import {loginPageElements} from "/../../Desktop/PageObjectModel/PageObject/PageActions/LogInPageActions.cy"

const login_actions = new loginPageElements

describe('Page Object tutorial', function () {

        it('Log In with invalid credentials', function () {
            cy.visit('https://magento.softwaretestingboard.com/')
            cy.get('.panel > .header > .authorization-link > a').click()
            login_actions.username('user@mailto.plus')
            login_actions.password('Qwerty123')
            login_actions.loginButton()
            login_actions.errorMessage('The account sign-in was i')

        });


        it('Log In page', function () {
            cy.visit('https://magento.softwaretestingboard.com/')
            cy.get('.panel > .header > .authorization-link > a').click()
            login_actions.username('oekudet@mailto.plus')
            login_actions.password('Qwerty123')
            login_actions.loginButton()
        });

        it('Check the attention line', function () {
            cy.visit('https://magento.softwaretestingboard.com/')
            login_actions.attentionText('This is a demo store');


    })
})