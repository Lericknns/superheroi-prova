insert into tb_super_hero(nm_super_hero,ds_super_poder,bt_voa)
     value('saitama','um soco',false);
     
insert into tb_super_hero(nm_super_hero,ds_super_poder,bt_voa)
     value('all might','one for all',false);
     
insert into tb_super_hero(nm_super_hero,ds_super_poder,bt_voa)
     value('Tatsumaki','telepatia',true); 
     
insert into tb_super_hero(nm_super_hero,ds_super_poder,bt_voa)
     value('homen-aranha','soltar teia, escalar paredes e sentido aranha',false);
     
insert into tb_super_hero(nm_super_hero,ds_super_poder,bt_voa)
     value('shazan','a força de Hércules, o poder de Zeus, a coragem de Aquiles e a velocidade do Mercúrio',true);
     
insert into tb_super_hero(nm_super_hero,ds_super_poder,bt_voa)
     value('thor','mjolnir',true);
     
insert into tb_super_hero(nm_super_hero,ds_super_poder,bt_voa)
     value('batman','não tem',false);
     
insert into tb_super_hero(nm_super_hero,ds_super_poder,bt_voa)
     value('lanterna verde','anel do poder',true);
     
 SELECT   id_super_hero   id,
	    nm_super_hero	 nome,
	    ds_super_poder   poder,
	    bt_voa           voa
   FROM  tb_super_hero
   WHERE nm_super_hero;
 
 SELECT  id_super_hero    id,
	    nm_super_hero     nome,
	    ds_super_poder   poder,
	    bt_voa           voa
   FROM  tb_super_hero;