const loginElementsLocators = require('../PageElements/LoginPageElements.json')

export class loginPageElements {


    username(usernamee){
        cy.get(loginElementsLocators.loginPageLocators.username_text).type(usernamee)
        return

    }
    password(password) {
        cy.get(loginElementsLocators.loginPageLocators.password_text).type(password)
        return

    }
    loginButton(){
        cy.get(loginElementsLocators.loginPageLocators.login_button).click()
        return


    }
    errorMessage(err){
        cy.get(loginElementsLocators.loginPageLocators.error_message).contains(err)
        return


    }
    attentionText(err){
        cy.get(loginElementsLocators.loginPageLocators.attention_text).contains(err)
        return


    }
}