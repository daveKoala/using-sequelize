/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {fos_user_user_groupInstance, fos_user_user_groupAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<fos_user_user_groupInstance, fos_user_user_groupAttribute>('fos_user_user_group', {
		user_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'user',
				key: 'id'
			}
		},
		group_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'groups',
				key: 'id'
			}
		}
	}, {
		tableName: 'fos_user_user_group'
	});
};
