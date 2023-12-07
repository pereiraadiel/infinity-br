import { Global, Module } from '@nestjs/common';
import { HashProvider } from '../providers/hash.provider';

@Global()
@Module({
  providers: [HashProvider],
  exports: [HashProvider],
})
export class HashModule {}
