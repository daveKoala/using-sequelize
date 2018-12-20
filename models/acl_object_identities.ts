/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {acl_object_identitiesInstance, acl_object_identitiesAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<acl_object_identitiesInstance, acl_object_identitiesAttribute>('acl_object_identities', {
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		parent_object_identity_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true,
			references: {
				model: 'acl_object_identities',
				key: 'id'
			}
		},
		class_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false
		},
		object_identifier: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		entries_inheriting: {
			type: DataTypes.INTEGER(1),
			allowNull: false
		}
	}, {
		tableName: 'acl_object_identities'
	});
};
