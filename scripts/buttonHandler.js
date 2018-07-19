// stop that dang carousel from moving on its own
$('.carousel').carousel({interval: false})

$('.carousel-item').on('click', 'button', function(event){
  var gather =  $(event.target).attr("data-gather");
    if (gather == 'wood') {
        var Msg = $RS.wood.harvMsg;
        $('#notify').prepend('<div>' + Msg + '</div>');
    } else if (gather == 'brick') {
        var Msg = $RS.brick.harvMsg;
        $('#notify').prepend('<div>' + Msg + '</div>');
    } else if (gather == 'stone') {
        var Msg = $RS.stone.harvMsg;
        $('#notify').prepend('<div>' + Msg + '</div>');
    }
});
