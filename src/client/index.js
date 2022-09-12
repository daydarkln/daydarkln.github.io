import axios from 'axios';
import uuid from 'uuid-random';

const getCategories = () => {
  return axios
    .get('https://api.jsonbin.io/v3/b/631f1e945c146d63ca98ad76')
    .then(({ data }) => data.body);
};

const saveCategory = async (category) => {
  const { categories } = await getCategories();
  try {
    axios.put('https://api.jsonbin.io/v3/b/631f1e945c146d63ca98ad76', {
      headers: {
        'Content-Type': 'application/json',
        'X-Bin-Versioning': false,
      },
      body: {
        categories: [
          ...categories,
          {
            id: uuid(),
            ...category,
          },
        ],
      },
    });
  } catch (e) {
    console.error(e);
  }
};

export { getCategories, saveCategory };
