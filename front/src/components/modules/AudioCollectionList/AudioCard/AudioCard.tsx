import { Card, CardBody, Button, Image } from '@nextui-org/react';
import { FC, useMemo } from 'react';
import { formatSecondsDuration } from './helpers';
import Link from 'next/link';

export interface IAudioCard {
  id: string;
  image?: string;
  audioBookTitle: string;
  timeSecondDuration: number;
}

export const IMAGE_PLACEHOLDER =
  'https://media.istockphoto.com/id/1292283375/vector/cartoon-cat-reading-a-book.jpg?s=612x612&w=0&k=20&c=2sOCHy6jLbLpuumQ8GpmzzUmVF-SkPqaDKXXkGq3thI=';

export const AudioCard: FC<IAudioCard> = ({
  id,
  image = IMAGE_PLACEHOLDER,
  audioBookTitle,
  timeSecondDuration,
}) => {
  const duration = useMemo(
    () => formatSecondsDuration(timeSecondDuration),
    [timeSecondDuration]
  );

  return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
      shadow="sm"
    >
      <CardBody className="p-3">
        <div className="grid grid-cols-6 sm:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="col-span-6 sm:col-span-4 flex justify-center items-center">
            <Image
              alt="Album cover"
              className="object-cover"
              height={40}
              shadow="none"
              src={image}
              width={150}
            />
          </div>

          <div className="flex flex-col col-span-6 sm:col-span-8">
            <div className="flex flex-col sm:flex-row items-center sm:justify-between items-start px-3 gap-2">
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-foreground/90 text-xl text-center sm:text-left">
                  {audioBookTitle}
                </h3>
                <p className="text-sm text-foreground/80 text-center sm:text-left">
                  {duration}
                </p>
              </div>
              <div>
                <Link href={`/${id}`}>
                  <Button radius="full" color="primary">
                    Listen
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
