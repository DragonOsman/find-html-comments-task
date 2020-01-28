"use strict";

const str = `... <!-- My -- comment
test --> ..  <!----> ..
`;

alert(str.match(/(?=<!--)([\s\S]*?)-->/g));
