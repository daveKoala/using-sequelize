/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {messages_filesInstance, messages_filesAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<messages_filesInstance, messages_filesAttribute>('messages_files', {
		message_id: {
			type: DataTypes.CHAR(36),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'message',
				key: 'id'
			}
		},
		file_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'file',
				key: 'id'
			}
		}
	}, {
		tableName: 'messages_files'
	});
};
