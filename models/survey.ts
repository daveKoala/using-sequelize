/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {surveyInstance, surveyAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<surveyInstance, surveyAttribute>('survey', {
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
		status_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			references: {
				model: 'survey_status',
				key: 'id'
			}
		},
		name: {
			type: DataTypes.STRING(150),
			allowNull: false
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		token: {
			type: DataTypes.STRING(40),
			allowNull: false,
			unique: true
		},
		password: {
			type: DataTypes.STRING(60),
			allowNull: true
		},
		properties: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		tableName: 'survey'
	});
};
