/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {migration_versionsInstance, migration_versionsAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<migration_versionsInstance, migration_versionsAttribute>('migration_versions', {
		version: {
			type: DataTypes.STRING(255),
			allowNull: false,
			primaryKey: true
		}
	}, {
		tableName: 'migration_versions'
	});
};
