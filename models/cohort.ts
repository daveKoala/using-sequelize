/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {cohortInstance, cohortAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<cohortInstance, cohortAttribute>('cohort', {
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		programme_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true,
			references: {
				model: 'programme',
				key: 'id'
			}
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		properties: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		message_feed_id: {
			type: DataTypes.CHAR(36),
			allowNull: true,
			references: {
				model: 'message_feed',
				key: 'id'
			},
			unique: true
		},
		context: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: 'cohort'
		},
		colour: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: '#999999'
		}
	}, {
		tableName: 'cohort'
	});
};
