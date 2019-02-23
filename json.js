var json =

(function () {
        var json = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': 'https://script.google.com/macros/s/AKfycbxE9d2SujhfVFGmtHsezCjdvPR011jPwCl1uiGm2bmwl2fFxBk/exec',
            'dataType': 'json',
            'success': function (data) {
                json = data;
            }
        });
        console.log(json)
        return json;
    })(); 