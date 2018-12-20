/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {scheduled_taskInstance, scheduled_taskAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<scheduled_taskInstance, scheduled_taskAttribute>('scheduled_task', {
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		task_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			references: {
				model: 'task',
				key: 'id'
			}
		},
		cron_expr: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		args: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		last_run: {
			type: DataTypes.DATE,
			allowNull: false
		},
		time_start: {
			type: DataTypes.DATE,
			allowNull: false
		},
		time_end: {
			type: DataTypes.DATE,
			allowNull: false
		},
		active: {
			type: DataTypes.INTEGER(1),
			allowNull: false
		}
	}, {
		tableName: 'scheduled_task'
	});
};
