create database super_hero;
use super_hero;

create table tb_super_hero(
 id_super_hero int primary key auto_increment,
 nm_super_hero varchar(100)not null unique,
 ds_super_poder varchar(100)not null,
 bt_voa boolean not null
);