
function removeDuplicate(str, n)
    {
        // Used as index in the modified string
        var index = 0;
 
        // Traverse through all characters
        for (var i = 0; i < n; i++)
        {
 
            // Check if str[i] is present before it
            var j;
            for (j = 0; j < i; j++)
            {
                if (str[i] == str[j])
                {
                    break;
                }
            }
 
            // If not present, then add it to
            // result.
            if (j == i)
            {
                str[index++] = str[i];
            }
        }
         
        return str.join("").slice(str, index);
    }
 
    // Driver code
var str = "abcadeecfb".split("");
var n = str.length;
// document.write(removeDuplicate(str, n));
     

let SIZE = 26;
    function printCharWithFreq(str)
    {
        let n = str.length;
  
        let freq = new Array(SIZE);
        for(let i = 0; i < freq.length; i++)
        {
            freq[i] = 0;
        }
        for (let i = 0; i < n; i++)
            freq[str[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
  
        for (let i = 0; i < n; i++) {
  
            if (freq[str[i].charCodeAt(0) - 'a'.charCodeAt(0)] != 0) {
  
                document.write(str[i]);
                document.write(freq[str[i].charCodeAt(0) - 'a'.charCodeAt(0)] + " ");
  
                freq[str[i].charCodeAt(0) - 'a'.charCodeAt(0)] = 0;
            }
        }
    }
let str = "abcadeecfb";
printCharWithFreq(str);
