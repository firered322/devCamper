exports.getBootcamps = (req, res, next) => {
  res.status(200).send("Show all bootcamps");
};

exports.getBootcamp = (req, res, next) => {
  res.status(200).send(`Get the bootcamp w/ id: ${req.params.id}`);
};

exports.createBootcamp = (req, res, next) => {
  res.status(200).send("Post bootcamps");
};

exports.updateBootcamp = (req, res, next) => {
  res.status(200).send(`Update the bootcamp w/ id: ${req.params.id}`);
};

exports.deleteBootcamp = (req, res, next) => {
  res.status(200).send(`Delete the bootcamp w/ id: ${req.params.id}`);
};
