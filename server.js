import 'dotenv/config';
import express from 'express';
import session from 'express-session';
import bcrypt from 'bcryptjs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Mock user data (replace with database in production)
const users = [
  {
    id: 1,
    username: 'demo',
    password: '$2a$10$IpwiF1tRx0mXXxnprRZxoeZ6LY6zhRkaw6.1.An78ebUnauCskF/a',
    name: 'Demo User',
    email: process.env.DEMO_USER_EMAIL,
    role: 'User',
  },
];

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(
  session({
    secret: process.env.SESSION_SECRET ?? 'your-secret-key',
    resave: false,
    saveUninitialized: false,
  })
);

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'views'));

// Middleware to check if user is authenticated
const isAuthenticated = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.redirect('/login');
  }
};

// Routes
app.get('/', (req, res) => {
  res.redirect(req.session.user ? '/profile' : '/login');
});

app.get('/login', (req, res) => {
  if (req.session.user) {
    res.redirect('/profile');
    return;
  }
  res.render('login', { error: null });
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = users.find((user) => user.email === email);
    const isValidPassword =
      user && (await bcrypt.compare(password, user.password));

    if (isValidPassword) {
      req.session.user = { id: user.id, email: user.email };
      res.redirect('/profile');
      return;
    }

    res.render('login', { error: 'Invalid email or password' });
  } catch (error) {
    console.error('Login error:', error);
    res.render('login', { error: 'An error occurred during login' });
  }
});

app.get('/profile', isAuthenticated, (req, res) => {
  const user = users.find((user) => user.id === req.session.user.id);
  res.render('profile', { user });
});

app.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/login');
  });
});

app.get('/sso-login', (req, res) => {
  if (process.env.SSO_ENABLED !== 'true') {
    res.redirect('/login');
    return;
  }
  res.render('sso-login', { error: null });
});

app.post('/sso-login', (req, res) => {
  if (process.env.SSO_ENABLED !== 'true') {
    res.redirect('/login');
    return;
  }

  const { email } = req.body;
  const [, domain] = email.split('@');

  res.render('sso-login', {
    error: `SSO login is not implemented in this demo. Domain ${domain} is allowed for SSO.`,
  });
});

const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => {
  console.log(
    `Server is running in ${
      process.env.NODE_ENV ?? 'development'
    } mode on port ${PORT}`
  );
});
