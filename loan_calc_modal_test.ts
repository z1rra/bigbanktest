import modal from './pages/modalWindow';

Feature('loan calculation modal');

Before(({ I }) => { // or Background
    I.amOnPage('/?amount=5000&period=60&productName=SMALL_LOAN&loanPurpose=DAILY_SETTLEMENTS');
    //make sure modal is loaded in
    I.waitForElement(modal.amountField, 5);
  
  });

Scenario('Different input amount value changes monthly payment', async ({ I }) => {

    //get the monthly payment value before amount change
    let beforeMonthly = await I.grabTextFrom(modal.monthlyPaymentValue);
    I.fillField(modal.amountField, "20000");
    I.blur(modal.amountField);
    //value should be something different
    I.dontSee(beforeMonthly, modal.monthlyPaymentValue);
});

Scenario.todo('Different input loan period value changes monthly payment', async ({ I }) => {

    //get the monthly payment value before amount change
    let beforeMonthly = await I.grabTextFrom(modal.monthlyPaymentValue);
    I.fillField(modal.monthsField, "10");
    I.blur(modal.monthsField);
    //value should be something different
    I.dontSee(beforeMonthly, modal.monthlyPaymentValue);
});

Scenario.todo('Underlying form uses new loan sum', ({ I }) => {

    const loanAmount = "20000"
    I.fillField(modal.amountField, loanAmount);
    I.blur(modal.amountField);
    I.click("JÄTKA");
    //check that new monthly payment value is used
    I.see(loanAmount, modal.loanAmount);
});