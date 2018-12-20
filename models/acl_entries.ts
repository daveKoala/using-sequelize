/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {acl_entriesInstance, acl_entriesAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<acl_entriesInstance, acl_entriesAttribute>('acl_entries', {
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		class_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			references: {
				model: 'acl_classes',
				key: 'id'
			}
		},
		object_identity_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true,
			references: {
				model: 'acl_object_identities',
				key: 'id'
			}
		},
		security_identity_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			references: {
				model: 'acl_security_identities',
				key: 'id'
			}
		},
		field_name: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		ace_order: {
			type: DataTypes.INTEGER(5).UNSIGNED,
			allowNull: false
		},
		mask: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		granting: {
			type: DataTypes.INTEGER(1),
			allowNull: false
		},
		granting_strategy: {
			type: DataTypes.STRING(30),
			allowNull: false
		},
		audit_success: {
			type: DataTypes.INTEGER(1),
			allowNull: false
		},
		audit_failure: {
			type: DataTypes.INTEGER(1),
			allowNull: false
		}
	}, {
		tableName: 'acl_entries'
	});
};
