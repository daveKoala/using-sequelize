/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {module_resourcesInstance, module_resourcesAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<module_resourcesInstance, module_resourcesAttribute>('module_resources', {
		module_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'module',
				key: 'id'
			}
		},
		resource_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'portal_resource',
				key: 'id'
			}
		}
	}, {
		tableName: 'module_resources'
	});
};
