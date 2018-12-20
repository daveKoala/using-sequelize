/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {email_templateInstance, email_templateAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<email_templateInstance, email_templateAttribute>('email_template', {
		key: {
			type: DataTypes.STRING(100),
			allowNull: false,
			primaryKey: true
		},
		organisation_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'organisation',
				key: 'id'
			}
		},
		template: {
			type: DataTypes.STRING(100),
			allowNull: false,
			primaryKey: true
		}
	}, {
		tableName: 'email_template'
	});
};
