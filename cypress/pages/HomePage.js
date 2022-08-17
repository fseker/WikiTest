class HomePage {
    elements = {
        searchIcon: () => cy.get("#searchButton")
    };

    clickOnSearchButton() {
        this.elements.searchIcon().click();
    };
}

module.exports = new HomePage();