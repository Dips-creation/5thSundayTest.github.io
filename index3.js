var r=5;
var r1=4;

for(var i=1;i<=r;i++)
{
    for(var j=1;j<=r-i;j++)
    {
        document.write("&nbsp")
        
    }
    for(var j=1;j<=i;j++)
    {
        document.write("&nbsp*")
    }
    for(var j=1;j<=i-1;j++)
    {
        document.write("&nbsp*")
    }
    document.write("\n </br>")
}
for(var i=r1;i>=1;i--)
{
    for(var j=r1;j<=r1;j++)
    {
        document.write("&nbsp")
        
    }
    for(var j=1;j<=i;j++)
    {
        document.write("&nbsp*")
    }
    for(var j=1;j<=i-1;j++)
    {
        document.write("&nbsp*")
    }
    document.write("\n </br>")
}