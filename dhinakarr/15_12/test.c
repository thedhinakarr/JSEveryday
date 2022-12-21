#include<stdio.h>
int main(){
  int number ;
  int n;
  printf("Enter the nmber");
  scanf("%d",&n);
for(int i=0;i<n;i++){
  number =1;
  for(int j=i;j<n;j++){
    printf("%d",number);
    number++;
  }
  printf("\n");
}
  
}