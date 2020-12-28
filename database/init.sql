CREATE TABLE available_colours (
	id serial primary key,
	name varchar(60) not null,
	hexcode varchar(7) not null
);

CREATE TABLE my_palette (
	id serial primary key,
	colour_id int references "available_colours" not null
);