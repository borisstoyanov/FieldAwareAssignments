Feature: Web-site home page
       As a customer,
       I want to open home page 
       so that I can navigate through all the menus in the web-site
 
Scenario: Menu Items are Displayed
       Given the user is on Home page
       When he expects the following menu item: "Product, Technology, Clients, Industries, Resources, Company, Get a demo"
       Then ensure the Menu Items are Displayed
       And the menu order is as specified
 
Scenario: Product sub menu items are displayed and in the right order
       Given the user is on Home page
       When he expects the following menu item: "Product"
	   Then ensure the sub menus are Displayed: "Product Overview, Scheduling and Dispatch, Invoicing, Work Order Management, Mobile Apps, Dashboards & Reports, Quotes, Self Service Portal, Roles & Rights, FieldAware for Netsuite, FieldAware for Salesforce, Amaze Customers, Boost Revenue, Reduce Costs, Start Fast, Field Service Management, Licensing Options, Quick Start, Solutions Center"
       And the sub menus order is as specified 

Scenario: Technology sub menu items are displayed and in the right order
       Given the user is on Home page
       When he expects the following menu item: "Technology"
	   Then ensure the sub menus are Displayed: "FieldAware API, FieldAware Mobile App, Reliability & Security, FieldAware Web Application"
       And the sub menus order is as specified 

Scenario: Industries sub menu items are displayed and in the right order
       Given the user is on Home page
       When he expects the following menu item: "Industries"
	   Then ensure the sub menus are Displayed: "Industrial Manufacturing and Equipment, Medical Equipment Manufacturers, Waste and Water Management, Health Care, Food Service Equipment Support, Commercial HVAC"
       And the sub menus order is as specified 

Scenario: Resources sub menu items are displayed and in the right order
       Given the user is on Home page
       When he expects the following menu item: "Resources"
	   Then ensure the sub menus are Displayed: "Product Videos, ROI Calculator, Join a Demo Webinar, White Papers and eBooks, Articles, Field Service Resources, On Demand Webinars"
       And the sub menus order is as specified 

Scenario: Company sub menu items are displayed and in the right order
       Given the user is on Home page
       When he expects the following menu item: "Company"
	   Then ensure the sub menus are Displayed: "About FieldAware, Contact Us, Company News, Leadership Team, Investors, Press Room, Recent Media Coverage, Events, Careers"
       And the sub menus order is as specified 

