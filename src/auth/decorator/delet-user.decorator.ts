/* eslint-disable prettier/prettier */
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const DeleteUser = createParamDecorator(
    (data: string | undefined, ctx: ExecutionContext) => {
        const request: Express.Request = ctx.switchToHttp().getRequest()
        return request.user;
        
    },
);