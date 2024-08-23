import { Injectable } from '@nestjs/common';
import { Aluno } from './domain/aluno';
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

  buscarPorEmail(email: string): Aluno {
    return this.alunos.find((aluno) => aluno.email === email);
  }
}