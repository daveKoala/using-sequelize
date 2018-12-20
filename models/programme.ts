/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {programmeInstance, programmeAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<programmeInstance, programmeAttribute>('programme', {
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
		programme_cohort_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true,
			references: {
				model: 'cohort',
				key: 'id'
			}
		},
		title: {
			type: DataTypes.STRING(200),
			allowNull: true
		},
		base_url: {
			type: DataTypes.STRING(80),
			allowNull: false
		},
		support_url: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		cancellation_modifier: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		slug: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		invite_email_intro_text: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		email_header_image_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true,
			references: {
				model: 'file',
				key: 'id'
			},
			unique: true
		},
		email_footer_image_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true,
			references: {
				model: 'file',
				key: 'id'
			},
			unique: true
		},
		on_boarding_video: {
			type: DataTypes.STRING(200),
			allowNull: true
		},
		security_certificate: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		notification_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true,
			references: {
				model: 'notification',
				key: 'id'
			},
			unique: true
		},
		deletedAt: {
			type: DataTypes.DATE,
			allowNull: true
		},
		isLegacyPortal: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: '0'
		}
	}, {
		tableName: 'programme'
	});
};
