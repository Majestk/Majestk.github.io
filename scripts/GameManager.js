var objects = {
  stores: {
    Wood : 0,
    Stone : 0,
    Iron : 0,
    pop: 0
  },
  tools: {
    Axe: 'none',
    Pickaxe: 'none'
  },
  craftables: {
    StoneAxeCost: 50,
    StonePickCost: 50,
    IronAxeCost: 150,
    IronPickCost: 150
  },
  buildings: {
    House: {
      buildMSG: 'Erected a House.',
      cost: {
        Wood: 300,
        Stone: 200
    }
    },
    Farm: {
      buildMSG: 'Built a farm.',
      cost: {
        Wood: 400,
        Stone: 50,
        pop: 4
      }
    },
    Quarry: {
      buildMSG: 'Opened a quarry.',
      cost: {
        Wood: 300,
        pop: 10
      }
    },
    Mine: {
      buildMSG: 'Founded a mine.',
      cost: {
        Wood: 150,
        Stone: 300,
        pop: 20
      }
    },
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
  }
  notEnough: 'Not enough resources'
};

//make this object more easily accessible
var $RS = objects;
