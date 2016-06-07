import java.util.Arrays;


public class PallindromePerm {
//Given a String check if it is a permutation of a pallindrome.
	//If a string is even length ie, all chars must exist 2x times, else one char can exist odd times rest have to be even times
	//
	public static boolean checkPallPerm(String str){
		int strLen= str.length();
		int[] arr=new int[128];
		
		for(int i=0;i<str.length();i++){
			if(str.charAt(i)!=' ')
			arr[str.charAt(i)]++;
			else
				strLen--; // so that space doesn't get counted.
			}
		System.out.println(Arrays.toString(arr));
		if(strLen%2==0){
		
			for(int i=0;i<arr.length;i++){
			
				if(arr[i]%2!=0){
				return false;
			
				}
		
			}
				return true;
			}
			else{
				int count=0; //to check that the odd exists only once
				
				for(int i=0;i<arr.length;i++){
					if(arr[i]%2!=0){
					count++;
					}
				}
					if(count!=1)
						return false;
				
				}
	
		return true;
	}
}
