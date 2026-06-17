export const validate = (schema) => {
  return (req, res, next) => {
    const result = schema.safeParse(req.body);
    if (result.success == false) {
      return res.status(400).json({'message':'Invalid credentials!'})
    }
    next();
  };
};
