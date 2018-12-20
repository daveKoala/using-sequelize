/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {eventInstance, eventAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<eventInstance, eventAttribute>('event', {
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		activity_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true,
			references: {
				model: 'activity',
				key: 'id'
			}
		},
		name: {
			type: DataTypes.STRING(150),
			allowNull: false
		},
		duration: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		event_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		properties: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		postponed: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: '0'
		},
		event_information: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		deletedAt: {
			type: DataTypes.DATE,
			allowNull: true
		},
		joining_instructions_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true,
			references: {
				model: 'file',
				key: 'id'
			}
		},
		published: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0'
		},
		timezone: {
			type: DataTypes.STRING(100),
			allowNull: false,
			defaultValue: 'Europe/London'
		},
		event_location_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true,
			references: {
				model: 'event_location',
				key: 'id'
			}
		},
		programme_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true,
			references: {
				model: 'programme',
				key: 'id'
			}
		},
		self_book: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		cancellation_terms: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		additional_info: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		location: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'event'
	});
};
