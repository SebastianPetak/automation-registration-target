require('chromedriver');
var webdriver = require('selenium-webdriver');
var By = require('selenium-webdriver').By;
var until = require('selenium-webdriver').until;

// open Chrome
var driver = new webdriver.Builder().forBrowser('chrome').build();
// maximize the window
driver.manage().window().maximize();
// delete all cookies
driver.manage().deleteAllCookies();

/*
	AUTOMATION DESCRIPTION
	Go to localhost:8080 which is hosting 'Automation Registration Target'
	a custom application featuring a registration form connected to a mongo
	database. Fill out the form and create an account. Confirm the account
	was created by looking for the page title 'success'.
*/

// Go to the webserver we are hosting
driver.get('localhost:8080').then(function() {
	// Select the email input
	return driver.findElement(By.id('email'));
}).then(function(email) {
	// Type email address into the input
	email.sendKeys('selenium@test.com');
}).then(function() {
	// Select the password input
	return driver.findElement(By.id('password'));
}).then(function(password) {
	// type password into the input
	password.sendKeys('123');
}).then(function() {
	// select and click birthday month input
	driver.findElement(By.css('#birthdayMonth > option:nth-child(10)'))
	.click();
}).then(function() {
	// select your gender
	driver.findElement(By.css('#gender > option:nth-child(1)')).click();
}).then(function() {
	// select and click eye color
	driver.findElement(By.id('hazel')).click();
}).then(function() {
	// select and click checkbox
	driver.findElement(By.id('checkbox')).click();
}).then(function() {
	// select and click submit button
	driver.findElement(By.tagName('button')).click();
}).then(function() {
	// wait until page title is 'Success'
	driver.wait(until.titleIs('Success'), 5000);
}).then(function() {
	// get the title
	return driver.getTitle();
}).then(function(title) {
	// log the title and quit
	console.log('The title is: ' + title);
	driver.quit();
});
