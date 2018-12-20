/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {survey_answerInstance, survey_answerAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<survey_answerInstance, survey_answerAttribute>('survey_answer', {
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
		tableName: 'survey_answer'
	});
};
