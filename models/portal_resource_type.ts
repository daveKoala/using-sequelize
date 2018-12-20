/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {portal_resource_typeInstance, portal_resource_typeAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<portal_resource_typeInstance, portal_resource_typeAttribute>('portal_resource_type', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		icon: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		type_slug: {
			type: DataTypes.STRING(255),
			allowNull: false
		}
	}, {
		tableName: 'portal_resource_type'
	});
};
