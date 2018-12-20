/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {survey_contextInstance, survey_contextAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<survey_contextInstance, survey_contextAttribute>('survey_context', {
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		survey_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			references: {
				model: 'survey',
				key: 'id'
			}
		},
		name: {
			type: DataTypes.STRING(300),
			allowNull: false
		},
		tag: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		properties: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		tableName: 'survey_context'
	});
};
