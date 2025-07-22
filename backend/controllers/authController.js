import User from '../models/User.js';

export const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).json({ error: 'Username or email already exists' });
    }

    const newUser = new User({ username, email, password });
    await newUser.save();
    res.status(201).json({ message: 'Registration successful' });
  } catch (err) {
    console.error('Registration error:', err);
    res.status(500).json({ error: 'Server error during registration' });
  }
};

export const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await User.findOne({ username });

    if (!existingUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (existingUser.password !== password) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    res.status(200).json({
      message: 'Login successful',
      user: {
        id: existingUser._id,
        username: existingUser.username,
        email: existingUser.email,
      },
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ error: 'Server error during login' });
  }
};
