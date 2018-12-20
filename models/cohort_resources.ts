/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {cohort_resourcesInstance, cohort_resourcesAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<cohort_resourcesInstance, cohort_resourcesAttribute>('cohort_resources', {
		cohort_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'cohort',
				key: 'id'
			}
		},
		resource_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'portal_resource',
				key: 'id'
			}
		}
	}, {
		tableName: 'cohort_resources'
	});
};
