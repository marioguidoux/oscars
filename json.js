var json =

(function () {
        var json = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': 'https://script.google.com/macros/s/AKfycbwfibJpj0A9c55u4gs5H7zHzx6p6M3ID70zu908/exec',
            'dataType': 'json',
            'success': function (data) {
                json = data;
            }
        });
        console.log(json)
        return json;
    })(); 
