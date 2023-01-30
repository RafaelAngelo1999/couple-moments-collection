# couple-moments-collection

![couple-moments-collection](https://user-images.githubusercontent.com/61028628/215619422-8168b58e-2984-4e64-8cd6-8a6614f7774a.gif)

Este [Projeto](https://rafaelangelo1999.github.io/couple-moments-collection/) projeto tem como objetivo criar uma simulação de raspadinha para casais que desejam coletar e guardar recordações de momentos especiais juntos. A ideia é que o casal possa "raspar" a raspadinha virtual para revelar uma data ou evento específico, como um aniversário de namoro ou uma viagem planejada, e depois salvar essa recordação em um álbum virtual compartilhado entre eles. O projeto incluiria a criação de uma interface amigável para que o casal possa criar e personalizar suas próprias raspadinhas, bem como um mecanismo para garantir que os eventos sejam sorteados aleatoriamente para manter a surpresa e a emoção. informações importantes:

- [x] Data de Conclusão
- [x] Drive de arquivos
- [x] Filtro por Nome
- [x] Filtro por Status
- [x] Imagem Referencia

### Bibliotecas externas de UI utilizadas
* [@mui-material](https://www.npmjs.com/package/@mui/material) : Biblioteca de componentes personalizados
* [iconify](https://www.npmjs.com/package/iconify) : Biblioteca de icons

### Configuração do ambiente/constantes

No diretorio: ```src\_mock\blog.js``` existem algumas constantes de configurações para personalizar a raspadinha. OBS.: Existe alguns dados fake que seram utilizados no futuro como upgrade do projeto

```sh
{
    id: faker.datatype.uuid(),
    cover: `/assets/images/backgrounds/comida-mexicana.png`,
    title: 'Comer Comida Mexicana',
    createdAt: new Date('2023', '00', '01'),
    date: 0,
    urlDrive: '',
    comment: faker.datatype.number(),
    share: faker.datatype.number(),
    favorite: faker.datatype.number(),
    author: {
      name: faker.name.fullName(),
      avatarUrl: `/assets/images/avatars/red.png`,
    },
    finish: false,
  },
```
### Comandandos scripts

## Getting started

- Recomendado `node js 16.x` e `npm 6+`. (sugestão v16.15.0)
- Instalar dependências: `npm install` / `yarn install`
- Inicie o projeto: `npm run start` / `yarn start`

##### `npm start`
Executa o aplicativo no modo de desenvolvimento.
Abra [http://localhost:3000](http://localhost:3000) para visualizá-lo no navegador.

A página será recarregada se você fizer edições.
Você também verá erros de lint no console.

##### `npm test`
Executa os tests da aplicação.
Os testes serão executados.
Você também verá erros/asserts no console.
    
##### `npm run deploy`
Executa o script de deploy da aplicação.
Você deve ter feito algumas configurações para conseguir publicar aplicação no seu servidor
### Atualmente publicado no [GitHub](https://rafaelangelo1999.github.io/couple-moments-collection/)

## Contact us

Email Us: rafaelangelowow@gmail.com
