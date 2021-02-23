var clipboard = new ClipboardJS('.btn-clipboard');
/* コピーが成功した時の処理 */
clipboard.on('success', function(e) {
  $('.clipboard-success').fadeIn(1000).fadeOut(1000);
});