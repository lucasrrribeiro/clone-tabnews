function status(req, res) {
  //  res.status(200).json({ status: "ok" });
  res.status(200).json({ chave: "são acima da média" });
}

export default status;

// /api/status
