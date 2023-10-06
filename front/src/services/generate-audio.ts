export const generateAudio = async (file: File) => {
  const formdata = new FormData();
  formdata.append('file', file);

  try {
    const res = await fetch('', {
      method: 'POST',
      body: formdata,
    });

    const response = await res.json();
    return response;
  } catch (error) {
    throw new Error('Generate audio api error.');
  }
};
