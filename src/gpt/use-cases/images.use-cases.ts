import OpenAI from 'openai';
import { ImageDto } from '../dtos';

interface Options {
  openAI: OpenAI;
  imageDto: ImageDto;
}

export const imagesUseCase = async ({ openAI, imageDto }: Options) => {
  const response = await openAI.images.generate({
    model: 'dall-e-2',
    prompt: imageDto.prompt,
    n: 1,
    size: imageDto.size ?? '256x256',
  });

  return {
    url: response.data[0].url,
  };
};
