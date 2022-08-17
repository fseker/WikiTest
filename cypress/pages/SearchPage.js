class SearchPage {
    elements = {
        searchInput: () => cy.get("#ooui-php-1"),
        searchForm: () => cy.get('form[id="search"]'),
        searchResultMatches: () => cy.get('.mw-search-results a .searchmatch'),
        logo: () => cy.get('[id="p-logo"]'),
    };

    countWords(str) {
        const arr = str.split(' ');
        return arr.filter(word => word !== '').length;
    }

    enterSearchText(searchTerm) {
        this.searchTermWord = this.countWords(searchTerm)
        this.elements.searchInput().clear().type(`${searchTerm}{enter}`);
    }

    executeSearch() {
        this.elements.searchForm().submit();
    }

    assertResultMatchRate(successRate) {
        const sizeForSuccess = (successRate / 100) * 20 * this.searchTermWord;
        this.elements.searchResultMatches;
        this.elements.searchResultMatches().should('have.length.gte', sizeForSuccess);
    }

    isLogoVisible() {
        this.elements.logo().should('be.visible');
    }

    isElementWithTextVisible(text) {
        cy.findAllByText(text).should('be.visible');
    }

}

module.exports = new SearchPage();