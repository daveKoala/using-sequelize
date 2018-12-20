/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {survey_auto_saveInstance, survey_auto_saveAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<survey_auto_saveInstance, survey_auto_saveAttribute>('survey_auto_save', {
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		survey_user_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			references: {
				model: 'survey_user',
				key: 'id'
			},
			unique: true
		},
		answers: {
			type: DataTypes.TEXT,
			allowNull: false
		}
	}, {
		tableName: 'survey_auto_save'
	});
};
