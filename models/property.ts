/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {propertyInstance, propertyAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<propertyInstance, propertyAttribute>('property', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		context: {
			type: DataTypes.STRING(30),
			allowNull: false
		},
		template: {
			type: DataTypes.TEXT,
			allowNull: false
		}
	}, {
		tableName: 'property'
	});
};
