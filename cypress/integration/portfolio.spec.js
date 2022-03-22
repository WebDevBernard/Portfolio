describe("Portfolio", () => {
  beforeEach(function () {
    cy.visit("http://localhost:3000");
  });
  it("front page can be opened", function () {
    cy.contains("I am Bernard");
  });
  it("scrolls to location on page", function () {
    cy.contains("Projects").click();
    cy.contains("About").click();
    cy.contains("Contact").click();
    cy.contains("Work With Me").click();
  });
  it("resume viewable on click", function () {
    cy.request("http://localhost:3000/resume.pdf");
    cy.contains("View Resume").click();
  });
  it("submits a form", function () {
    cy.get("form").submit;
  });
  // it("opens a new tab", function () {
  //   cy.get;
  // });
});
