
// logic 1 soal 1
document.write('<br>')

for (let y = 1; y < 10; y++) {
      for (let x = 1; x < 10; x++) {
            if (y == x ) { 
                  document.write(' + ')
            }
            else {
                  document.write(' ~ ')
            }
      }

      document.write('<br>')
}

// let=variabel

// logic 1 soal 2
document.write('<br>')

for (let y = 1; y < 10; y++) {
      for (let x = 1; x < 10; x++) {
            if (y + x == 10 ) { 
                  document.write(' + ')
            }
            else {
                  document.write(' ~ ')
            }
      }

      document.write('<br>')
}

// logic 1 soal 3
document.write('<br>')

for (let y = 1; y < 10; y++) {
      for (let x = 1; x < 10; x++) {
            if (y + x == 10 || y == x ) { 
                  document.write(' + ')
            }
            else {
                  document.write(' ~ ')
            }
      }
  
      document.write('<br>')
}

// logic 1 soal 4
document.write('<br>')

for (let y = 1; y < 10; y++) {
      for (let x = 1; x < 10; x++) {
            if (y == 5|| x == 5)  { 
                  document.write(' + ')
            } else if ( y + x == 10 || y == x) {
                  document.write(' + ')
            }
            else {
                  document.write(' ~ ')
            }
      }

      document.write('<br>')
}

// logic 1 soal 5
document.write('<br>')

for( let y = 1; y < 10; y ++) {
      for (let x = 1; x < 10; x++){
            if( x <= y ) {
                  document.write(' + ')
      }
            else {
                  document.write(' ~')
            }
      }
      document.write( '<br>' )      
      }

// logic 1 soal 6
document.write('<br>')

for (let y = 1; y < 10; y++) {
      for (let x = 1; x < 10; x++) {
            if (y + x >= 10 ) { 
                  document.write(' + ')
            }
            else {
                  document.write(' ~ ')
            }
      }

      document.write('<br>')
}

// logic 1 soal 7 
document.write('<br>')
 

for (let y = 1; y < 10; y++) {
      for (let x = 1; x < 10; x++) {
                       if ((y + x >= 10 && y >= x) || (y + x <= 10 && y <= x)) { 
                  document.write(' + ')
            }
            else {
                  document.write(' ~ ')
            }
      }

      document.write('<br>')
}

// logic 1 soal 8  
document.write('<br>')

for (let y = 1; y < 10; y++) {
      for (let x = 1; x < 10; x++) {
            if ((y + x >= 10 && y <= x) || (y + x <= 10 && y >= x)) { 
                  document.write(' + ')
            }
            else {             
                  document.write(' = ')
            }
      }

      document.write('<br>')
}
