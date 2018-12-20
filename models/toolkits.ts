/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {toolkitsInstance, toolkitsAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<toolkitsInstance, toolkitsAttribute>('toolkits', {
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		pdf_link_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true,
			references: {
				model: 'file',
				key: 'id'
			},
			unique: true
		},
		title: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		slug: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		content: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		hints: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		icon_image_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true,
			references: {
				model: 'file',
				key: 'id'
			},
			unique: true
		},
		featured: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0'
		}
	}, {
		tableName: 'toolkits'
	});
};
