/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {permissionInstance, permissionAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<permissionInstance, permissionAttribute>('permission', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		resource_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'resource',
				key: 'id'
			}
		},
		name: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		tableName: 'permission'
	});
};
