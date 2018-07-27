var gameManager = {
  stores: {
    Wood : 1000,
    Stone : 50,
    Iron : 0,
    pop: 0
  },
  tools: {
    Axe: 'none',
    Pickaxe: 'none'
  },
  craft: {

  },
  build: {
    House: {
      buildMSG: 'Erected a House.',
      cost: {
        Wood: 300,
        Stone: 0,
        Iron: 0,
        pop: 0
      }
    },
    Farm: {
      buildMSG: 'Built a farm.',
      cost: {
        Wood: 400,
        Stone: 80,
        Iron: 0,
        pop: 4
      }
    },
    Quarry: {
      buildMSG: 'Opened a quarry.',
      cost: {
        Wood: 300,
        Stone: 0,
        Iron: 200,
        pop: 10
      }
    },
    Mine: {
      buildMSG: 'Founded a mine.',
      cost: {
        Wood: 150,
        Stone: 300,
        Iron: 200,
        pop: 20
      }
    },
    Stone_Axe: { cost: { Wood: 0,
                         Stone: 50,
                         Iron: 0,
                         pop: 0},
              buildMSG: 'Crafted a stone axe' },
    Stone_Pick: { cost: { Wood: 0,
                         Stone: 50,
                         Iron: 0,
                         pop: 0},
              buildMSG: 'Crafted a stone pickaxe' },
    Iron_Axe:  { cost:{ Wood: 0,
                         Stone: 50,
                         Iron: 100,
                         pop: 0},
              buildMSG: 'Crafted an iron axe' },
    Iron_Pick:  { cost:{ Wood: 0,
                         Stone: 0,
                         Iron: 150,
                         pop: 0},
              buildMSG: 'Crafted an iron pickaxe' }
  },
  wood: {
    harvMsg: 'Chopped some lumber.',
    harvMsgNoTool: 'Gathered some fallen tree limbs.'
  },
  stone: {
    harvMsg: 'Quarried some stone.',
    harvMsgNoTool: 'Gathered some loose stones.'
  },
  iron: {
    harvMsg: 'Mined some Iron.',
    harvMsgNoTool: 'Need a pickaxe.'
  },
  notEnough: 'Not enough resources'
};

//make this object more easily accessible
var $RS = gameManager;
