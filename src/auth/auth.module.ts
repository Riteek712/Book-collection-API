import { Module } from '@nestjs/common';
import {ConfigService} from '@nestjs/config'
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {MongooseModule} from '@nestjs/mongoose'
import { UserSchema } from './user.schema';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule.register({defaultStrategy:'jwt'}),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) =>{
      return {
        secret: config.get<string>('JWT_SECRET'),
        signOptions: {
          expiresIn: config.get<string | number>('JWT_EXPIRE')
        }
      }
    }
    }),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema}])
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [JwtStrategy, PassportModule] // Used to pass modules so that other modules can you it.
})
export class AuthModule {}
