import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';

// import { PassportModule } from '@nestjs/passport/dist';

import { JwtStrategy } from './strategies/jwt.strategy';

import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Module({
  imports: [],
  providers: [
    JwtStrategy,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
  exports: [],
})
export class AuthModule {}
