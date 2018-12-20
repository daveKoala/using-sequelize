/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {task_runnerInstance, task_runnerAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<task_runnerInstance, task_runnerAttribute>('task_runner', {
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		scheduled_task_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true,
			references: {
				model: 'scheduled_task',
				key: 'id'
			}
		},
		task_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			references: {
				model: 'task',
				key: 'id'
			}
		},
		status_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			references: {
				model: 'task_runner_status',
				key: 'id'
			}
		},
		time_start: {
			type: DataTypes.DATE,
			allowNull: false
		},
		time_end: {
			type: DataTypes.DATE,
			allowNull: false
		},
		context: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		properties: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		tableName: 'task_runner'
	});
};
