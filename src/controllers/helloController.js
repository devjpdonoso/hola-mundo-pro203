const hello = (req, res) => {
  res.json({ message: '¡Hola Mundo desde el controlador!' });
};

module.exports = {
  hello,
};
