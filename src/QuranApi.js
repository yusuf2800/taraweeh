export const getAudios = async (id, chapter) => {
  const data = await fetch(
    `https://api.quran.com/api/v4/chapter_recitations/${id}/${chapter}`
  );

  const res = await data.json();

  return res;
};

