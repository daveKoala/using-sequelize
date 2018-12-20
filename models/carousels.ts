/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {carouselsInstance, carouselsAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<carouselsInstance, carouselsAttribute>('carousels', {
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
		name: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		is_hidden: {
			type: DataTypes.INTEGER(1),
			allowNull: false
		},
		background_image: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true,
			references: {
				model: 'file',
				key: 'id'
			}
		},
		background_colour: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'carousels'
	});
};
