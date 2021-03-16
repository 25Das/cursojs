let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

// const varA2 = varA;
// varA = varB;
// varB = varC;
// varC = varA2;

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);
