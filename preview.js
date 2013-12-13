$(function() {
    //ファイルが選択されたり選択が変更されたりしたら発動
    $('input[type=file]').on('change', function() {

        //表示済みのプレビューがあったらいったん消す
        $('img.preview').remove();

        //multiple の場合は複数のファイルがあるかもしれないので全部まわす
        $.each(this.files, function(index, file) {
            //画像ファイルに対してだけプレビューを実行
            if (file.type.match(/^image\/*/)) {
                var reader = new FileReader();

                //ファイルが読み込まれたらこれが発動
                reader.onload = (function() {
                    //プレビュー画像の要素をつくって挿入する
                    var preview = $('<img>').addClass('preview').insertAfter('#file');

                    //プレビューの src にデータを流し込む
                    preview.attr('src', reader.result);
                });

                //ファイルを Data URI scheme で読み込む
                reader.readAsDataURL(file);
            }
        })
    });
});
