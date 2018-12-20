/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {menu_itemInstance, menu_itemAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<menu_itemInstance, menu_itemAttribute>('menu_item', {
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		parent: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true,
			references: {
				model: 'menu_item',
				key: 'id'
			}
		},
		programme_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true,
			references: {
				model: 'programme',
				key: 'id'
			}
		},
		route: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		display_text: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		is_global: {
			type: DataTypes.INTEGER(1),
			allowNull: false
		},
		menu_roles: {
			type: DataTypes.TEXT,
			allowNull: false
		}
	}, {
		tableName: 'menu_item'
	});
};
