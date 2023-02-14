// Repositories ele apenas executa determinada tarefa,
// Não está preocupado se vai dar erro ou algo do tipo
// Como por exemplo: Buscar o findALL(), ele quer os contatos e nada mais
// Se o banco de dados tiver off ou algo do tipo, ai não é com ele,
// Ele não trata erros.
const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Gabriel',
    email: 'gabrielldev0@gmail.com',
    phone: '98996132730',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }
}

module.exports = new ContactsRepository();
