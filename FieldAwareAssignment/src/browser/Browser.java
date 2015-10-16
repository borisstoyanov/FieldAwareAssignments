package browser;

import java.io.File;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxBinary;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;


public class Browser {
	public static WebDriver instance;

	public static void init() {
		File pathToBinary = new File("D:\\fireFox\\firefox.exe");
		FirefoxBinary ffBinary = new FirefoxBinary(pathToBinary);
		FirefoxProfile firefoxProfile = new FirefoxProfile();
		instance = new FirefoxDriver(ffBinary, firefoxProfile);
	}

	public static void quit() {
		instance.quit();
	}
}
