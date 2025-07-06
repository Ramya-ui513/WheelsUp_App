const { ClerkExpressWithAuth } = require('@clerk/clerk-sdk-node');

const clerkMiddleware = ClerkExpressWithAuth();

module.exports = clerkMiddleware;
