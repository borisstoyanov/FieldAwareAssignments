$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("homePage.feature");
formatter.feature({
  "line": 1,
  "name": "Web-site home page",
  "description": "     As a customer,\r\n     I want to open home page \r\n     so that I can navigate through all the menus in the web-site",
  "id": "web-site-home-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5622844040,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Menu Items are Displayed",
  "description": "",
  "id": "web-site-home-page;menu-items-are-displayed",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "the user is on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "he expects the following menu item: \"Product, Technology, Clients, Industries, Resources, Company, Get a demo\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "ensure the Menu Items are Displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "the menu order is as specified",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageTests.the_user_is_on_Home_page()"
});
formatter.result({
  "duration": 4196959129,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product, Technology, Clients, Industries, Resources, Company, Get a demo",
      "offset": 37
    }
  ],
  "location": "HomePageTests.he_expects_the_following_menu_item(String)"
});
formatter.result({
  "duration": 2008260,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTests.ensure_the_Menu_Items_are_Displayed()"
});
formatter.result({
  "duration": 71438193,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTests.the_menu_order_is_as_specified()"
});
formatter.result({
  "duration": 143129130,
  "status": "passed"
});
formatter.after({
  "duration": 562886198,
  "status": "passed"
});
formatter.before({
  "duration": 4845804914,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Product sub menu items are displayed and in the right order",
  "description": "",
  "id": "web-site-home-page;product-sub-menu-items-are-displayed-and-in-the-right-order",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "the user is on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "he expects the following menu item: \"Product\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "ensure the sub menus are Displayed: \"Product Overview, Scheduling and Dispatch, Invoicing, Work Order Management, Mobile Apps, Dashboards \u0026 Reports, Quotes, Self Service Portal, Roles \u0026 Rights, FieldAware for Netsuite, FieldAware for Salesforce, Amaze Customers, Boost Revenue, Reduce Costs, Start Fast, Field Service Management, Licensing Options, Quick Start, Solutions Center\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "the sub menus order is as specified",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageTests.the_user_is_on_Home_page()"
});
formatter.result({
  "duration": 13723018394,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product",
      "offset": 37
    }
  ],
  "location": "HomePageTests.he_expects_the_following_menu_item(String)"
});
formatter.result({
  "duration": 89808,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product Overview, Scheduling and Dispatch, Invoicing, Work Order Management, Mobile Apps, Dashboards \u0026 Reports, Quotes, Self Service Portal, Roles \u0026 Rights, FieldAware for Netsuite, FieldAware for Salesforce, Amaze Customers, Boost Revenue, Reduce Costs, Start Fast, Field Service Management, Licensing Options, Quick Start, Solutions Center",
      "offset": 37
    }
  ],
  "location": "HomePageTests.ensure_the_subMenuItems_are_Displayed(String)"
});
formatter.result({
  "duration": 465959870,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTests.the_sub_menus_order_is_as_specified()"
});
formatter.result({
  "duration": 678269185,
  "status": "passed"
});
formatter.after({
  "duration": 452792854,
  "status": "passed"
});
formatter.before({
  "duration": 4724708052,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Technology sub menu items are displayed and in the right order",
  "description": "",
  "id": "web-site-home-page;technology-sub-menu-items-are-displayed-and-in-the-right-order",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "the user is on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "he expects the following menu item: \"Technology\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "ensure the sub menus are Displayed: \"FieldAware API, FieldAware Mobile App, Reliability \u0026 Security, FieldAware Web Application\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "the sub menus order is as specified",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageTests.the_user_is_on_Home_page()"
});
formatter.result({
  "duration": 14282746372,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Technology",
      "offset": 37
    }
  ],
  "location": "HomePageTests.he_expects_the_following_menu_item(String)"
});
formatter.result({
  "duration": 76550,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "FieldAware API, FieldAware Mobile App, Reliability \u0026 Security, FieldAware Web Application",
      "offset": 37
    }
  ],
  "location": "HomePageTests.ensure_the_subMenuItems_are_Displayed(String)"
});
formatter.result({
  "duration": 387121137,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTests.the_sub_menus_order_is_as_specified()"
});
formatter.result({
  "duration": 302997465,
  "status": "passed"
});
formatter.after({
  "duration": 386901750,
  "status": "passed"
});
formatter.before({
  "duration": 4738608493,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Industries sub menu items are displayed and in the right order",
  "description": "",
  "id": "web-site-home-page;industries-sub-menu-items-are-displayed-and-in-the-right-order",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "the user is on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "he expects the following menu item: \"Industries\"",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "ensure the sub menus are Displayed: \"Industrial Manufacturing and Equipment, Medical Equipment Manufacturers, Waste and Water Management, Health Care, Food Service Equipment Support, Commercial HVAC\"",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "the sub menus order is as specified",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageTests.the_user_is_on_Home_page()"
});
formatter.result({
  "duration": 14138061866,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Industries",
      "offset": 37
    }
  ],
  "location": "HomePageTests.he_expects_the_following_menu_item(String)"
});
formatter.result({
  "duration": 73557,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Industrial Manufacturing and Equipment, Medical Equipment Manufacturers, Waste and Water Management, Health Care, Food Service Equipment Support, Commercial HVAC",
      "offset": 37
    }
  ],
  "location": "HomePageTests.ensure_the_subMenuItems_are_Displayed(String)"
});
formatter.result({
  "duration": 431813468,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTests.the_sub_menus_order_is_as_specified()"
});
formatter.result({
  "duration": 375323894,
  "status": "passed"
});
formatter.after({
  "duration": 381784452,
  "status": "passed"
});
formatter.before({
  "duration": 4686542564,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Resources sub menu items are displayed and in the right order",
  "description": "",
  "id": "web-site-home-page;resources-sub-menu-items-are-displayed-and-in-the-right-order",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 31,
  "name": "the user is on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "he expects the following menu item: \"Resources\"",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "ensure the sub menus are Displayed: \"Product Videos, ROI Calculator, Join a Demo Webinar, White Papers and eBooks, Articles, Field Service Resources, On Demand Webinars\"",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "the sub menus order is as specified",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageTests.the_user_is_on_Home_page()"
});
formatter.result({
  "duration": 14243452736,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Resources",
      "offset": 37
    }
  ],
  "location": "HomePageTests.he_expects_the_following_menu_item(String)"
});
formatter.result({
  "duration": 70563,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product Videos, ROI Calculator, Join a Demo Webinar, White Papers and eBooks, Articles, Field Service Resources, On Demand Webinars",
      "offset": 37
    }
  ],
  "location": "HomePageTests.ensure_the_subMenuItems_are_Displayed(String)"
});
formatter.result({
  "duration": 602131937,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTests.the_sub_menus_order_is_as_specified()"
});
formatter.result({
  "duration": 453261134,
  "status": "passed"
});
formatter.after({
  "duration": 369721636,
  "status": "passed"
});
formatter.before({
  "duration": 4922518638,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Company sub menu items are displayed and in the right order",
  "description": "",
  "id": "web-site-home-page;company-sub-menu-items-are-displayed-and-in-the-right-order",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 37,
  "name": "the user is on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "he expects the following menu item: \"Company\"",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "ensure the sub menus are Displayed: \"About FieldAware, Contact Us, Company News, Leadership Team, Investors, Press Room, Recent Media Coverage, Events, Careers\"",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "the sub menus order is as specified",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageTests.the_user_is_on_Home_page()"
});
formatter.result({
  "duration": 14144244878,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Company",
      "offset": 37
    }
  ],
  "location": "HomePageTests.he_expects_the_following_menu_item(String)"
});
formatter.result({
  "duration": 75695,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "About FieldAware, Contact Us, Company News, Leadership Team, Investors, Press Room, Recent Media Coverage, Events, Careers",
      "offset": 37
    }
  ],
  "location": "HomePageTests.ensure_the_subMenuItems_are_Displayed(String)"
});
formatter.result({
  "duration": 371472021,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTests.the_sub_menus_order_is_as_specified()"
});
formatter.result({
  "duration": 430889736,
  "status": "passed"
});
formatter.after({
  "duration": 370446936,
  "status": "passed"
});
});