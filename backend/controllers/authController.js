const { clerkId, username, email } = req.body;

const user = new User({ clerkId, username, email });
