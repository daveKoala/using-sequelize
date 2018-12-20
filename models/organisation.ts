/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {organisationInstance, organisationAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<organisationInstance, organisationAttribute>('organisation', {
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		key: {
			type: DataTypes.STRING(150),
			allowNull: false,
			unique: true
		},
		name: {
			type: DataTypes.STRING(150),
			allowNull: false
		},
		active: {
			type: DataTypes.INTEGER(1),
			allowNull: false
		},
		primary_colour: {
			type: DataTypes.STRING(150),
			allowNull: false
		},
		secondary_colour: {
			type: DataTypes.STRING(150),
			allowNull: false
		},
		background_image_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true,
			references: {
				model: 'file',
				key: 'id'
			},
			unique: true
		},
		logo_image_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true,
			references: {
				model: 'file',
				key: 'id'
			},
			unique: true
		},
		support_url: {
			type: DataTypes.STRING(150),
			allowNull: true
		},
		sso: {
			type: DataTypes.INTEGER(1),
			allowNull: false
		},
		domain_name: {
			type: DataTypes.STRING(150),
			allowNull: true
		}
	}, {
		tableName: 'organisation'
	});
};
