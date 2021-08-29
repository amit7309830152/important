public class HelloWorld{

    public static void main(String []args){
       int arr[] = {1,2,3,4,5};
        int min=arr[0],max=arr[0];
        int minp=0, maxp=0;
        int max_sum=0,min_sum= 0;
       for(int i=0;i<arr.length;i++) {
           if(arr[i]<min) {
               min = arr[i];
               minp=i;
           }
           if(arr[i]>max) {
               max = arr[i];
               maxp=i;
           }
        }
        
        for(int i=0;i<arr.length;i++) {
            if(maxp != i) {
            max_sum +=arr[i]; 
            }
            if(minp != i) {
                min_sum +=arr[i];
            }
        }
        // System.out.println(min_sum);
        // System.out.println(max_sum);
        // System.out.println(minp);
        // System.out.println(maxp);
        System.out.println(min_sum+" "+max_sum);
    }
}
