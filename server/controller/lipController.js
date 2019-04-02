const lipColors = require('../data/data.json');
let myLipColors = [];
let id = 12;

module.exports = {
  lipRead: (req, res, next) => {
    res.status(200).send(lipColors);
  },

  lipCreate: (req, res, next) => {
    const { name, img_path } = req.body;
    const newLipColor = {
      id,
      name,
      img_path
    };
    console.log('endPointHit');
    myLipColors.push(newLipColor);
    id++;
    res.status(200).send(myLipColors);
  },

  lipUpdate: (req, res, next) => {},

  lipDelete: (req, res, next) => {
    const { id } = req.params;
    let index = myLipColors.findIndex(lipColor => lipColor.id === parseInt(id));

    if (index !== -1) {
      myLipColors.splice(index, 1);
      res.status(200).send(myLipColors);
    } else {
      res.status(404).send('ID could not be found');
    }
  }
};
