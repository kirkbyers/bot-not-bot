import { NextFunction, RequestHandler, Response } from 'express';
import * as jwt from 'jsonwebtoken';

import { validateUserToken } from '../controllers';
import { Request } from '../models/extended-request';

const authenticateRoute = (req: Request, res: Response, next: NextFunction) => {
  if (!req.signedCookies.auth && !req.headers.auth) {
    return res.status(401).json('Login needed');
  }
  const authToken = req.signedCookies.auth || req.headers.auth;
  if (validateUserToken(authToken)) {
    const user = jwt.decode(authToken);
    req.user = user;
    return next();
  }
  res.clearCookie('auth');
  return res.status(401).send('Login outdated');
};

export default authenticateRoute;
