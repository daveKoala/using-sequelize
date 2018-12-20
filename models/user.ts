/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {userInstance, userAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<userInstance, userAttribute>('user', {
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		organisation_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			references: {
				model: 'organisation',
				key: 'id'
			}
		},
		forename: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		surname: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		username: {
			type: DataTypes.STRING(255),
			allowNull: true,
			unique: true
		},
		username_canonical: {
			type: DataTypes.STRING(255),
			allowNull: true,
			unique: true
		},
		email: {
			type: DataTypes.STRING(255),
			allowNull: false,
			unique: true
		},
		email_canonical: {
			type: DataTypes.STRING(255),
			allowNull: false,
			unique: true
		},
		enabled: {
			type: DataTypes.INTEGER(1),
			allowNull: false
		},
		salt: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		password: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		last_login: {
			type: DataTypes.DATE,
			allowNull: true
		},
		locked: {
			type: DataTypes.INTEGER(1),
			allowNull: false
		},
		expired: {
			type: DataTypes.INTEGER(1),
			allowNull: false
		},
		expires_at: {
			type: DataTypes.DATE,
			allowNull: true
		},
		confirmation_token: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		password_requested_at: {
			type: DataTypes.DATE,
			allowNull: true
		},
		roles: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		credentials_expired: {
			type: DataTypes.INTEGER(1),
			allowNull: false
		},
		credentials_expire_at: {
			type: DataTypes.DATE,
			allowNull: true
		},
		properties: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		timezone: {
			type: DataTypes.STRING(150),
			allowNull: false,
			defaultValue: 'Europe/London'
		},
		title: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		registered: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: '0'
		},
		one_time_use_key: {
			type: DataTypes.STRING(40),
			allowNull: true,
			unique: true
		},
		token_expiry: {
			type: DataTypes.DATE,
			allowNull: true
		},
		profile_picture_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true,
			references: {
				model: 'file',
				key: 'id'
			},
			unique: true
		},
		invited: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: '0'
		},
		disable_notifications: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: '0'
		},
		phone: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		skype: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		bio: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		user_coaches: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		portal_invites: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		dates_for_your_calender_sent: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		tableName: 'user'
	});
};
