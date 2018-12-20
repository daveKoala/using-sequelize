/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {message_feed_messageInstance, message_feed_messageAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<message_feed_messageInstance, message_feed_messageAttribute>('message_feed_message', {
		message_feed_id: {
			type: DataTypes.CHAR(36),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'message_feed',
				key: 'id'
			}
		},
		message_id: {
			type: DataTypes.CHAR(36),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'message',
				key: 'id'
			}
		}
	}, {
		tableName: 'message_feed_message'
	});
};
