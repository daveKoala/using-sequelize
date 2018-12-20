/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {user_group_rolesInstance, user_group_rolesAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<user_group_rolesInstance, user_group_rolesAttribute>('user_group_roles', {
		group_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'groups',
				key: 'id'
			}
		},
		role_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'role',
				key: 'id'
			}
		}
	}, {
		tableName: 'user_group_roles'
	});
};
