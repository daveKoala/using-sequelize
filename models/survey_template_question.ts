/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {survey_template_questionInstance, survey_template_questionAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<survey_template_questionInstance, survey_template_questionAttribute>('survey_template_question', {
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		survey_template_version_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			references: {
				model: 'survey_template_version',
				key: 'id'
			}
		},
		parent_question: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true,
			references: {
				model: 'survey_template_question',
				key: 'id'
			}
		},
		reference: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		label: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		hint: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		type: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		properties: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		tableName: 'survey_template_question'
	});
};
