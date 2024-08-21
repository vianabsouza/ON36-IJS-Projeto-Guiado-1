import { Injectable } from '@nestjs/common';
import { Aluno } from './entities/aluno.entity';
import { uuid } from 'uuidv4';

@Injectable()
export class AlunoRepository {
  private alunos: Aluno[] = [];

  constructor() {}

  criar(aluno: Aluno): Aluno {
    aluno.id = uuid();
    this.alunos.push(aluno);
    return aluno;
  }

  listar(): Aluno[] {
    return this.alunos;
  }
}