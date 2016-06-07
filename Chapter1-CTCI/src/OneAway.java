//Complexity O(n)
public class OneAway {
//Check if there is only one difference or less in 2 strings,i.e only operation on string1 insert/delete/replace will produce string 2.
public static boolean checkOneAway(String strA, String strB){	
	if(strA.equals(strB)){
		return true;
	}
	String str1 =strA.length()>=strB.length()?strA:strB;
	String str2 =strA.length()<strB.length()?strA:strB;
	int str1Len= str1.length();
	int str2Len= str2.length();
	int dif = str1Len-str2Len; 
	if(dif>1){
		return false;
	}
	int strLen=str2Len;
	int count=0;
	if(dif==0){				//checks for replace
	for(int i =0;i<strLen;i++){
		if(str1.charAt(i)!=str2.charAt(i))
			count++;
	}
	}
	if(dif==1){ 			//check for delete
		int i=0;
		int j=i;
		while(i<strLen){
			
			if(str1.charAt(j)!=str2.charAt(i)){
				count++;
				j=i+1;
				break;
			}
			i++;
			j++;
		}
	}
	if(count>1){
		return false;
	}
	return true;
}
}
