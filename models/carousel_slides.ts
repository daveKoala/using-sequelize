/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {carousel_slidesInstance, carousel_slidesAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<carousel_slidesInstance, carousel_slidesAttribute>('carousel_slides', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		carousel_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'carousels',
				key: 'id'
			}
		},
		title: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		body: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		icon: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true,
			references: {
				model: 'file',
				key: 'id'
			}
		}
	}, {
		tableName: 'carousel_slides'
	});
};
