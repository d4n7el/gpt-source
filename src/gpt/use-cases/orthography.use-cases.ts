import OpenAI from 'openai';
import { OrthographyDto } from '../dtos';
import { contextOrthography } from '../const/context-orthography';

interface Options {
  openAI: OpenAI;
  orthographyDto: OrthographyDto;
}

export const orthographyUseCase = async ({
  openAI,
  orthographyDto,
}: Options) => {
  const completion = await openAI.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: contextOrthography,
      },
      {
        role: 'user',
        content: orthographyDto.prompt,
      },
    ],
    model: 'gpt-3.5-turbo',
  });

  return {
    message: orthographyDto.prompt,
    completionID: completion.id,
    content: JSON.parse(completion.choices[0].message.content),
  };
};
