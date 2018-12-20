/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {cohort_wallInstance, cohort_wallAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<cohort_wallInstance, cohort_wallAttribute>('cohort_wall', {
		wall_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'wall',
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
		tableName: 'cohort_wall'
	});
};
