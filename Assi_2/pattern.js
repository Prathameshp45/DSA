let n = 5;
let pat = "";
for(i=0;i<=n;i++)
    {
        for(j=1;j<=i;j++)
            {
                pat +="*";
            }
            pat += "\n"
    }
    console.log(pat);