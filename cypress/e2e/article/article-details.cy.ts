let articleId: string = '';

describe('Статья', () => {
    beforeEach(() => {
        cy.login();
        cy.createArticle().then((data) => {
            articleId = data.id;
            cy.visit(`articles/${data.id}`);
        });
    });
    afterEach(() => {
        cy.removeArticle(articleId);
    });
    it('Содержимое статьи', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
    });
    it('Список рекоммендаций', () => {
        cy.intercept('GET', '**/articles/*', { fixture: 'article-details.json' });
        cy.getByTestId('ArticleRecommendationsList').should('exist');
    });
    it('Комментарий', () => {
        // cy.intercept('GET', '**/articles/*', { fixture: 'article-details.json' });
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('AddCommentForm').scrollIntoView();
        cy.addComment('text');
        cy.getByTestId('CommentCard.Content').should('have.length', 1);
    });
    it('Оценка', () => {
        cy.intercept('GET', '**/articles/*', { fixture: 'article-details.json' });
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRate(4, 'feedback');
        cy.get('[data-selected=true]').should('have.length', 4);
    });
});
