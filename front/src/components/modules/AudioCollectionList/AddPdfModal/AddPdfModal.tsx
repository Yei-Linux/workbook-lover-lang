import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  useDisclosure,
} from '@nextui-org/react';
import { Fragment, useState } from 'react';
import { DragUI, IFilesDroped } from '../../shared/DragUI/DragUI';

export const AddPdfModal = () => {
  const [files, setFiles] = useState<IFilesDroped[]>([]);
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const handleChangeFiles = (filesChanged: IFilesDroped[]) => {
    setFiles(filesChanged);
  };

  return (
    <Fragment>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <DragUI
                  files={files}
                  onChange={handleChangeFiles}
                  onSubmit={() => {
                    onClose();
                    setFiles([]);
                  }}
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
