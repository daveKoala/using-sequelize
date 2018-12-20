/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {survey_template_versionInstance, survey_template_versionAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<survey_template_versionInstance, survey_template_versionAttribute>('survey_template_version', {
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		survey_template_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			references: {
				model: 'survey_template',
				key: 'id'
			}
		},
		version_number: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false
		},
		properties: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		properties_organisation_override: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		tableName: 'survey_template_version'
	});
};
