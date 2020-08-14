'use strict';
/**何時かによって挨拶の内容を変更する
* 0-4 眠いねぇ
* 5-10 おはよう！
* 11-14 こんにちは〜
* 15-18 元気〜
* 19-23 こんばんは〜
*/

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
