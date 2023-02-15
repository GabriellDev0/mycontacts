// Repositories ele apenas executa determinada tarefa,
// Não está preocupado se vai dar erro ou algo do tipo
// Como por exemplo: Buscar o findALL(), ele quer os contatos e nada mais
// Se o banco de dados tiver off ou algo do tipo, ai não é com ele,
// Ele não trata erros.
const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Gabriel',
    email: 'gabrielldev0@gmail.com',
    phone: '98996132730',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Jose',
    email: 'jose123@gmail.com',
    phone: '23242525',
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve) => {
      resolve(
        contacts.find((contact) => contact.id === id),
      );
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactsRepository();
