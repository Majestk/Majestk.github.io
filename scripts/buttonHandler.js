// stop that dang carousel from moving on its own
$('.carousel').carousel({interval: false})
// Main Button Handler
$('.carousel-item').on('click', 'button', function(event){
  var Msg = '';

    if ($(this).attr('data') == 'gather') {
        if ($(this).is(":contains('Wood')")) {
          if ($RS.tools.Axe == 'none') {
            Msg = $RS.wood.harvMsgNoTool;
            $RS.stores.Wood += 5;
          } else {
            Msg = $RS.wood.harvMsg;
            $RS.stores.Wood += 10;
          }
        } else if ($(this).is(":contains('Stone')")) {
          if ($RS.tools.Pickaxe == 'none') {
            Msg = $RS.stone.harvMsgNoTool;
            $RS.stores.Stone += 5;
          } else {
            Msg = $RS.stone.harvMsg;
            $RS.stores.Stone += 10;
          }
        } else if ($(this).is(":contains('Iron')")) {
          if ($RS.tools.Pickaxe == 'none') {
            Msg = $RS.iron.harvMsgNoTool;
          } else if ($RS.tools.Pickaxe == 'stone') {
            Msg = $RS.iron.harvMsg;
            $RS.stores.Iron += 5;
          } else if ($RS.tools.Pickaxe == 'iron')
            Msg = $RS.iron.harvMsg;
            $RS.stores.Iron += 10;
        }


    } else if ($(this).attr('data') == 'build'){
      if ($(this).is(":contains('House')")) {
        if ($RS.stores < $RS.HouseCost) {
          Msg = $RS.HouseCost.buildMSG;
        } else {
          Msg = $RS.notEnough;
        }
      }
    } else if ($(this).attr('data') == 'craft') {
        if ($(this).is(":contains('Stone Axe')")){

      } else if ($(this).is(":contains('Stone Pick')")) {

      } else if ($(this).is(":contains('Iron Axe')")) {

      } else if ($(this).is(":contains('Iron Pick')")) {

      }

    } else if ($(this).attr('data') == 'check') {
        if ($(this).is(":contains('Resources')")) {

        } else if ($(this).is(":contains('Town')")){

        }

    }
    $('#notify').prepend('<div>' + Msg + '</div>')
});


// clear the overflow text in notify to fix memory issues during extended play times
