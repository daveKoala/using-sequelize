/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {event_locationInstance, event_locationAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<event_locationInstance, event_locationAttribute>('event_location', {
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		programme_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true,
			references: {
				model: 'programme',
				key: 'id'
			}
		},
		name: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		location: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		latitude: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		longitude: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		tableName: 'event_location'
	});
};
