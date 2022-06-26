import{ con } from './connection.js'

export async function buscarHeroi(nome) {
const comando =
    
    `SELECT id_super_hero    id,
     nm_super_hero	         nome,
     ds_super_poder          poder,
     bt_voa                  voa
     FROM  tb_super_hero
     WHERE nm_super_hero like ?`;

const [linhas] = await con.query(comando,[`%${nome}%`]);
return linhas;

}

export async function listarTodosHerois() {
    const comando = `SELECT  id_super_hero    id,
	    nm_super_hero     nome,
	    ds_super_poder   poder,
	    bt_voa           voa
        FROM  tb_super_hero`;

    const [linhas] = await con.query(comando);
    return linhas;

}
