import * as service from "../services";

export const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({
        err: 1,
        mes: "Missing payload",
      });
    console.log(req.body);
    const response = await service.register(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      mes: "Internal server error",
    });
  }
};
