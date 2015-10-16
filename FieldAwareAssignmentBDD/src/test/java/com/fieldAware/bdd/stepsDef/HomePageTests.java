package com.fieldAware.bdd.stepsDef;

import java.util.concurrent.TimeUnit;

import com.fieldAware.bdd.browser.Browser;
import com.fieldAware.bdd.utils.FieldAwareTest;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.HomePageObject;

public class HomePageTests  extends FieldAwareTest{
    HomePageObject homepage;
    @Before
    public void setUp() {
    	Browser.init();
    	Browser.instance.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
    }
    
    @Given("the user is on Home page")
    public void the_user_is_on_Home_page() {
    	homepage = HomePageObject.goTo();
    }

    @When("he expects the following menu items: \"([^\"]*)\"")
    public void he_expects_the_following_menu_items(String menuItemsCommaSeparated) {
    	expectedMenuItems = menuItemsCommaSeparated.split(",");
    }
    
    @When("he expects the following menu item: \"([^\"]*)\"")
    public void he_expects_the_following_menu_item(String menuItem) {
    	expectedMenuItems = menuItem.split(",");
    }
    
    @Then("ensure the sub menus are Displayed: \"([^\"]*)\"")
    public void ensure_the_subMenuItems_are_Displayed(String subMenus) {
    	expectedSubMenuItem = subMenus.split(",");
    	homepage.checkSubMenuDisplayed(expectedMenuItems);
    }
    
    @Then("ensure the Menu Items are Displayed")
    public void ensure_the_Menu_Items_are_Displayed() {
    	HomePageObject.isNavigationMenuDisplayed();
    }
    
    @And("the menu order is as specified")
    public void the_menu_order_is_as_specified() {
    	homepage.checkNavigationMenuitemsOrder(expectedMenuItems);
    }
    
    @And("the sub menus order is as specified")
    public void the_sub_menus_order_is_as_specified() {
    	homepage.checkSubMenuItemsOrder(expectedMenuItems, expectedSubMenuItem);
    }
    
    @After
    public void tearDown() {
    	Browser.quit();
    }
}
