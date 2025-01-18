import User from "../model/Users.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'


const signUpController = async (req, res) => {
    try {
      
        const { username, email, password } = req.body;
        
        const existingUser = await User.findOne({
             email: email 
        });

        if (existingUser) {
            return res.status(400).json({ error: 'User already exists! Login instead' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });

        await newUser.save();
        return res.status(201).json({ ok: 'User created successfully!' });
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: error.message });
    }
}

// Login Route
const signinController = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Find the user by email
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ error: 'User not found!' });
      }
  
      // Compare passwords
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(400).json({ error: 'Invalid password!' });
      }
  
      // Generate a JWT token
      const token = jwt.sign({ id: user._id, email: user.email }, process.env.SECRET_KEY, {
        expiresIn: '1h', // Token expires in 1 hour
      });
  
      return res.status(200).json({ ok: 'Login successful!', token });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };

export { signUpController, signinController }