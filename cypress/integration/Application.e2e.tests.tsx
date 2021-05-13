describe('Application', () => {
  describe('shows information about', () => {
    it('when to use calculator', () => {
      cy.visit('/');

      cy.get('button').contains('When to Use').click();

      // assert
      cy.contains('Assessing a patient’s renal function');
      cy.contains('Prescribing a drug that is renally metabolized');
    });

    it('known pearls/pitfalls', () => {
      cy.visit('/');

      cy.get('button').contains('Pearls/Pitfalls').click();

      // assert
      cy.contains(
        'From Dan Brown, PharmD, at Palm Beach Atlantic University, the primary author of the functional range of creatinine clearance paper:'
      );
      cy.contains(
        'The Cockcroft-Gault equation remains the gold standard after almost 40 years, despite inaccuracies that arise from variations in body composition among patients. Those who understand potential sources of error can adjust accordingly.'
      );
    });
  });

  describe('shows if creatinine clearance severity', () => {
    it('is low', () => {
      cy.visit('/');

      // @ts-ignore
      cy.getByLabel('Creatinine').type('0.3', { timeout: 10000 });
      cy.get('input[type=submit]').click();

      cy.get('[role=comment]').should('have.text', 'result: score 3, low');
    });

    it('is hight', () => {
      cy.visit('/');

      // @ts-ignore
      cy.getByLabel('Creatinine').type('0.9', { timeout: 10000 });
      cy.get('input[type=submit]').click();

      cy.get('[role=comment]').should('have.text', 'result: score 4, hight');
    });
  });
});
