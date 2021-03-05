import axios from 'axios';
import uuid from 'uuid-random';

const getCategories = () => {
  return axios
    .get('https://api.jsonbin.io/b/6041088b0866664b1088ad64/latest')
    .then(({ data }) => data.body);
};

const saveCategory = async (category) => {
  const { body } = await getCategories();
  try {
    axios.put('https://api.jsonbin.io/b/6041088b0866664b1088ad64', {
      headers: {
        'Content-Type': 'application/json',
        'X-Bin-Versioning': false,
      },
      body: {
        categories: [
          ...body.categories,
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
