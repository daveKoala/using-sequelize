/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {activityInstance, activityAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<activityInstance, activityAttribute>('activity', {
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
			type: DataTypes.STRING(50),
			allowNull: false
		},
		type: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		properties: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		content: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		duration: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		self_book: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		pre_work: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		cancellation_terms: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		total_places_available: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		minimum_participants: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		joining_instructions: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		send_evaluation_form: {
			type: DataTypes.INTEGER(1),
			allowNull: false
		},
		evaluation_form_send_time: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		survey_key: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		show_activity_link: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '1'
		},
		deletedAt: {
			type: DataTypes.DATE,
			allowNull: true
		},
		pdf_instruction_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true,
			references: {
				model: 'file',
				key: 'id'
			},
			unique: true
		},
		additional_info: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		send_seven_day_reminder: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '1'
		},
		send_three_day_reminder: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0'
		},
		send_one_day_reminder: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '1'
		}
	}, {
		tableName: 'activity'
	});
};
