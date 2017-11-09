import { Request } from 'express';

export interface Request extends Request {
  user?: any;
}
