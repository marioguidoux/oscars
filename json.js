var json =

(function () {
        var json = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': 'https://script.google.com/macros/s/AKfycbzpea6zwMyciBQXafyh3dwlHUB8BDnj9oyVtcRcXkzGsIVC57cz/exec',
            'dataType': 'json',
            'success': function (data) {
                json = data;
            }
        });
        console.log(json)
        return json;
    })(); 
