'use strict';

const date = new Date();
const h = date.getHours();
if (h <= 4){
  document.write("眠いねぇ " ) ;
} else if (h <= 10 ) {
  document.write("おはよう! "  );
} else if (h <=14) {
  document.write("こんにちは〜 "  );
} else if (h <=18) {
  document.write("元気〜 " );
} else {
  document.write("こんばんは〜 "  );
};
