
var r=5;

for(var i=1;i<=r;i++)
{
    for(var j=1;j<=r-i;j++)
    {
        document.write("&nbsp")
        
    }
    for(var j=1;j<=i;j++)
    {
        if(i==1|| j==1||i==r||j==r)
        {
            document.write("*")
        }else{
            document.write("&nbsp;&nbsp;&nbsp;&nbsp;")
        }
    }
    for(var j=1;j<=i-1;j++)
    {
        
        if(i==1|| j==1||i==r||j==r)
        {
            document.write("*")
        }else{
            document.write("&nbsp;")
        }
    }
    
    document.write("\n </br>")
}
