
//Didn't Understand--Tough
public class RotateMatrix {

	//The idea is to move columns to rows and rows to columns without using an extra array(in place)
	//Transitions a[last][first]-->a[first][first](Layer 1)//similar for all layers.
	//a[first][first]-->a[first][last]
	//a[first][last]-->a[last][last]
	//a[last][last]-->a[last][first]
	//..same with 
	//	a[first][j]=a[last-offset][first]
	//a[j][last]=a[first][j]
	//a[last][last-offset]=a[j][last]
	//a[last-offset][first]=a[last][last-offset]
	public static void rotate(int[][] mat){ //mat is a square matrix NxN 
		if(mat.length!=mat[0].length) //Ideally check it for all
			{System.out.println("Error not a Square matrix");
			return;
			}
		//No. of Layers =n/2
		
		int n=mat.length;
		for(int i=0; i<n/2;i++){		//For each layer
			int first=i;
			int last= n-1-first;
			
			for(int j=first;j<last;j++){
				
				int offset=j-first; //
				int temp=mat[first][j];
				mat[first][j]=mat[last-offset][first];
				mat[last-offset][first]=mat[last][last-offset];
				mat[last][last-offset]=mat[j][last];
				mat[j][last]=temp;
			}
			
		}
	}
	public static void display(int[][]mat){
		for(int i=0;i<mat.length;i++){
			for(int j=0;j<mat[i].length;j++){
				System.out.print(mat[i][j]+" ");
			}
			System.out.println();
		}
		
	}
}
