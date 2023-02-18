// Repositories ele apenas executa determinada tarefa,
// Não está preocupado se vai dar erro ou algo do tipo
// Como por exemplo: Buscar o findALL(), ele quer os contatos e nada mais
// Se o banco de dados tiver off ou algo do tipo, ai não é com ele,
// Ele não trata erros.
const db = require('../../database/index');

class ContactsRepository {
  async findAll(orderBy) {
    const direction = orderBy?.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await db.query(`
      SELECT * FROM contacts ORDER BY name ${direction}
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

  async delete(id) {
    const deleteOp = await db.query(`
      DELETE FROM contacts
      WHERE id = $1
    `, [id]);
    return deleteOp;
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

  async update(id, {
    name, email, phone, category_id,
  }) {
    const [row] = await db.query(`
        UPDATE contacts
        SET name = $1, email = $2, phone = $3, category_id = $4
        WHERE id = $5
        RETURNING *
      `, [name, email, phone, category_id, id]);
    return row;
  }
}

module.exports = new ContactsRepository();
