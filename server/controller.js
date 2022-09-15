const closet = ['shirt', 'jeans', 'sneakers', 'hoodie'];

module.exports = {
  getCompliment: (req, res) => {
    const compliments = [
      "Gee, you're a smart cookie!",
      'Cool shirt!',
      'Your Javascript skills are stellar.',
    ];

    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
  },
  getCloset: (req, res) => {
    res.status(200).send(closet);
  },

  addDrip: (req, res) => {
    let { drip } = req.body;
    closet.push(drip);

    res.status(200).send(closet);
  },

  deleteDrip: (req, res) => {
    let index = req.params.index;

    weapons.splice(index, 1);

    res.status(200).send(closet);
  },

  editDrip: (req, res) => {
    let index = req.params.index;
    let { item } = req.body;

    closet.splice(index, 1, item);

    res.status(200).send(closet);
  },
};
