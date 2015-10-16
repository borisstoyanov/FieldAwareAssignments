package utils;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class MenuItemsReader {

	public static String[] getExpectedItems(String resourceFile) {
		String[] ar = null;
		try {
			BufferedReader in = new BufferedReader(new FileReader("./MenuItemsParameters/" + resourceFile));
			String str;

			while ((str = in.readLine()) != null) {
				ar = str.trim().split(",");
			}

			in.close();
		} catch (IOException e) {
			System.out.println("File Read Error");
		}
		if (ar == null){
		    return ar = new String[0];
		}
		return ar;
	}

	
}
