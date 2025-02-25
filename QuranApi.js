const fetchAyah = async (ayah) => {
  const data = await fetch(`http://api.alquran.cloud/v1/ayah/${ayah}/`);
  const response = await data.json();
  return response.data.text;
}

export default fetchAyah;