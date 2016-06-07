
public class StringRotation {
	//to check if str2 is a rotation of str1 i.e. if str2 is substring of str1+str1
public static boolean stringRotate(String str1, String str2){
	if((str2+str2).contains(str1)){
		System.out.println("Yes, it is a rotation");
		return true;
	}
	else
		System.out.println("No, Not a rotation");
	return false;
}
}
