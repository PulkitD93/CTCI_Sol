import java.util.ArrayList;


public class ZeroMatrix {
	
	public static int[][] zMatrix(int[][]mat){
		ArrayList<Integer> row= new ArrayList<Integer>();
		ArrayList<Integer> col= new ArrayList<Integer>();
		for(int i=0;i<mat.length;i++){ //Stores all the zero postions in rows and cols
			for(int j=0;j<mat[0].length;j++){
				if(mat[i][j]==0){
					row.add(i);
					col.add(j);
				}
			}
		}
		for(int i: row){
			for(int j=0;j<mat[i].length;j++){
				mat[i][j]=0;
		}
		}
		for(int j: col){
			for(int i=0;i<mat.length;i++){
				mat[i][j]=0;
			}
		}
		return mat;
	}
}
