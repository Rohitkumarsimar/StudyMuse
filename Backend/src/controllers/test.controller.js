// created test controller
export async function testRoute(req, res, next) {
  res.status(200).json({ test: "successfully executed." });
}
