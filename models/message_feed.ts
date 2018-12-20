/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {message_feedInstance, message_feedAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<message_feedInstance, message_feedAttribute>('message_feed', {
		id: {
			type: DataTypes.CHAR(36),
			allowNull: false,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		locked: {
			type: DataTypes.INTEGER(1),
			allowNull: false
		},
		context: {
			type: DataTypes.STRING(255),
			allowNull: false
		}
	}, {
		tableName: 'message_feed'
	});
};
