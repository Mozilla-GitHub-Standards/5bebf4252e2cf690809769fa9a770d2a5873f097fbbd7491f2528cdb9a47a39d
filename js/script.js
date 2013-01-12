$(function(){

    $beats = $('#beats');
    var beats = [];
    $.ajax({
        type: 'GET',
        url: '/data/data.json',
        dataType: 'json',
        success: function(data) {
            $.each(data, function(i, beat) {
                beats.push(beat);
            });
        },
        data: {},
        async: false
    });

    $('#beat-tmpl').tmpl(beats).appendTo($beats);

});