'use strict';
const answers = [
  '世界を動かそうと思ったら、まず自分自身を動かそう。あなたには力があるゆら〜。',
  '知識は善だね、知ることから始めてみよう。知識はあなたを大きくするゆら〜。',
  '知らないということを知ることで成長していくことができるゆら〜。',
  'なんでも褒めてくれる人は素敵だね〜。でも間違いを指摘してくれる人も優しい人ゆら〜。',
  '素敵な恋をすると、ポエマーになるゆら〜。',
  '小さい事でも良く出来た事を積み重ねたいよね〜。一歩ずつ進もうゆら〜。',
  '疲れた時は美味しい果物を食べて、ゆっくり休むのもいいことだゆら〜。',
  '物静かに、楽天的な生き方をしていると年齢は関係ないゆらね〜。',
  'ひとつのものごとでも、見方によっては良いことだったり悪いことだったりするゆら〜。',
  '運命は自分で選び出していくものだゆら〜。',
  '人生は40歳を過ぎてからがおもしろくなるゆら〜。',
  '流行は時代遅れになるから、自分が好きなことをしたほうが良いと思うゆら〜。',
  '身をもって示すことがリーダーシップゆらね〜。リーダーは辛いゆらね〜。',
  '50歳の顔にはあなたの生き方が現れてくるゆらね〜、どんなお顔にしたいゆら〜？',
  '自分の頭で考え続け、そしてそれを声に出すことは勇気が必要だゆら〜。',
  'ひょっとしたら運命の人と出会えるかもしれないから、今日もできるだけかわいくしようゆら〜。',
  '一人でいることを大切にする時もあっていいと思うゆら〜。',
  '新しいアイデアを思いついても、成功するまでは変人と呼ばれることもあるゆら〜。成功するまでがんばろうゆら〜。',
  '人にはいろいろな面があるゆら〜。明るい暗い・・人間は複雑だゆら〜。',
  '人に教えることほど、勉強になることはないと言われているゆら〜。アウトプットが重要だゆら〜。',
  'すべては奇跡だゆら〜、例えば、あなたが存在することは奇跡だゆら〜。ゆらゆらも奇跡〜。',
  '人生には愛が必要だゆら〜。自分自身を愛することからはじめるゆら〜。',
  'アイディアが固まったらその先は考えて考えてかたちを決めていくゆら〜。考えるゆら〜。',
  '計画のない目標は、ただの願い事にすぎないゆら〜。計画は大事ゆらね〜。',
  'みんな赤ちゃんだったゆらね〜、みんなかわいかったゆらね〜。もちろん今もかわいいゆらね〜。',
  '意味がないこともたくさんあるゆら〜。意味がないことも楽しいゆら〜。',
  '自分に期待してみようゆら〜、あなたにできることはたくさんあるゆら〜。',
  'みんなそれぞれいろいろな才能はあるゆら〜、努力して自分の才能を伸ばすゆら〜。',
  '心で見なくちゃ、ものごとはよく見えないゆら〜、肝心なことは目に見えないゆら〜、星の王子様ゆら〜。',
  '一歩ずつ着実に立ち向かうことが、何かを達成することにつながるゆら〜。'
];

/**
 * ゆらゆらをクリックした時間の（秒）からメッセージを返す関数
 * @pram{seconds} seconds  秒　30パターンにまとめる
 * @return{string} 海底から拾ってきたメッセージ
 */

document.getElementById("yurayura").onclick = function () {
  let clickTime = new Date();
  let seconds = clickTime.getSeconds();
  if (seconds >= 30) {
    seconds = seconds - 30;
  };
  let result = answers[seconds];
  document.getElementById("message").innerHTML
    = `探してきたよ〜何度でもクリックしてね〜`;

  document.getElementById("resultimage").src = "./img/kai.png";

  document.getElementById("result").innerHTML
    = `${result}`;
};