/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {activities_completed_by_usersInstance, activities_completed_by_usersAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<activities_completed_by_usersInstance, activities_completed_by_usersAttribute>('activities_completed_by_users', {
		activity_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'activity',
				key: 'id'
			}
		},
		user_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'user',
				key: 'id'
			}
		}
	}, {
		tableName: 'activities_completed_by_users'
	});
};
