function segitiga4(baris) {
  let hasil = '';
  for (i = baris; i >= 1; i--) {
    hasil += " "
    for (spasi = i; spasi < baris; spasi++)
      hasil += ' ';
    for (j = 1; j <= i; j++) {
      // for (k = 1; j <= i; j++) {
      if (i == 1 || j == 5 || j == i - 4 || i == 2 * j - 1) {

        hasil += '# ';
      } else hasil +=  '* ';


    }

    hasil += '\n';
  }
  return hasil;
}
console.log(segitiga4(5));
