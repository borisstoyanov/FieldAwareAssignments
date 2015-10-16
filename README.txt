Requirements:
 - Firefox
 - JDK
 - Eclipse
 - JUnit
 
 
Setup:
1. Either download the source from my GitHub or directly from the archive location I've send
2. Extract (if needed)
3. Open Eclipse and Import both the projects 
4. Create a user lib containing all files from [extracted_archive]/lib
5. Configure buildpath of each the projects to contain your user lib. 
You should be good to go (if any issues please reach me at: bss.stoyanov@gmail.com)  

Overview: 

Approach1 - Page Object design patern
Contains Page object where you have all interactions defined per specific page.
It allows you easily to switch tools that using(for ex. Selenium) + easy to maintain (only have to update at one place if needed).

Making asumtion that the user have a list containing menu items and order I've created MenuItemsParameters.
This directory holds ExpectedMenuItems and all other sub-menus in separate files(for ex. "Products" contains all sub-menus behind products).
The tests are reading the expected values from these resources and evaluates the page if it follows the same order and presense. 

How to run: 
Go to 'tests' package in eclipse and open the MenuItemsTests.java file. This class extends FieldAwareTest class which appears to be a generic test for the company. 
Simply righclick on the file and run as JUnit test. 
 
 


Approach2 - Behaviour Driven Development 
It contains feature document which describes all feature tests as a role. 
Following a DSL and Gherkin syntax allows the framework behind to interpretend the feature document into disignable steps. 
The steps are designed in the same page object pattern as the other project.

Making asumption that the user knows which menus are expected on page, I've added them directly in the .feature document. 
For example each test has it's own diferent parameters on the test design level. 

How to run: 
Go to 'com.fieldAware.bdd.stepsDef' package in eclipse. There is a RunCukesTestBDD.java fail which will be the file you need to run. 
In order to grasp more details on the tests themselve please look at HomePageTests.java(containing all steps definition) and src/test/resource/homePage.feature (containing test scenarios) 
To run just rightclick the RunCukesTestBDD and run as JUnit.
 


If any isues please reach me.