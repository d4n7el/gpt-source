import { Injectable } from '@nestjs/common';
import { orthographyUseCase } from './use-cases';
import { OrthographyDto } from './dtos';
import OpenAI from 'openai';

@Injectable()
export class GptService {
  private openAI = new OpenAI({
    apiKey: process.env.API_KEY_OPEN_AI_,
  });
  async orthographyCheck(orthographyDto: OrthographyDto) {
    return orthographyUseCase({ openAI: this.openAI, orthographyDto });
  }
}
