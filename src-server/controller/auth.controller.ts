import { Request, Response } from "express";

export const register = async (req: Request, res: Response) => {
  /*try {
    const { name,email, password } = req.body;
    const user = await User.create({ email, password });
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });
    res.status(201).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error registering new user. Please try again later.');
  }*/
  const { name,email, password } = req.body;
  const result = {
    name: name,
    email:email,
    password:password
  }
  res.send(result);
}
