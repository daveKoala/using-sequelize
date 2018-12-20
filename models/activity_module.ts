/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {activity_moduleInstance, activity_moduleAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<activity_moduleInstance, activity_moduleAttribute>('activity_module', {
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
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
		activity_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true,
			references: {
				model: 'activity',
				key: 'id'
			}
		},
		sort_order: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'activity_module'
	});
};
