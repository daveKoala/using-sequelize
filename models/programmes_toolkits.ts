/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {programmes_toolkitsInstance, programmes_toolkitsAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<programmes_toolkitsInstance, programmes_toolkitsAttribute>('programmes_toolkits', {
		programme_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'programme',
				key: 'id'
			}
		},
		toolkit_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'toolkits',
				key: 'id'
			}
		}
	}, {
		tableName: 'programmes_toolkits'
	});
};
