// Your code here.
//loop of size(row) -> loop of size/2(char pairs in row)
//--If row%2==0, start with #_, else_# 
//modify to work with odd numbers for size
let chessboard='';
let size=8;
for(r=1;r<=size;r++){
  for(c=1;c<=size/2;c++){//size=size+2?
    if(r%2==0)
      chessboard+='# ';
    else
      chessboard+=' #';
  }
  chessboard+='\n';
}
console.log(chessboard);