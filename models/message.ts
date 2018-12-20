/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {messageInstance, messageAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<messageInstance, messageAttribute>('message', {
		id: {
			type: DataTypes.CHAR(36),
			allowNull: false,
			primaryKey: true
		},
		user_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			references: {
				model: 'user',
				key: 'id'
			}
		},
		parent_id: {
			type: DataTypes.CHAR(36),
			allowNull: true,
			references: {
				model: 'message',
				key: 'id'
			}
		},
		content: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		status: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		created_on: {
			type: DataTypes.DATE,
			allowNull: false
		},
		updated_on: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'message'
	});
};
