package tests;

import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import browser.Browser;
import pageobjects.HomePageObject;
import utils.FieldAwareTest;

public class MenuItemsTests extends FieldAwareTest{
	@Before
	public void setup(){
		Browser.init();
	}
	
	@After
	public void tearDown(){
		Browser.quit();
	}
	
	@Test
	public void testMenuItemDisplayed(){
		HomePageObject.goTo();
		Assert.assertTrue(HomePageObject.isNavigationMenuDisplayed());
		
	}
	
	@Test
	public void testMenuItemOrder(){
		HomePageObject homepage =HomePageObject.goTo();
		homepage.checkNavigationMenuitemsOrder(FieldAwareTest.expectedMenuItems);
		
	}
	
	@Test
	public void testSubMenuItemDisplayed(){
		HomePageObject homepage = HomePageObject.goTo();
		homepage.checkSubMenuDisplayed();
		
	}
	
	@Test
	public void testSubMenuItemOrder(){
		HomePageObject homepage =HomePageObject.goTo();
		homepage.checkSubMenuItemsOrder();
	}
	
	
}
