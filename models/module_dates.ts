/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {module_datesInstance, module_datesAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<module_datesInstance, module_datesAttribute>('module_dates', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		module_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true,
			references: {
				model: 'module',
				key: 'id'
			}
		},
		cohort_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true,
			references: {
				model: 'cohort',
				key: 'id'
			}
		},
		start_date: {
			type: DataTypes.DATE,
			allowNull: false
		},
		end_date: {
			type: DataTypes.DATE,
			allowNull: false
		},
		module_number: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'module_dates'
	});
};
