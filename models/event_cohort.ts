/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {event_cohortInstance, event_cohortAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<event_cohortInstance, event_cohortAttribute>('event_cohort', {
		event_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'event',
				key: 'id'
			}
		},
		cohort_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'cohort',
				key: 'id'
			}
		}
	}, {
		tableName: 'event_cohort'
	});
};
