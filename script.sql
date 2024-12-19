create schema extensao_cloud

create table extensao_cloud.users(
	id int auto_increment primary key,
    username varchar(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    telefone VARCHAR(100),
    created_at DATETIME default current_timestamp,
    unique(email),
    unique(username)
);

create table extensao_cloud.profiles(
    user_id INT not null,
    data_nascimento DATE,
    foto_perfil varchar(255),
    primary key(user_id),
    foreign key(user_id) references users(id) on delete cascade
);