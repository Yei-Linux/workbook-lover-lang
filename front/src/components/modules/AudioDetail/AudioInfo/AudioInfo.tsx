import { Image } from '@nextui-org/react';
import { IMAGE_PLACEHOLDER } from '../../AudioCollectionList/AudioCard';

export const AudioInfo = () => {
  return (
    <div>
      <div>
        <h2 className="font-bold text-[30px] text-primary">AudioBook Title</h2>
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

      <div>
        Audio Info Audio InfoAudio InfoAudio InfoAudio InfoAudio InfoAudio
        InfoAudio InfoAudio InfoAudio InfoAudio InfoAudio InfoAudio InfoAudio
        Info Audio Info Audio InfoAudio InfoAudio InfoAudio InfoAudio InfoAudio
        InfoAudio InfoAudio InfoAudio InfoAudio InfoAudio InfoAudio InfoAudio
        Info Audio Info Audio InfoAudio InfoAudio InfoAudio InfoAudio InfoAudio
        InfoAudio InfoAudio InfoAudio InfoAudio InfoAudio InfoAudio InfoAudio
        Info
      </div>
    </div>
  );
};
