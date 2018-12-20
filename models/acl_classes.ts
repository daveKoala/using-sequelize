/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {acl_classesInstance, acl_classesAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<acl_classesInstance, acl_classesAttribute>('acl_classes', {
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		class_type: {
			type: DataTypes.STRING(200),
			allowNull: false,
			unique: true
		}
	}, {
		tableName: 'acl_classes'
	});
};
