'use client';

import { AudioInfo } from './AudioInfo';
import { AudioPlayer } from './AudioPlayer';
import { useFetchAudio } from './hooks/useFetchAudio';
import { FC, Fragment } from 'react';
import { PLACEHOLDER_WITHOUT_TITLE } from '@/mocks/audiobooks.mock';

export interface IAudioDetail {
  id: string;
}
export const AudioDetail: FC<IAudioDetail> = ({ id }) => {
  const { data } = useFetchAudio({ id });
  const audiobook = data?.data;

  return (
    <div className="w-full h-full flex flex-col gap-3 justify-between">
      {audiobook && audiobook.audio_url && (
        <Fragment>
          <AudioInfo
            title={
              !audiobook.title ? PLACEHOLDER_WITHOUT_TITLE : audiobook.title
            }
            transcription={audiobook.transcription}
          />
          <AudioPlayer
            audioSrc={audiobook.audio_url}
            audioDuration={audiobook.duration}
          />
        </Fragment>
      )}
    </div>
  );
};
