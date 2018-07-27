// stop that dang carousel from moving on its own
$('.carousel').carousel({interval: false});
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
        var thing = $(this).text();
        build(thing);


    } else if ($(this).attr('data') == 'check') {
        if ($(this).is(":contains('Resources')")) {
          var list = JSON.stringify($RS.stores);
          alert('You have' + ' ' + list);
        } else if ($(this).is(":contains('Town')")){

        }

    }
    $('#notify').prepend('<div>' + Msg + '</div>')
});
// endless if/then statements uniquely made for each button click became too much to manage, the if/thens --
// will remain for now but this should simplfy managing the craftable cost and stores relationship

function build(thing) {
  var build = $RS.build[thing];
  var storeMod = {};
		var cost = build.cost;
		for(var i in cost) {
			var have = $RS.stores[i];
			if(have < cost[i]) {

        $('#notify').prepend('<div>' + $RS.notEnough + '</div>')
        return;
			} else {
				storeMod[i] = have - cost[i];
			}

    }
    $RS.stores = storeMod;
    Msg = build.buildMSG;
    if (Msg == 'Crafted a stone axe'){$RS.tools.Axe = 'stone'};
    if (Msg == 'Crafted a stone pickaxe'){$RS.tools.Pickaxe = 'stone'};
    if (Msg == 'Crafted an iron axe'){$RS.tools.Axe = 'iron'};
    if (Msg == 'Crafted an iron pickaxe'){$RS.tools.Pickaxe = 'iron'};
    console.log(storeMod);
    $('#notify').prepend('<div>' + Msg + '</div>')
  // pull in data of the selected button
  // access stores data
  // access cost data
  //compare stores to cost
};


//disable harvest buttons for short period so player cannot spam



// clear the overflow text in notify to fix memory issues during extended play times
