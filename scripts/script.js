"use strict";

const str = `... <!-- My -- comment
test --> ..  <!----> ..
`;

// Find all matches of zero or more of any character between comment tags, having "any character" include 
// mulitple lines
alert(str.match(/<!--.*?-->/gs));
