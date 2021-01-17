const database = require('../helpers/database');
const { off } = require('../helpers/database');

const schema = {
	1: `
	CREATE TABLE IF NOT EXISTS usuarios (
			id SERIAL,
			email TEXT NOT NULL,
			senha TEXT NOT NULL,
			nome TEXT NOT NULL
	);`,
	2: `
	CREATE TABLE IF NOT EXISTS tools (
		id SERIAL,
		title TEXT NOT NULL,
		link TEXT NOT NULL,
		description TEXT NOT NULL,
		tags TEXT []
);
	`
};

const drop = async (tableName) => {
	if (tableName) {
		await database.query(`DROP TABLE ${tableName}`);
		console.log('Tabela dropada!');
	}
};

const up = async (number = null) => {
	if (!number) {
		for (const value in schema) {
			await database.query({ text: schema[value] });
		}
	} else {
		await database.query({ text: schema[number] });
	}
	console.log('Migração rodada!');
	return;
};

/**
 * Rode up() ou drop("nomeDaTabela");
 */

// drop(table).then(() => console.log("Ok")).catch(error => console.log("Migração Negada: " + error));
up().then(
	() => console.log("Ok")
).catch
	(error => console.log("Migração Negada: " + error)
).finally(
	() => process.exit(0)
);

