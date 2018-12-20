// tslint:disable
import * as Sequelize from 'sequelize';


// table: acl_classes
export interface acl_classesAttribute {
	id:number;
	class_type:string;
}
export interface acl_classesInstance extends Sequelize.Instance<acl_classesAttribute>, acl_classesAttribute { }
export interface acl_classesModel extends Sequelize.Model<acl_classesInstance, acl_classesAttribute> { }

// table: acl_entries
export interface acl_entriesAttribute {
	id:number;
	class_id:number;
	object_identity_id?:number;
	security_identity_id:number;
	field_name?:string;
	ace_order:number;
	mask:number;
	granting:number;
	granting_strategy:string;
	audit_success:number;
	audit_failure:number;
}
export interface acl_entriesInstance extends Sequelize.Instance<acl_entriesAttribute>, acl_entriesAttribute { }
export interface acl_entriesModel extends Sequelize.Model<acl_entriesInstance, acl_entriesAttribute> { }

// table: acl_object_identities
export interface acl_object_identitiesAttribute {
	id:number;
	parent_object_identity_id?:number;
	class_id:number;
	object_identifier:string;
	entries_inheriting:number;
}
export interface acl_object_identitiesInstance extends Sequelize.Instance<acl_object_identitiesAttribute>, acl_object_identitiesAttribute { }
export interface acl_object_identitiesModel extends Sequelize.Model<acl_object_identitiesInstance, acl_object_identitiesAttribute> { }

// table: activities_completed_by_users
export interface activities_completed_by_usersAttribute {
	activity_id:number;
	user_id:number;
}
export interface activities_completed_by_usersInstance extends Sequelize.Instance<activities_completed_by_usersAttribute>, activities_completed_by_usersAttribute { }
export interface activities_completed_by_usersModel extends Sequelize.Model<activities_completed_by_usersInstance, activities_completed_by_usersAttribute> { }

// table: activity
export interface activityAttribute {
	id:number;
	programme_id?:number;
	name:string;
	type:string;
	properties?:string;
	content?:string;
	duration:string;
	self_book?:number;
	pre_work?:number;
	cancellation_terms?:string;
	total_places_available?:number;
	minimum_participants?:number;
	joining_instructions?:string;
	send_evaluation_form:number;
	evaluation_form_send_time?:string;
	survey_key?:string;
	show_activity_link:number;
	deletedAt?:Date;
	pdf_instruction_id?:number;
	additional_info?:string;
	send_seven_day_reminder:number;
	send_three_day_reminder:number;
	send_one_day_reminder:number;
}
export interface activityInstance extends Sequelize.Instance<activityAttribute>, activityAttribute { }
export interface activityModel extends Sequelize.Model<activityInstance, activityAttribute> { }

// table: acl_object_identity_ancestors
export interface acl_object_identity_ancestorsAttribute {
	object_identity_id:number;
	ancestor_id:number;
}
export interface acl_object_identity_ancestorsInstance extends Sequelize.Instance<acl_object_identity_ancestorsAttribute>, acl_object_identity_ancestorsAttribute { }
export interface acl_object_identity_ancestorsModel extends Sequelize.Model<acl_object_identity_ancestorsInstance, acl_object_identity_ancestorsAttribute> { }

// table: acl_security_identities
export interface acl_security_identitiesAttribute {
	id:number;
	identifier:string;
	username:number;
}
export interface acl_security_identitiesInstance extends Sequelize.Instance<acl_security_identitiesAttribute>, acl_security_identitiesAttribute { }
export interface acl_security_identitiesModel extends Sequelize.Model<acl_security_identitiesInstance, acl_security_identitiesAttribute> { }

// table: activity_resources
export interface activity_resourcesAttribute {
	activity_id:number;
	resource_id:number;
}
export interface activity_resourcesInstance extends Sequelize.Instance<activity_resourcesAttribute>, activity_resourcesAttribute { }
export interface activity_resourcesModel extends Sequelize.Model<activity_resourcesInstance, activity_resourcesAttribute> { }

// table: carousel_slides
export interface carousel_slidesAttribute {
	id:number;
	carousel_id?:number;
	title?:string;
	body?:string;
	icon?:number;
}
export interface carousel_slidesInstance extends Sequelize.Instance<carousel_slidesAttribute>, carousel_slidesAttribute { }
export interface carousel_slidesModel extends Sequelize.Model<carousel_slidesInstance, carousel_slidesAttribute> { }

// table: activity_module
export interface activity_moduleAttribute {
	id:number;
	module_id?:number;
	activity_id?:number;
	sort_order:number;
}
export interface activity_moduleInstance extends Sequelize.Instance<activity_moduleAttribute>, activity_moduleAttribute { }
export interface activity_moduleModel extends Sequelize.Model<activity_moduleInstance, activity_moduleAttribute> { }

// table: cms_toolkit
export interface cms_toolkitAttribute {
	id:number;
	cms_id?:number;
	toolkit_id?:number;
	sort_order:number;
	featured:number;
}
export interface cms_toolkitInstance extends Sequelize.Instance<cms_toolkitAttribute>, cms_toolkitAttribute { }
export interface cms_toolkitModel extends Sequelize.Model<cms_toolkitInstance, cms_toolkitAttribute> { }

// table: cohort
export interface cohortAttribute {
	id:number;
	programme_id?:number;
	name:string;
	properties?:string;
	message_feed_id?:string;
	context:string;
	colour:string;
}
export interface cohortInstance extends Sequelize.Instance<cohortAttribute>, cohortAttribute { }
export interface cohortModel extends Sequelize.Model<cohortInstance, cohortAttribute> { }

// table: carousels
export interface carouselsAttribute {
	id:number;
	cms_id?:number;
	name:string;
	is_hidden:number;
	background_image?:number;
	background_colour?:string;
}
export interface carouselsInstance extends Sequelize.Instance<carouselsAttribute>, carouselsAttribute { }
export interface carouselsModel extends Sequelize.Model<carouselsInstance, carouselsAttribute> { }

// table: cms_content
export interface cms_contentAttribute {
	id:number;
	programme_id?:number;
	homepage_banner_image_id?:number;
	my_journey_banner_image_id?:number;
	my_group_banner_image_id?:number;
	toolkit_banner_image_id?:number;
	homepageLearningJourneyTitle?:string;
	homepageLearningJourneyIntro?:string;
	homepageProgrammeNewsfeedTitle?:string;
	homepageProgrammeNewsfeedIntro?:string;
	myJourneyPageTitle?:string;
	myJourneyIntroContent?:string;
	myGroupPageTitle?:string;
	myGroupIntroContent?:string;
	myGroupYammerURL?:string;
	toolkitPageTitle?:string;
	toolkitContent?:string;
	myGroupYammerFeed:number;
	workshop_banner_image_id?:number;
	webinar_banner_image_id?:number;
	coaching_banner_image_id?:number;
	connections_wall_banner_image_id?:number;
	self_directed_banner_image_id?:number;
	programme_logo_image_id?:number;
	profile_page_banner_image_id?:number;
	primary_colour?:string;
	secondary_colour?:string;
	page_title_text_colour?:string;
	home_nav_label?:string;
	my_journey_nav_label?:string;
	modules_nav_label?:string;
	about_the_programme_nav_label?:string;
	my_group_nav_label?:string;
	toolkit_nav_label?:string;
	minor?:number;
	major?:number;
	patch?:number;
	published:number;
	user_id?:number;
	created_at:Date;
	updated_at:Date;
}
export interface cms_contentInstance extends Sequelize.Instance<cms_contentAttribute>, cms_contentAttribute { }
export interface cms_contentModel extends Sequelize.Model<cms_contentInstance, cms_contentAttribute> { }

// table: cohort_user
export interface cohort_userAttribute {
	cohort_id:number;
	user_id:number;
}
export interface cohort_userInstance extends Sequelize.Instance<cohort_userAttribute>, cohort_userAttribute { }
export interface cohort_userModel extends Sequelize.Model<cohort_userInstance, cohort_userAttribute> { }

// table: cohort_wall
export interface cohort_wallAttribute {
	wall_id:number;
	cohort_id:number;
}
export interface cohort_wallInstance extends Sequelize.Instance<cohort_wallAttribute>, cohort_wallAttribute { }
export interface cohort_wallModel extends Sequelize.Model<cohort_wallInstance, cohort_wallAttribute> { }

// table: cohorts_facilitators
export interface cohorts_facilitatorsAttribute {
	cohort_id:number;
	user_id:number;
}
export interface cohorts_facilitatorsInstance extends Sequelize.Instance<cohorts_facilitatorsAttribute>, cohorts_facilitatorsAttribute { }
export interface cohorts_facilitatorsModel extends Sequelize.Model<cohorts_facilitatorsInstance, cohorts_facilitatorsAttribute> { }

// table: cohort_resources
export interface cohort_resourcesAttribute {
	cohort_id:number;
	resource_id:number;
}
export interface cohort_resourcesInstance extends Sequelize.Instance<cohort_resourcesAttribute>, cohort_resourcesAttribute { }
export interface cohort_resourcesModel extends Sequelize.Model<cohort_resourcesInstance, cohort_resourcesAttribute> { }

// table: event
export interface eventAttribute {
	id:number;
	activity_id?:number;
	name:string;
	duration?:string;
	event_date?:Date;
	properties?:string;
	postponed?:number;
	event_information?:string;
	deletedAt?:Date;
	joining_instructions_id?:number;
	published:number;
	timezone:string;
	event_location_id?:number;
	programme_id?:number;
	self_book?:number;
	cancellation_terms?:string;
	additional_info?:string;
	location?:string;
}
export interface eventInstance extends Sequelize.Instance<eventAttribute>, eventAttribute { }
export interface eventModel extends Sequelize.Model<eventInstance, eventAttribute> { }

// table: event_cohort
export interface event_cohortAttribute {
	event_id:number;
	cohort_id:number;
}
export interface event_cohortInstance extends Sequelize.Instance<event_cohortAttribute>, event_cohortAttribute { }
export interface event_cohortModel extends Sequelize.Model<event_cohortInstance, event_cohortAttribute> { }

// table: event_facilitators
export interface event_facilitatorsAttribute {
	event_id:number;
	facilitator_id:number;
}
export interface event_facilitatorsInstance extends Sequelize.Instance<event_facilitatorsAttribute>, event_facilitatorsAttribute { }
export interface event_facilitatorsModel extends Sequelize.Model<event_facilitatorsInstance, event_facilitatorsAttribute> { }

// table: email_template
export interface email_templateAttribute {
	key:string;
	organisation_id:number;
	template:string;
}
export interface email_templateInstance extends Sequelize.Instance<email_templateAttribute>, email_templateAttribute { }
export interface email_templateModel extends Sequelize.Model<email_templateInstance, email_templateAttribute> { }

// table: event_resources
export interface event_resourcesAttribute {
	event_id:number;
	resource_id:number;
}
export interface event_resourcesInstance extends Sequelize.Instance<event_resourcesAttribute>, event_resourcesAttribute { }
export interface event_resourcesModel extends Sequelize.Model<event_resourcesInstance, event_resourcesAttribute> { }

// table: file
export interface fileAttribute {
	id:number;
	parent_id?:number;
	reference:string;
	mime_type:string;
	bytes?:number;
	context:string;
	variation:string;
	status:string;
	folder?:string;
	deletedAt?:Date;
}
export interface fileInstance extends Sequelize.Instance<fileAttribute>, fileAttribute { }
export interface fileModel extends Sequelize.Model<fileInstance, fileAttribute> { }

// table: fos_user_user_group
export interface fos_user_user_groupAttribute {
	user_id:number;
	group_id:number;
}
export interface fos_user_user_groupInstance extends Sequelize.Instance<fos_user_user_groupAttribute>, fos_user_user_groupAttribute { }
export interface fos_user_user_groupModel extends Sequelize.Model<fos_user_user_groupInstance, fos_user_user_groupAttribute> { }

// table: event_location
export interface event_locationAttribute {
	id:number;
	programme_id?:number;
	name?:string;
	location?:string;
	latitude?:string;
	longitude?:string;
}
export interface event_locationInstance extends Sequelize.Instance<event_locationAttribute>, event_locationAttribute { }
export interface event_locationModel extends Sequelize.Model<event_locationInstance, event_locationAttribute> { }

// table: menu_item
export interface menu_itemAttribute {
	id:number;
	parent?:number;
	programme_id?:number;
	route:string;
	display_text:string;
	is_global:number;
	menu_roles:string;
}
export interface menu_itemInstance extends Sequelize.Instance<menu_itemAttribute>, menu_itemAttribute { }
export interface menu_itemModel extends Sequelize.Model<menu_itemInstance, menu_itemAttribute> { }

// table: message
export interface messageAttribute {
	id:string;
	user_id:number;
	parent_id?:string;
	content:string;
	status:string;
	created_on:Date;
	updated_on?:Date;
}
export interface messageInstance extends Sequelize.Instance<messageAttribute>, messageAttribute { }
export interface messageModel extends Sequelize.Model<messageInstance, messageAttribute> { }

// table: groups
export interface groupsAttribute {
	id:number;
	name:string;
}
export interface groupsInstance extends Sequelize.Instance<groupsAttribute>, groupsAttribute { }
export interface groupsModel extends Sequelize.Model<groupsInstance, groupsAttribute> { }

// table: messages_files
export interface messages_filesAttribute {
	message_id:string;
	file_id:number;
}
export interface messages_filesInstance extends Sequelize.Instance<messages_filesAttribute>, messages_filesAttribute { }
export interface messages_filesModel extends Sequelize.Model<messages_filesInstance, messages_filesAttribute> { }

// table: message_feed
export interface message_feedAttribute {
	id:string;
	name:string;
	locked:number;
	context:string;
}
export interface message_feedInstance extends Sequelize.Instance<message_feedAttribute>, message_feedAttribute { }
export interface message_feedModel extends Sequelize.Model<message_feedInstance, message_feedAttribute> { }

// table: message_feed_message
export interface message_feed_messageAttribute {
	message_feed_id:string;
	message_id:string;
}
export interface message_feed_messageInstance extends Sequelize.Instance<message_feed_messageAttribute>, message_feed_messageAttribute { }
export interface message_feed_messageModel extends Sequelize.Model<message_feed_messageInstance, message_feed_messageAttribute> { }

// table: module
export interface moduleAttribute {
	id:number;
	programme_id?:number;
	name:string;
	content?:string;
	first_carousel_image_id?:number;
	second_carousel_image_id?:number;
	icon_id?:number;
	header_image_id?:number;
	first_carousel_text?:string;
	second_carousel_text?:string;
}
export interface moduleInstance extends Sequelize.Instance<moduleAttribute>, moduleAttribute { }
export interface moduleModel extends Sequelize.Model<moduleInstance, moduleAttribute> { }

// table: metadata
export interface metadataAttribute {
	id:number;
	file_id?:number;
	meta_key:string;
	meta_value:string;
}
export interface metadataInstance extends Sequelize.Instance<metadataAttribute>, metadataAttribute { }
export interface metadataModel extends Sequelize.Model<metadataInstance, metadataAttribute> { }

// table: migration_versions
export interface migration_versionsAttribute {
	version:string;
}
export interface migration_versionsInstance extends Sequelize.Instance<migration_versionsAttribute>, migration_versionsAttribute { }
export interface migration_versionsModel extends Sequelize.Model<migration_versionsInstance, migration_versionsAttribute> { }

// table: notification
export interface notificationAttribute {
	id:number;
	enable_notification:number;
	send_time?:string;
	timezone:string;
	last_sent?:Date;
	notification_types?:string;
}
export interface notificationInstance extends Sequelize.Instance<notificationAttribute>, notificationAttribute { }
export interface notificationModel extends Sequelize.Model<notificationInstance, notificationAttribute> { }

// table: oauth_access_token
export interface oauth_access_tokenAttribute {
	id:number;
	client_id:number;
	user_id?:number;
	token:string;
	expires_at?:number;
	scope?:string;
}
export interface oauth_access_tokenInstance extends Sequelize.Instance<oauth_access_tokenAttribute>, oauth_access_tokenAttribute { }
export interface oauth_access_tokenModel extends Sequelize.Model<oauth_access_tokenInstance, oauth_access_tokenAttribute> { }

// table: module_dates
export interface module_datesAttribute {
	id:number;
	module_id?:number;
	cohort_id?:number;
	start_date:Date;
	end_date:Date;
	module_number:number;
}
export interface module_datesInstance extends Sequelize.Instance<module_datesAttribute>, module_datesAttribute { }
export interface module_datesModel extends Sequelize.Model<module_datesInstance, module_datesAttribute> { }

// table: module_resources
export interface module_resourcesAttribute {
	module_id:number;
	resource_id:number;
}
export interface module_resourcesInstance extends Sequelize.Instance<module_resourcesAttribute>, module_resourcesAttribute { }
export interface module_resourcesModel extends Sequelize.Model<module_resourcesInstance, module_resourcesAttribute> { }

// table: oauth_client
export interface oauth_clientAttribute {
	id:number;
	programme_id?:number;
	random_id:string;
	redirect_uris:string;
	secret:string;
	allowed_grant_types:string;
	name:string;
}
export interface oauth_clientInstance extends Sequelize.Instance<oauth_clientAttribute>, oauth_clientAttribute { }
export interface oauth_clientModel extends Sequelize.Model<oauth_clientInstance, oauth_clientAttribute> { }

// table: oauth_refresh_token
export interface oauth_refresh_tokenAttribute {
	id:number;
	client_id:number;
	user_id?:number;
	token:string;
	expires_at?:number;
	scope?:string;
}
export interface oauth_refresh_tokenInstance extends Sequelize.Instance<oauth_refresh_tokenAttribute>, oauth_refresh_tokenAttribute { }
export interface oauth_refresh_tokenModel extends Sequelize.Model<oauth_refresh_tokenInstance, oauth_refresh_tokenAttribute> { }

// table: oauth_auth_code
export interface oauth_auth_codeAttribute {
	id:number;
	client_id:number;
	user_id?:number;
	token:string;
	redirect_uri:string;
	expires_at?:number;
	scope?:string;
}
export interface oauth_auth_codeInstance extends Sequelize.Instance<oauth_auth_codeAttribute>, oauth_auth_codeAttribute { }
export interface oauth_auth_codeModel extends Sequelize.Model<oauth_auth_codeInstance, oauth_auth_codeAttribute> { }

// table: portal_resource
export interface portal_resourceAttribute {
	id:number;
	type_id?:number;
	file_id?:number;
	name:string;
	context:string;
}
export interface portal_resourceInstance extends Sequelize.Instance<portal_resourceAttribute>, portal_resourceAttribute { }
export interface portal_resourceModel extends Sequelize.Model<portal_resourceInstance, portal_resourceAttribute> { }

// table: organisation
export interface organisationAttribute {
	id:number;
	key:string;
	name:string;
	active:number;
	primary_colour:string;
	secondary_colour:string;
	background_image_id?:number;
	logo_image_id?:number;
	support_url?:string;
	sso:number;
	domain_name?:string;
}
export interface organisationInstance extends Sequelize.Instance<organisationAttribute>, organisationAttribute { }
export interface organisationModel extends Sequelize.Model<organisationInstance, organisationAttribute> { }

// table: permission
export interface permissionAttribute {
	id:number;
	resource_id?:number;
	name:string;
	description?:string;
}
export interface permissionInstance extends Sequelize.Instance<permissionAttribute>, permissionAttribute { }
export interface permissionModel extends Sequelize.Model<permissionInstance, permissionAttribute> { }

// table: programme
export interface programmeAttribute {
	id:number;
	organisation_id:number;
	programme_cohort_id?:number;
	title?:string;
	base_url:string;
	support_url?:string;
	cancellation_modifier:number;
	slug:string;
	invite_email_intro_text?:string;
	email_header_image_id?:number;
	email_footer_image_id?:number;
	on_boarding_video?:string;
	security_certificate?:string;
	notification_id?:number;
	deletedAt?:Date;
	isLegacyPortal?:number;
}
export interface programmeInstance extends Sequelize.Instance<programmeAttribute>, programmeAttribute { }
export interface programmeModel extends Sequelize.Model<programmeInstance, programmeAttribute> { }

// table: programmes_facilitators
export interface programmes_facilitatorsAttribute {
	programme_id:number;
	user_id:number;
}
export interface programmes_facilitatorsInstance extends Sequelize.Instance<programmes_facilitatorsAttribute>, programmes_facilitatorsAttribute { }
export interface programmes_facilitatorsModel extends Sequelize.Model<programmes_facilitatorsInstance, programmes_facilitatorsAttribute> { }

// table: portal_resource_type
export interface portal_resource_typeAttribute {
	id:number;
	icon:string;
	type_slug:string;
}
export interface portal_resource_typeInstance extends Sequelize.Instance<portal_resource_typeAttribute>, portal_resource_typeAttribute { }
export interface portal_resource_typeModel extends Sequelize.Model<portal_resource_typeInstance, portal_resource_typeAttribute> { }

// table: post_like
export interface post_likeAttribute {
	id:number;
	user_id?:number;
	wall_post_id?:number;
	liked_on?:Date;
}
export interface post_likeInstance extends Sequelize.Instance<post_likeAttribute>, post_likeAttribute { }
export interface post_likeModel extends Sequelize.Model<post_likeInstance, post_likeAttribute> { }

// table: property
export interface propertyAttribute {
	id:number;
	context:string;
	template:string;
}
export interface propertyInstance extends Sequelize.Instance<propertyAttribute>, propertyAttribute { }
export interface propertyModel extends Sequelize.Model<propertyInstance, propertyAttribute> { }

// table: resource
export interface resourceAttribute {
	id:number;
	name:string;
	description?:string;
}
export interface resourceInstance extends Sequelize.Instance<resourceAttribute>, resourceAttribute { }
export interface resourceModel extends Sequelize.Model<resourceInstance, resourceAttribute> { }

// table: role
export interface roleAttribute {
	id:number;
	name:string;
	role:string;
}
export interface roleInstance extends Sequelize.Instance<roleAttribute>, roleAttribute { }
export interface roleModel extends Sequelize.Model<roleInstance, roleAttribute> { }

// table: programmes_toolkits
export interface programmes_toolkitsAttribute {
	programme_id:number;
	toolkit_id:number;
}
export interface programmes_toolkitsInstance extends Sequelize.Instance<programmes_toolkitsAttribute>, programmes_toolkitsAttribute { }
export interface programmes_toolkitsModel extends Sequelize.Model<programmes_toolkitsInstance, programmes_toolkitsAttribute> { }

// table: scheduled_commands
export interface scheduled_commandsAttribute {
	id:number;
	name:string;
	command:string;
	arguments?:string;
	cron_expression:string;
	last_execution:Date;
	last_return_code?:number;
	log_file:string;
	priority:number;
	execute_immediately:number;
	disabled:number;
	locked:number;
}
export interface scheduled_commandsInstance extends Sequelize.Instance<scheduled_commandsAttribute>, scheduled_commandsAttribute { }
export interface scheduled_commandsModel extends Sequelize.Model<scheduled_commandsInstance, scheduled_commandsAttribute> { }

// table: scheduled_task
export interface scheduled_taskAttribute {
	id:number;
	task_id:number;
	cron_expr:string;
	args?:string;
	last_run:Date;
	time_start:Date;
	time_end:Date;
	active:number;
}
export interface scheduled_taskInstance extends Sequelize.Instance<scheduled_taskAttribute>, scheduled_taskAttribute { }
export interface scheduled_taskModel extends Sequelize.Model<scheduled_taskInstance, scheduled_taskAttribute> { }

// table: slots
export interface slotsAttribute {
	id:number;
	user_id?:number;
	event_id?:number;
	start_date:Date;
	end_date:Date;
	attended?:string;
	cancellation_date:Date;
}
export interface slotsInstance extends Sequelize.Instance<slotsAttribute>, slotsAttribute { }
export interface slotsModel extends Sequelize.Model<slotsInstance, slotsAttribute> { }

// table: roles_permissions
export interface roles_permissionsAttribute {
	role_id:number;
	permission_id:number;
}
export interface roles_permissionsInstance extends Sequelize.Instance<roles_permissionsAttribute>, roles_permissionsAttribute { }
export interface roles_permissionsModel extends Sequelize.Model<roles_permissionsInstance, roles_permissionsAttribute> { }

// table: survey_answer
export interface survey_answerAttribute {
	id:number;
	survey_user_id:number;
	answers:string;
}
export interface survey_answerInstance extends Sequelize.Instance<survey_answerAttribute>, survey_answerAttribute { }
export interface survey_answerModel extends Sequelize.Model<survey_answerInstance, survey_answerAttribute> { }

// table: survey_auto_save
export interface survey_auto_saveAttribute {
	id:number;
	survey_user_id:number;
	answers:string;
}
export interface survey_auto_saveInstance extends Sequelize.Instance<survey_auto_saveAttribute>, survey_auto_saveAttribute { }
export interface survey_auto_saveModel extends Sequelize.Model<survey_auto_saveInstance, survey_auto_saveAttribute> { }

// table: survey_context
export interface survey_contextAttribute {
	id:number;
	survey_id:number;
	name:string;
	tag:string;
	properties?:string;
}
export interface survey_contextInstance extends Sequelize.Instance<survey_contextAttribute>, survey_contextAttribute { }
export interface survey_contextModel extends Sequelize.Model<survey_contextInstance, survey_contextAttribute> { }

// table: survey
export interface surveyAttribute {
	id:number;
	survey_template_version_id:number;
	organisation_id:number;
	status_id:number;
	name:string;
	description?:string;
	token:string;
	password?:string;
	properties?:string;
}
export interface surveyInstance extends Sequelize.Instance<surveyAttribute>, surveyAttribute { }
export interface surveyModel extends Sequelize.Model<surveyInstance, surveyAttribute> { }

// table: survey_template
export interface survey_templateAttribute {
	id:number;
	organisation_id?:number;
	name:string;
}
export interface survey_templateInstance extends Sequelize.Instance<survey_templateAttribute>, survey_templateAttribute { }
export interface survey_templateModel extends Sequelize.Model<survey_templateInstance, survey_templateAttribute> { }

// table: survey_template_question
export interface survey_template_questionAttribute {
	id:number;
	survey_template_version_id:number;
	parent_question?:number;
	reference?:number;
	label:string;
	hint?:string;
	type:string;
	properties?:string;
}
export interface survey_template_questionInstance extends Sequelize.Instance<survey_template_questionAttribute>, survey_template_questionAttribute { }
export interface survey_template_questionModel extends Sequelize.Model<survey_template_questionInstance, survey_template_questionAttribute> { }

// table: survey_template_version
export interface survey_template_versionAttribute {
	id:number;
	survey_template_id:number;
	version_number:number;
	properties:string;
	properties_organisation_override?:string;
}
export interface survey_template_versionInstance extends Sequelize.Instance<survey_template_versionAttribute>, survey_template_versionAttribute { }
export interface survey_template_versionModel extends Sequelize.Model<survey_template_versionInstance, survey_template_versionAttribute> { }

// table: survey_status
export interface survey_statusAttribute {
	id:number;
	name:string;
}
export interface survey_statusInstance extends Sequelize.Instance<survey_statusAttribute>, survey_statusAttribute { }
export interface survey_statusModel extends Sequelize.Model<survey_statusInstance, survey_statusAttribute> { }

// table: survey_test_user
export interface survey_test_userAttribute {
	id:number;
	survey_test_id:number;
	email:string;
	forename:string;
	surname:string;
	properties?:string;
	token:string;
}
export interface survey_test_userInstance extends Sequelize.Instance<survey_test_userAttribute>, survey_test_userAttribute { }
export interface survey_test_userModel extends Sequelize.Model<survey_test_userInstance, survey_test_userAttribute> { }

// table: survey_user
export interface survey_userAttribute {
	id:number;
	survey_id:number;
	user_id:number;
	context_id:number;
	token:string;
}
export interface survey_userInstance extends Sequelize.Instance<survey_userAttribute>, survey_userAttribute { }
export interface survey_userModel extends Sequelize.Model<survey_userInstance, survey_userAttribute> { }

// table: task
export interface taskAttribute {
	id:number;
	name:string;
	task_class:string;
	args?:string;
	active:number;
}
export interface taskInstance extends Sequelize.Instance<taskAttribute>, taskAttribute { }
export interface taskModel extends Sequelize.Model<taskInstance, taskAttribute> { }

// table: survey_test
export interface survey_testAttribute {
	id:number;
	survey_template_version_id:number;
	organisation_id:number;
	token:string;
	name:string;
	description?:string;
	properties:string;
}
export interface survey_testInstance extends Sequelize.Instance<survey_testAttribute>, survey_testAttribute { }
export interface survey_testModel extends Sequelize.Model<survey_testInstance, survey_testAttribute> { }

// table: task_runner_status
export interface task_runner_statusAttribute {
	id:number;
	name:string;
}
export interface task_runner_statusInstance extends Sequelize.Instance<task_runner_statusAttribute>, task_runner_statusAttribute { }
export interface task_runner_statusModel extends Sequelize.Model<task_runner_statusInstance, task_runner_statusAttribute> { }

// table: tiles
export interface tilesAttribute {
	id:number;
	cms_id?:number;
	icon_top?:number;
	icon_bottom?:number;
	background_image_id?:number;
	name?:string;
	title?:string;
	content?:string;
	button_label?:string;
	button_url?:string;
	background_colour?:string;
	background_picker?:number;
	background_picker_tab?:number;
	hidden:number;
}
export interface tilesInstance extends Sequelize.Instance<tilesAttribute>, tilesAttribute { }
export interface tilesModel extends Sequelize.Model<tilesInstance, tilesAttribute> { }

// table: toolkits
export interface toolkitsAttribute {
	id:number;
	pdf_link_id?:number;
	title:string;
	slug:string;
	content?:string;
	hints?:string;
	icon_image_id?:number;
	featured:number;
}
export interface toolkitsInstance extends Sequelize.Instance<toolkitsAttribute>, toolkitsAttribute { }
export interface toolkitsModel extends Sequelize.Model<toolkitsInstance, toolkitsAttribute> { }

// table: task_runner
export interface task_runnerAttribute {
	id:number;
	scheduled_task_id?:number;
	task_id:number;
	status_id:number;
	time_start:Date;
	time_end:Date;
	context:string;
	properties?:string;
}
export interface task_runnerInstance extends Sequelize.Instance<task_runnerAttribute>, task_runnerAttribute { }
export interface task_runnerModel extends Sequelize.Model<task_runnerInstance, task_runnerAttribute> { }

// table: user_group_roles
export interface user_group_rolesAttribute {
	group_id:number;
	role_id:number;
}
export interface user_group_rolesInstance extends Sequelize.Instance<user_group_rolesAttribute>, user_group_rolesAttribute { }
export interface user_group_rolesModel extends Sequelize.Model<user_group_rolesInstance, user_group_rolesAttribute> { }

// table: validation
export interface validationAttribute {
	id:number;
	context?:string;
	validation_type?:string;
	rules?:string;
}
export interface validationInstance extends Sequelize.Instance<validationAttribute>, validationAttribute { }
export interface validationModel extends Sequelize.Model<validationInstance, validationAttribute> { }

// table: wall
export interface wallAttribute {
	id:number;
	activity_id?:number;
	deadline?:Date;
}
export interface wallInstance extends Sequelize.Instance<wallAttribute>, wallAttribute { }
export interface wallModel extends Sequelize.Model<wallInstance, wallAttribute> { }

// table: user
export interface userAttribute {
	id:number;
	organisation_id:number;
	forename:string;
	surname:string;
	username?:string;
	username_canonical?:string;
	email:string;
	email_canonical:string;
	enabled:number;
	salt?:string;
	password?:string;
	last_login?:Date;
	locked:number;
	expired:number;
	expires_at?:Date;
	confirmation_token?:string;
	password_requested_at?:Date;
	roles:string;
	credentials_expired:number;
	credentials_expire_at?:Date;
	properties?:string;
	timezone:string;
	title?:string;
	registered?:number;
	one_time_use_key?:string;
	token_expiry?:Date;
	profile_picture_id?:number;
	invited?:number;
	disable_notifications?:number;
	phone?:string;
	skype?:string;
	bio?:string;
	user_coaches?:string;
	portal_invites?:string;
	dates_for_your_calender_sent?:string;
}
export interface userInstance extends Sequelize.Instance<userAttribute>, userAttribute { }
export interface userModel extends Sequelize.Model<userInstance, userAttribute> { }

// table: wall_post
export interface wall_postAttribute {
	id:number;
	wall_id?:number;
	user_id?:number;
	evidence_id?:number;
	title?:string;
	description?:string;
	posted_on?:Date;
}
export interface wall_postInstance extends Sequelize.Instance<wall_postAttribute>, wall_postAttribute { }
export interface wall_postModel extends Sequelize.Model<wall_postInstance, wall_postAttribute> { }
