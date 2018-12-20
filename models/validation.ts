/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {validationInstance, validationAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<validationInstance, validationAttribute>('validation', {
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		context: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		validation_type: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		rules: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'validation'
	});
};
