import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

const posts = [
  {
    id: faker.datatype.uuid(),
    cover: `https://clubeponto40.com.br/wp-content/uploads/2019/07/treino-tiro.png`,
    title: 'Estande de Tiro',
    createdAt: faker.date.past(),
    urlDrive: faker.datatype.number(),
    comment: faker.datatype.number(),
    share: faker.datatype.number(),
    favorite: faker.datatype.number(),
    author: {
      name: faker.name.fullName(),
      avatarUrl: `https://greenpng.com/wp-content/uploads/2020/09/untitleddesign_1_original-2.png`,
    },
    finish: false,
  },
  {
    id: faker.datatype.uuid(),
    cover: `https://www.infoescola.com/wp-content/uploads/2008/04/boliche_229208440.jpg`,
    title: 'Boliche',
    createdAt: faker.date.past(),
    urlDrive: faker.datatype.number(),
    comment: faker.datatype.number(),
    share: faker.datatype.number(),
    favorite: faker.datatype.number(),
    author: {
      name: faker.name.fullName(),
      avatarUrl: `https://greenpng.com/wp-content/uploads/2020/06/Fundo-verde-png-verde-floresta-300x300.png`,
    },
    finish: true,
  },
];

export default posts;
