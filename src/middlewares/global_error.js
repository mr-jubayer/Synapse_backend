const globalError = (err, req, res, next) => {
  const message = err.message ?? "Internal Server Error";
  const status = err.status ?? 500;

  return res.status(status).send(message);
};

export { globalError };
