/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {task_runner_statusInstance, task_runner_statusAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<task_runner_statusInstance, task_runner_statusAttribute>('task_runner_status', {
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING(150),
			allowNull: false
		}
	}, {
		tableName: 'task_runner_status'
	});
};
