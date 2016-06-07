
public class IsUnique {
	
public static boolean isStringUnique(String check){
	if(check.length()>128) //For Ascii
	{
		return false;
	}
	boolean array[]=new boolean[128]; 
	for(int i=0; i<check.length();i++){
		char x = check.charAt(i);
		if(array[x]==true){
			return false;
		}
		array[x]= true;
		
	}
	return true;
	
}
}
