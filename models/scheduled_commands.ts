/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {scheduled_commandsInstance, scheduled_commandsAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<scheduled_commandsInstance, scheduled_commandsAttribute>('scheduled_commands', {
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING(150),
			allowNull: false
		},
		command: {
			type: DataTypes.STRING(150),
			allowNull: false
		},
		arguments: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		cron_expression: {
			type: DataTypes.STRING(150),
			allowNull: false
		},
		last_execution: {
			type: DataTypes.DATE,
			allowNull: false
		},
		last_return_code: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		log_file: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		priority: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		execute_immediately: {
			type: DataTypes.INTEGER(1),
			allowNull: false
		},
		disabled: {
			type: DataTypes.INTEGER(1),
			allowNull: false
		},
		locked: {
			type: DataTypes.INTEGER(1),
			allowNull: false
		}
	}, {
		tableName: 'scheduled_commands'
	});
};
