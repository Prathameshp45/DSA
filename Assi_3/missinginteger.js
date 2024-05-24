const arr=[1,2,4,6,3,7,8];
arr1 = arr.sort();
for(i=0;i<arr1.length-1;i++)
    {
        if(arr1[i+1] - arr1[i]!=1)
            {
                console.log(arr1[i]+1);
            }
    }


