/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {event_resourcesInstance, event_resourcesAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<event_resourcesInstance, event_resourcesAttribute>('event_resources', {
		event_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'event',
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
		tableName: 'event_resources'
	});
};
