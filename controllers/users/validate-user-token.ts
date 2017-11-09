import * as jwt from 'jsonwebtoken';

function validateUserToken(token: string) {
  try {
    jwt.verify(token, process.env.JWT_SECRET as string);
    return true;
  } catch (err) {
    return false;
  }
}

export {
  validateUserToken,
};
