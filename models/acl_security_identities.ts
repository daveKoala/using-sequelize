/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {acl_security_identitiesInstance, acl_security_identitiesAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<acl_security_identitiesInstance, acl_security_identitiesAttribute>('acl_security_identities', {
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		identifier: {
			type: DataTypes.STRING(200),
			allowNull: false
		},
		username: {
			type: DataTypes.INTEGER(1),
			allowNull: false
		}
	}, {
		tableName: 'acl_security_identities'
	});
};
