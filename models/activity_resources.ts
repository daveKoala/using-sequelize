/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {activity_resourcesInstance, activity_resourcesAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<activity_resourcesInstance, activity_resourcesAttribute>('activity_resources', {
		activity_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'activity',
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
		tableName: 'activity_resources'
	});
};
