export const logMethod = (req, res, next) => {
  console.log(req.method);
  console.log(Date());
  console.log(req.url);
  next();
};
