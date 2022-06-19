import{ con } from './connection.js'

export async function buscarHeroi(nome) {
    const comando =
    `
     SELECT id_super_hero    id,
     nm_super_hero	         nome,
     ds_super_poder          poder,
     bt_voa                  disponivel
     FROM tb_filme
     WHERE nm_filme like ?
     ` ;
     const [linhas] = await con.query(comando,[`%${nome}%`]);
     return linhas;

}