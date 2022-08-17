import { Given, And, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../../pages/HomePage';
import SearchPage, { isElementWithTextVisible } from '../../pages/SearchPage';

Given('I open the wikipedia page', () => {
    cy.visit('/');
});

And('I click on search button', () => {
    HomePage.clickOnSearchButton();
});

When('I enter search term {string} and search', (text) => {
    SearchPage.enterSearchText(text);
});

Then('I verify result match rate above % {int}', (rate) => {
    SearchPage.assertResultMatchRate(rate);
});

Then('I verify banner', () => {
    SearchPage.isLogoVisible();
});

And('{string} and {string} selected by default', (text1, text2) => {
    isElementWithTextVisible(text1);
    isElementWithTextVisible(text2);
});

Then('I see {string} message', (errorText) => {
    isElementWithTextVisible(errorText);
});