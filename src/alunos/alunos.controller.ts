import { Controller, Post } from '@nestjs/common';

@Controller('alunos')
export class AlunosController {
  @Post()
  cadastrar() {
    return 'Não sei cadastrar um aluno, eu sou só um controller...';
  }
}