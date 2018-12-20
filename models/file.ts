/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {fileInstance, fileAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<fileInstance, fileAttribute>('file', {
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		parent_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true,
			references: {
				model: 'file',
				key: 'id'
			}
		},
		reference: {
			type: DataTypes.STRING(200),
			allowNull: false
		},
		mime_type: {
			type: DataTypes.STRING(150),
			allowNull: false
		},
		bytes: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true
		},
		context: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		variation: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		status: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		folder: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		deletedAt: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'file'
	});
};
