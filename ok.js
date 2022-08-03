function piramidaInponow(n) {
  for (var i = 0; i < Math.ceil(n/2); i++) {
   let tamp1 = [];
   for (var e = 0; e < n; e++) {
     if (e >= (Math.ceil(n/2)-1) - i && e <= (Math.ceil(n/2)-1) + i) {
       tamp1.push('*')
     }else {
       tamp1.push(' ')
     }
   }
   console.log(tamp1.join(''));
  }
}
piramidaInponow(9)