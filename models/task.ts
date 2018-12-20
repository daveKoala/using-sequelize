/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {taskInstance, taskAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<taskInstance, taskAttribute>('task', {
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		task_class: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		args: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		active: {
			type: DataTypes.INTEGER(1),
			allowNull: false
		}
	}, {
		tableName: 'task'
	});
};
