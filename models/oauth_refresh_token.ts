/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {oauth_refresh_tokenInstance, oauth_refresh_tokenAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<oauth_refresh_tokenInstance, oauth_refresh_tokenAttribute>('oauth_refresh_token', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		client_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'oauth_client',
				key: 'id'
			}
		},
		user_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true,
			references: {
				model: 'user',
				key: 'id'
			}
		},
		token: {
			type: DataTypes.STRING(255),
			allowNull: false,
			unique: true
		},
		expires_at: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		scope: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'oauth_refresh_token'
	});
};
