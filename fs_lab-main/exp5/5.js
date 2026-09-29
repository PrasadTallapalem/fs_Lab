// Print dot triangle (do while loop)
let rows = 5;
let i = 1;

do {
  let line = "";
  let j = 1;
  do {
    line += ". ";
    j++;
  } while (j <= i);
  console.log(line);
  i++;
} while (i <= rows);