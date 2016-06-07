
public class Urlify {
	/* Complexity O(n^2)-- Correct though
	public static char[] urlifyString(char[] str, int len){
	for(int i=0;i<len;i++){
		if(str[i]==' ' ){
			//insert %20
			//move the chars to right
			try{
			for(int j=len+1;j>=i+2;j--){
				str[j]=str[j-2];
			}
			str[i]='%';
			str[i+1]='2';
			str[i+2]='0';
			}
			catch(Exception e){
				System.out.println(e);
				return null;
			}
		}
	}
	return str;
}
*/
	//Gayle Laakman Solution--Copied
	public static void replaceSpaces(char[] str, int trueLength) {
		int spaceCount = 0, index, i = 0;
		for (i = 0; i < trueLength; i++) {
			if (str[i] == ' ') {
				spaceCount++;
			}
		}
		index = trueLength + spaceCount * 2 -1 ; //index for the last position
		System.out.println(index+ "  "+ trueLength);
		//if (trueLength < str.length) str[trueLength] = '\0'; //'\0' is the null terminator is used in c++ to depict end of string
		System.out.println(str.length);
		for (i = trueLength - 1; i >= 0; i--) {
			if (str[i] == ' ') {
				str[index] = '0';
				str[index - 1] = '2';
				str[index - 2] = '%';
				index = index - 3;
			} else {
				str[index] = str[i];
				index--;
			}
		}
	}
}
