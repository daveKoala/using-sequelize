/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {tilesInstance, tilesAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<tilesInstance, tilesAttribute>('tiles', {
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
		icon_top: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true,
			references: {
				model: 'file',
				key: 'id'
			}
		},
		icon_bottom: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true,
			references: {
				model: 'file',
				key: 'id'
			}
		},
		background_image_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true,
			references: {
				model: 'file',
				key: 'id'
			}
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		title: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		content: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		button_label: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		button_url: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		background_colour: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		background_picker: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		background_picker_tab: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		hidden: {
			type: DataTypes.INTEGER(1),
			allowNull: false
		}
	}, {
		tableName: 'tiles'
	});
};
