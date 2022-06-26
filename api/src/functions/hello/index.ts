import schema from './schema';
import { handlerPath } from '../../libs/handler-resolver';

export const helloPost = {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'post',
        path: 'hello',
        request: {
          schemas: {
            'application/json': schema,
          },
        },
      },
    },
  ],
};

export const helloGet = {
  handler: `${handlerPath(__dirname)}/handler.mainGet`,
  events: [
    {
      http: {
        method: 'get',
        path: 'hello',
        request: {
          schemas: {
            'application/json': schema,
          },
        },
      },
    },
  ],
};
