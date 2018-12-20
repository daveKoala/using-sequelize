/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {portal_resourceInstance, portal_resourceAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<portal_resourceInstance, portal_resourceAttribute>('portal_resource', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		type_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'portal_resource_type',
				key: 'id'
			}
		},
		file_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true,
			references: {
				model: 'file',
				key: 'id'
			},
			unique: true
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		context: {
			type: DataTypes.STRING(255),
			allowNull: false
		}
	}, {
		tableName: 'portal_resource'
	});
};
