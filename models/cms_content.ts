/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {cms_contentInstance, cms_contentAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<cms_contentInstance, cms_contentAttribute>('cms_content', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		programme_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true,
			references: {
				model: 'programme',
				key: 'id'
			}
		},
		homepage_banner_image_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true,
			references: {
				model: 'file',
				key: 'id'
			}
		},
		my_journey_banner_image_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true,
			references: {
				model: 'file',
				key: 'id'
			}
		},
		my_group_banner_image_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true,
			references: {
				model: 'file',
				key: 'id'
			}
		},
		toolkit_banner_image_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true,
			references: {
				model: 'file',
				key: 'id'
			}
		},
		homepageLearningJourneyTitle: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		homepageLearningJourneyIntro: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		homepageProgrammeNewsfeedTitle: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		homepageProgrammeNewsfeedIntro: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		myJourneyPageTitle: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		myJourneyIntroContent: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		myGroupPageTitle: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		myGroupIntroContent: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		myGroupYammerURL: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		toolkitPageTitle: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		toolkitContent: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		myGroupYammerFeed: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0'
		},
		workshop_banner_image_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true,
			references: {
				model: 'file',
				key: 'id'
			}
		},
		webinar_banner_image_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true,
			references: {
				model: 'file',
				key: 'id'
			}
		},
		coaching_banner_image_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true,
			references: {
				model: 'file',
				key: 'id'
			}
		},
		connections_wall_banner_image_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true,
			references: {
				model: 'file',
				key: 'id'
			}
		},
		self_directed_banner_image_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true,
			references: {
				model: 'file',
				key: 'id'
			}
		},
		programme_logo_image_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true,
			references: {
				model: 'file',
				key: 'id'
			}
		},
		profile_page_banner_image_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true,
			references: {
				model: 'file',
				key: 'id'
			}
		},
		primary_colour: {
			type: DataTypes.STRING(150),
			allowNull: true
		},
		secondary_colour: {
			type: DataTypes.STRING(150),
			allowNull: true
		},
		page_title_text_colour: {
			type: DataTypes.STRING(150),
			allowNull: true
		},
		home_nav_label: {
			type: DataTypes.STRING(150),
			allowNull: true
		},
		my_journey_nav_label: {
			type: DataTypes.STRING(150),
			allowNull: true
		},
		modules_nav_label: {
			type: DataTypes.STRING(150),
			allowNull: true
		},
		about_the_programme_nav_label: {
			type: DataTypes.STRING(150),
			allowNull: true
		},
		my_group_nav_label: {
			type: DataTypes.STRING(150),
			allowNull: true
		},
		toolkit_nav_label: {
			type: DataTypes.STRING(150),
			allowNull: true
		},
		minor: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		major: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		patch: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		published: {
			type: DataTypes.INTEGER(1),
			allowNull: false
		},
		user_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true,
			references: {
				model: 'user',
				key: 'id'
			}
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: false
		},
		updated_at: {
			type: DataTypes.DATE,
			allowNull: false
		}
	}, {
		tableName: 'cms_content'
	});
};
