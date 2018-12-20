/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {acl_object_identity_ancestorsInstance, acl_object_identity_ancestorsAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<acl_object_identity_ancestorsInstance, acl_object_identity_ancestorsAttribute>('acl_object_identity_ancestors', {
		object_identity_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'acl_object_identities',
				key: 'id'
			}
		},
		ancestor_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'acl_object_identities',
				key: 'id'
			}
		}
	}, {
		tableName: 'acl_object_identity_ancestors'
	});
};
