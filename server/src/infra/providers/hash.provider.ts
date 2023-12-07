import { Injectable } from '@nestjs/common';
import { hash as genHash, compare } from 'bcrypt';

@Injectable()
export class HashProvider {
  async hash(plain: string) {
    return genHash(plain, 8);
  }

  async verify(plain: string, hash: string) {
    return compare(plain, hash);
  }
}
