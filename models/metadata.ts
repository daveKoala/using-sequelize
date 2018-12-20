/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {metadataInstance, metadataAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<metadataInstance, metadataAttribute>('metadata', {
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		file_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true,
			references: {
				model: 'file',
				key: 'id'
			}
		},
		meta_key: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		meta_value: {
			type: DataTypes.TEXT,
			allowNull: false
		}
	}, {
		tableName: 'metadata'
	});
};
