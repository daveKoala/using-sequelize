/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {notificationInstance, notificationAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<notificationInstance, notificationAttribute>('notification', {
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		enable_notification: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0'
		},
		send_time: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		timezone: {
			type: DataTypes.STRING(150),
			allowNull: false,
			defaultValue: 'Europe/London'
		},
		last_sent: {
			type: DataTypes.DATE,
			allowNull: true
		},
		notification_types: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		tableName: 'notification'
	});
};
