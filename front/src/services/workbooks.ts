import { BASE_PATH } from '@/constants';

export const generateAudio = async (file: File) => {
  const formdata = new FormData();
  formdata.append('file', file);

  try {
    const url = new URL(`${BASE_PATH}/audiobooks`);
    const res = await fetch(url, {
      method: 'POST',
      body: formdata,
    });
    const response = await res.json();
    return response;
  } catch (error) {
    throw new Error('Generate audio api error.');
  }
};

export interface IMyAudioBooks {
  search: string;
  page: number;
  size: number;
}
export const getMyAudioBooks = async ({
  search,
  page,
  size,
}: IMyAudioBooks) => {
  try {
    const searchParams = new URLSearchParams(
      JSON.parse(
        JSON.stringify({
          search,
          page,
          size,
        })
      )
    );
    const url = new URL(`${BASE_PATH}/audiobooks?${searchParams}`);
    const rawResponse = await fetch(url);
    const jsonResponse = await rawResponse.json();
    return jsonResponse;
  } catch (error) {
    console.log('test', error);
    throw new Error('Error getting workbooks.');
  }
};

export const getAudioBook = async (id: string) => {
  try {
    const url = new URL(`${BASE_PATH}/audiobooks/${id}`);
    const rawResponse = await fetch(url);
    const jsonResponse = await rawResponse.json();

    return jsonResponse;
  } catch (error) {
    throw new Error('Error getting one workbook.');
  }
};
