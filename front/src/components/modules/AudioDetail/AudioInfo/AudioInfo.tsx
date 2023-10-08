import { Image } from '@nextui-org/react';
import { IMAGE_PLACEHOLDER } from '../../AudioCollectionList/AudioCard';
import { FC } from 'react';

export interface IAudioInfo {
  title: string;
  transcription: string;
}
export const AudioInfo: FC<IAudioInfo> = ({ title, transcription }) => {
  return (
    <div>
      <div>
        <h2 className="font-bold text-[30px] text-primary">{title}</h2>
        <div className="max-w-[300px] m-auto">
          <Image
            alt="Album cover"
            className="object-cover"
            height={100}
            shadow="none"
            src={IMAGE_PLACEHOLDER}
            width="100%"
          />
        </div>
      </div>

      <div className="max-h-[250px] overflow-auto">{transcription}</div>
    </div>
  );
};
