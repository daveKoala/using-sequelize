/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {roles_permissionsInstance, roles_permissionsAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<roles_permissionsInstance, roles_permissionsAttribute>('roles_permissions', {
		role_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'role',
				key: 'id'
			}
		},
		permission_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'permission',
				key: 'id'
			}
		}
	}, {
		tableName: 'roles_permissions'
	});
};
