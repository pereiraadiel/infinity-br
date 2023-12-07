export const AuthConstant = {
  jwt: {
    secret: process.env.APP_AUTH_SECRET,
  },
} as const;
