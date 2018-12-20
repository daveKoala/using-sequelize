/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {survey_testInstance, survey_testAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<survey_testInstance, survey_testAttribute>('survey_test', {
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
		organisation_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			references: {
				model: 'organisation',
				key: 'id'
			}
		},
		token: {
			type: DataTypes.STRING(150),
			allowNull: false,
			unique: true
		},
		name: {
			type: DataTypes.STRING(150),
			allowNull: false
		},
		description: {
			type: DataTypes.STRING(150),
			allowNull: true
		},
		properties: {
			type: DataTypes.TEXT,
			allowNull: false
		}
	}, {
		tableName: 'survey_test'
	});
};
