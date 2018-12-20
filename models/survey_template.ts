/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {survey_templateInstance, survey_templateAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<survey_templateInstance, survey_templateAttribute>('survey_template', {
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		organisation_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true,
			references: {
				model: 'organisation',
				key: 'id'
			}
		},
		name: {
			type: DataTypes.STRING(150),
			allowNull: false
		}
	}, {
		tableName: 'survey_template'
	});
};
