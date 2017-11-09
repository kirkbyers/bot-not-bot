import * as jwt from 'jsonwebtoken';

async function createUserToken(user: any) {
  const secret = process.env.JWT_SECRET as string;
  const token = jwt.sign(user, secret);
  return token;
}

export {
  createUserToken,
};
