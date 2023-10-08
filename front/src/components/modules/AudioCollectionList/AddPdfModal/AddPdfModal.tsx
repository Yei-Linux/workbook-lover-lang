import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  Spinner,
  useDisclosure,
} from '@nextui-org/react';
import { Fragment, useState } from 'react';
import { DragUI, IFilesDroped } from '../../shared/DragUI/DragUI';
import { useGenerateAudioBook } from '../hooks/useGenerateAudioBook';

export const AddPdfModal = () => {
  const [files, setFiles] = useState<IFilesDroped[]>([]);
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { handleGenerate, isLoading } = useGenerateAudioBook();

  const handleChangeFiles = (filesChanged: IFilesDroped[]) => {
    setFiles(filesChanged);
  };

  const handleSubmit = async () => {
    const fileToUpload = files?.[0];
    if (!fileToUpload) return;

    await handleGenerate(fileToUpload.file);
    onClose();
    setFiles([]);
  };

  return (
    <Fragment>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                {isLoading && (
                  <div className="top-0 left-0 h-full w-full fixed flex justify-center items-center z-20">
                    <Spinner />
                  </div>
                )}
                <DragUI
                  files={files}
                  onChange={handleChangeFiles}
                  onSubmit={handleSubmit}
                />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
      <Button
        radius="full"
        className="bg-gradient-to-tr from-green-400 to-blue-500 text-white shadow-lg"
        onClick={onOpen}
      >
        Add PDF
      </Button>
    </Fragment>
  );
};
