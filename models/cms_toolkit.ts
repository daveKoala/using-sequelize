/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {cms_toolkitInstance, cms_toolkitAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<cms_toolkitInstance, cms_toolkitAttribute>('cms_toolkit', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		cms_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'cms_content',
				key: 'id'
			}
		},
		toolkit_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true,
			references: {
				model: 'toolkits',
				key: 'id'
			}
		},
		sort_order: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		featured: {
			type: DataTypes.INTEGER(1),
			allowNull: false
		}
	}, {
		tableName: 'cms_toolkit'
	});
};
