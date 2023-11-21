const extendHex = (shortHex) => {
  // write your code here
	let newstr = "#";
	for(let i = 1; i<shortHex.length; i++)
		{
			let ch = shortHex.charAt(i);
			for(let l = 0; l<2; l++)
				{
					newstr += ch;
				}
		}
	// console.log(newstr);
	return newstr;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
