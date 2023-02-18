// Repositories ele apenas executa determinada tarefa,
// Não está preocupado se vai dar erro ou algo do tipo
// Como por exemplo: Buscar o findALL(), ele quer os contatos e nada mais
// Se o banco de dados tiver off ou algo do tipo, ai não é com ele,
// Ele não trata erros.
const { v4 } = require('uuid');

const db = require('../../database/index');

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
  async findAll() {
    const rows = await db.query(`
      SELECT * FROM contacts
    `);
    return rows;
  }

  async findById(id) {
    const [rows] = await db.query(`
      SELECT * FROM contacts WHERE
      id = $1
    `, [id]);
    return rows;
  }

  async findByEmail(email) {
    const [rows] = await db.query(`
      SELECT * FROM contacts WHERE
      email = $1
    `, [email]);
    return rows;
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }

  async create({
    name, email, phone, category_id,
  }) {
    const [row] = await db.query(`
      INSERT INTO contacts(name, email, phone, category_id)
      VALUES($1, $2, $3, $4)
      RETURNING *
    `, [name, email, phone, category_id]);

    return row;
  }

  update(id, {
    name, email, phone, category_id,
  }) {
    return new Promise((resolve) => {
      const updatedContact = {
        id,
        name,
        email,
        phone,
        category_id,
      };
      contacts = contacts.map((contact) => (
        contact.id === id ? updatedContact : contact
      ));
      resolve(updatedContact);
    });
  }
}

module.exports = new ContactsRepository();
