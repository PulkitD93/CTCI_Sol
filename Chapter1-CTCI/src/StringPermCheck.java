import java.util.HashMap;
public class StringPermCheck {
public static boolean checkPermut(String str1, String str2){
	// one way is to sort both strings and check
	//other way is using HashMap
	if(str1.length()!=str2.length()){
		return false;
	}
	HashMap<Character, Integer> hm =new HashMap<Character,Integer>();
	// Adds count
	for(int i=0;i<str1.length();i++){
		char key = str1.charAt(i);
		if(hm.containsKey(key)){
			int count =hm.get(key);
			hm.put(key, ++count);
		}
		else
			hm.put(key,1);
	}
	System.out.println(hm);
	//This removes count
	for(int i=0;i<str2.length();i++){
		char key = str2.charAt(i);
		if(hm.containsKey(key)){
			int count =hm.get(key);
			hm.put(key, --count);
		}
		else
			return false;
	}
	System.out.println(hm);
	//This will check if all are zero
	for(int i=0;i<str2.length();i++){
		char key = str2.charAt(i);
		if(hm.get(key)!=0){
			return false;
		}
		
	}
	return true;
	
}
}
