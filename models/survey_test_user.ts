/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {survey_test_userInstance, survey_test_userAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<survey_test_userInstance, survey_test_userAttribute>('survey_test_user', {
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		survey_test_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			references: {
				model: 'survey_test',
				key: 'id'
			}
		},
		email: {
			type: DataTypes.STRING(150),
			allowNull: false
		},
		forename: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		surname: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		properties: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		token: {
			type: DataTypes.STRING(40),
			allowNull: false,
			unique: true
		}
	}, {
		tableName: 'survey_test_user'
	});
};
