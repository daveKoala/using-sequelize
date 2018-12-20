/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {oauth_clientInstance, oauth_clientAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<oauth_clientInstance, oauth_clientAttribute>('oauth_client', {
		id: {
			type: DataTypes.INTEGER(11),
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
		random_id: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		redirect_uris: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		secret: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		allowed_grant_types: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		name: {
			type: DataTypes.STRING(100),
			allowNull: false
		}
	}, {
		tableName: 'oauth_client'
	});
};
