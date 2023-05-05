import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const CurrentUser = createParamDecorator<undefined, ExecutionContext>(
  (_, context) => {
    const request = context.switchToHttp().getRequest();
    return request.user;
  },
);
