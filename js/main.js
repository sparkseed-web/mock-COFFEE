
// 穴埋め形式です。空いている箇所を埋めてスクーススクロールを実装してください
$(function () {
  /*=================================================
  スムーススクロール
  ===================================================*/
  // ページ内のリンクをクリックした時に動作する
  $('a[href^="#"]').click(function () {
    // クリックしたaタグのリンクを取得
    let href = $(this).attr("href");
    // ジャンプ先のid名をセット hrefの中身が#もしくは空欄なら,htmlタグをセット
    let target = $(href == "#" || href == "" ? "html" : href);
    // ページトップからジャンプ先の要素までの距離を取得
    let position = target.offset().top;
    // animateでスムーススクロールを行う   ページトップからpositionだけスクロールする
    // 600はスクロール速度で単位はミリ秒  swingはイージングのひとつ
    $("html, body").animate({ scrollTop: position }, 600, "swing");
    // urlが変化しないようにfalseを返す
    return false;
  });
});
/* 



  // ページ内のリンクをクリックした時に動作する
  $('a[href^="#"]').click(function () {

    $("html, body").animate({ scrollTop: position }, 600, "swing");
    // urlが変化しないようにfalseを返す
    return false;
  });
});

いつ
href属性を持つaタグをクリックしたとき

何を
画面全体を

どうする
animate({ scrollTop: position }, 600, "swing");

ボタンをクリックしたときの地点　　scrollTop
から
押したリンク先　　position
まで
○○秒で　 600
どんな運動で
スクロールする　"swing"

押したリンク先　　position

結局押されたリンク先ってどこにあるの？？(距離)
そもそもリンク先はいつも変わるから変わるたび取ってくる必要があるよね？？(要素自体)

    let href = $(this).attr("href");
    // ジャンプ先のid名をセット hrefの中身が#もしくは空欄なら,htmlタグをセット
    let target = $(href == "#" || href == "" ? "html" : href);
    // ページトップからジャンプ先の要素までの距離を取得
    let position = target.offset().top; */
