// tslint:disable
import * as path from 'path';
import * as sequelize from 'sequelize';
import * as def from './db';

export interface ITables {
	acl_classes:def.acl_classesModel;
	acl_entries:def.acl_entriesModel;
	acl_object_identities:def.acl_object_identitiesModel;
	activities_completed_by_users:def.activities_completed_by_usersModel;
	activity:def.activityModel;
	acl_object_identity_ancestors:def.acl_object_identity_ancestorsModel;
	acl_security_identities:def.acl_security_identitiesModel;
	activity_resources:def.activity_resourcesModel;
	carousel_slides:def.carousel_slidesModel;
	activity_module:def.activity_moduleModel;
	cms_toolkit:def.cms_toolkitModel;
	cohort:def.cohortModel;
	carousels:def.carouselsModel;
	cms_content:def.cms_contentModel;
	cohort_user:def.cohort_userModel;
	cohort_wall:def.cohort_wallModel;
	cohorts_facilitators:def.cohorts_facilitatorsModel;
	cohort_resources:def.cohort_resourcesModel;
	event:def.eventModel;
	event_cohort:def.event_cohortModel;
	event_facilitators:def.event_facilitatorsModel;
	email_template:def.email_templateModel;
	event_resources:def.event_resourcesModel;
	file:def.fileModel;
	fos_user_user_group:def.fos_user_user_groupModel;
	event_location:def.event_locationModel;
	menu_item:def.menu_itemModel;
	message:def.messageModel;
	groups:def.groupsModel;
	messages_files:def.messages_filesModel;
	message_feed:def.message_feedModel;
	message_feed_message:def.message_feed_messageModel;
	module:def.moduleModel;
	metadata:def.metadataModel;
	migration_versions:def.migration_versionsModel;
	notification:def.notificationModel;
	oauth_access_token:def.oauth_access_tokenModel;
	module_dates:def.module_datesModel;
	module_resources:def.module_resourcesModel;
	oauth_client:def.oauth_clientModel;
	oauth_refresh_token:def.oauth_refresh_tokenModel;
	oauth_auth_code:def.oauth_auth_codeModel;
	portal_resource:def.portal_resourceModel;
	organisation:def.organisationModel;
	permission:def.permissionModel;
	programme:def.programmeModel;
	programmes_facilitators:def.programmes_facilitatorsModel;
	portal_resource_type:def.portal_resource_typeModel;
	post_like:def.post_likeModel;
	property:def.propertyModel;
	resource:def.resourceModel;
	role:def.roleModel;
	programmes_toolkits:def.programmes_toolkitsModel;
	scheduled_commands:def.scheduled_commandsModel;
	scheduled_task:def.scheduled_taskModel;
	slots:def.slotsModel;
	roles_permissions:def.roles_permissionsModel;
	survey_answer:def.survey_answerModel;
	survey_auto_save:def.survey_auto_saveModel;
	survey_context:def.survey_contextModel;
	survey:def.surveyModel;
	survey_template:def.survey_templateModel;
	survey_template_question:def.survey_template_questionModel;
	survey_template_version:def.survey_template_versionModel;
	survey_status:def.survey_statusModel;
	survey_test_user:def.survey_test_userModel;
	survey_user:def.survey_userModel;
	task:def.taskModel;
	survey_test:def.survey_testModel;
	task_runner_status:def.task_runner_statusModel;
	tiles:def.tilesModel;
	toolkits:def.toolkitsModel;
	task_runner:def.task_runnerModel;
	user_group_roles:def.user_group_rolesModel;
	validation:def.validationModel;
	wall:def.wallModel;
	user:def.userModel;
	wall_post:def.wall_postModel;
}

export const getModels = function(seq:sequelize.Sequelize):ITables {
	const tables:ITables = {
		acl_classes: seq.import(path.join(__dirname, './acl_classes')),
		acl_entries: seq.import(path.join(__dirname, './acl_entries')),
		acl_object_identities: seq.import(path.join(__dirname, './acl_object_identities')),
		activities_completed_by_users: seq.import(path.join(__dirname, './activities_completed_by_users')),
		activity: seq.import(path.join(__dirname, './activity')),
		acl_object_identity_ancestors: seq.import(path.join(__dirname, './acl_object_identity_ancestors')),
		acl_security_identities: seq.import(path.join(__dirname, './acl_security_identities')),
		activity_resources: seq.import(path.join(__dirname, './activity_resources')),
		carousel_slides: seq.import(path.join(__dirname, './carousel_slides')),
		activity_module: seq.import(path.join(__dirname, './activity_module')),
		cms_toolkit: seq.import(path.join(__dirname, './cms_toolkit')),
		cohort: seq.import(path.join(__dirname, './cohort')),
		carousels: seq.import(path.join(__dirname, './carousels')),
		cms_content: seq.import(path.join(__dirname, './cms_content')),
		cohort_user: seq.import(path.join(__dirname, './cohort_user')),
		cohort_wall: seq.import(path.join(__dirname, './cohort_wall')),
		cohorts_facilitators: seq.import(path.join(__dirname, './cohorts_facilitators')),
		cohort_resources: seq.import(path.join(__dirname, './cohort_resources')),
		event: seq.import(path.join(__dirname, './event')),
		event_cohort: seq.import(path.join(__dirname, './event_cohort')),
		event_facilitators: seq.import(path.join(__dirname, './event_facilitators')),
		email_template: seq.import(path.join(__dirname, './email_template')),
		event_resources: seq.import(path.join(__dirname, './event_resources')),
		file: seq.import(path.join(__dirname, './file')),
		fos_user_user_group: seq.import(path.join(__dirname, './fos_user_user_group')),
		event_location: seq.import(path.join(__dirname, './event_location')),
		menu_item: seq.import(path.join(__dirname, './menu_item')),
		message: seq.import(path.join(__dirname, './message')),
		groups: seq.import(path.join(__dirname, './groups')),
		messages_files: seq.import(path.join(__dirname, './messages_files')),
		message_feed: seq.import(path.join(__dirname, './message_feed')),
		message_feed_message: seq.import(path.join(__dirname, './message_feed_message')),
		module: seq.import(path.join(__dirname, './module')),
		metadata: seq.import(path.join(__dirname, './metadata')),
		migration_versions: seq.import(path.join(__dirname, './migration_versions')),
		notification: seq.import(path.join(__dirname, './notification')),
		oauth_access_token: seq.import(path.join(__dirname, './oauth_access_token')),
		module_dates: seq.import(path.join(__dirname, './module_dates')),
		module_resources: seq.import(path.join(__dirname, './module_resources')),
		oauth_client: seq.import(path.join(__dirname, './oauth_client')),
		oauth_refresh_token: seq.import(path.join(__dirname, './oauth_refresh_token')),
		oauth_auth_code: seq.import(path.join(__dirname, './oauth_auth_code')),
		portal_resource: seq.import(path.join(__dirname, './portal_resource')),
		organisation: seq.import(path.join(__dirname, './organisation')),
		permission: seq.import(path.join(__dirname, './permission')),
		programme: seq.import(path.join(__dirname, './programme')),
		programmes_facilitators: seq.import(path.join(__dirname, './programmes_facilitators')),
		portal_resource_type: seq.import(path.join(__dirname, './portal_resource_type')),
		post_like: seq.import(path.join(__dirname, './post_like')),
		property: seq.import(path.join(__dirname, './property')),
		resource: seq.import(path.join(__dirname, './resource')),
		role: seq.import(path.join(__dirname, './role')),
		programmes_toolkits: seq.import(path.join(__dirname, './programmes_toolkits')),
		scheduled_commands: seq.import(path.join(__dirname, './scheduled_commands')),
		scheduled_task: seq.import(path.join(__dirname, './scheduled_task')),
		slots: seq.import(path.join(__dirname, './slots')),
		roles_permissions: seq.import(path.join(__dirname, './roles_permissions')),
		survey_answer: seq.import(path.join(__dirname, './survey_answer')),
		survey_auto_save: seq.import(path.join(__dirname, './survey_auto_save')),
		survey_context: seq.import(path.join(__dirname, './survey_context')),
		survey: seq.import(path.join(__dirname, './survey')),
		survey_template: seq.import(path.join(__dirname, './survey_template')),
		survey_template_question: seq.import(path.join(__dirname, './survey_template_question')),
		survey_template_version: seq.import(path.join(__dirname, './survey_template_version')),
		survey_status: seq.import(path.join(__dirname, './survey_status')),
		survey_test_user: seq.import(path.join(__dirname, './survey_test_user')),
		survey_user: seq.import(path.join(__dirname, './survey_user')),
		task: seq.import(path.join(__dirname, './task')),
		survey_test: seq.import(path.join(__dirname, './survey_test')),
		task_runner_status: seq.import(path.join(__dirname, './task_runner_status')),
		tiles: seq.import(path.join(__dirname, './tiles')),
		toolkits: seq.import(path.join(__dirname, './toolkits')),
		task_runner: seq.import(path.join(__dirname, './task_runner')),
		user_group_roles: seq.import(path.join(__dirname, './user_group_roles')),
		validation: seq.import(path.join(__dirname, './validation')),
		wall: seq.import(path.join(__dirname, './wall')),
		user: seq.import(path.join(__dirname, './user')),
		wall_post: seq.import(path.join(__dirname, './wall_post')),
	};
	return tables;
};
