// palindrome problem

let str="naman"
let N=str.length;
let count=0;
    for(i=0;i<N;i++){
        if(str[i]!==str[(N-1)-i]){
            flag=true;
        }
    } 
if(count==1){
    console.log("No")
}else{
    console.log("Yes")
}


