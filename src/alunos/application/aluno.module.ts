import { Module } from '@nestjs/common';
import { AlunoController } from '../presenter/http/aluno.controller';
import { AlunoService } from './aluno.service';

@Module({
  controllers: [AlunoController],
  providers: [AlunoService],
})
export class AlunoModule {}
