const { requireAuth } = require('@clerk/clerk-sdk-node');

app.post('/api/cart/add', requireAuth, (req, res) => {
  const userId = req.auth.userId;
  console.log('Clerk user ID:', userId);
});
