## Sequelize

Init Sequelize, builds the folder structure and config file described in .sequelizerc 
```
node_modules/.bin/sequelize init
```

To create a new model. (In this case a Usr model with some additional fields)
```
node_modules/.bin/sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string
```

### Modifying a model and migration
The sequence is:
- Edit the model file
- Use the command line to create a new migration
- Edit the migration file for 'up' and 'down' the table
- Run migrations from the command line

`NOTE: You can combine migration files to change two or more tables, but dont. The migration functions are supossed to return promises. With a promise you could chain the 'queryInterface' but its not a good idea. If you try and add 2 columns in the same migration and the 2nd fails. Then the migration will fail but column no. 1 will still exist. And when you re-run the migrations they will eternally fail because the migration will try to create column no. 1 a second time and conflict`
To create a migration
```
node_modules/.bin/sequelize migration:create --name name-the-migration
```

To run all migration. `WARNING data can be lost`
```
node_modules/.bin/sequelize db:migrate --debug
```
To undo a migration. `WARNING data can be lost`
```
node_modules/.bin/sequelize db:migrate:undo --debug
```
To undo to a specific state. `WARNING data can be lost`
```
node_modules/.bin/sequelize db:migrate:undo --to xxxxxxxxxx-name-of-migration
```

Or you can roll back all migrations. `WARNING data will be lost`
```
node_modules/.bin/sequelize db:migrate:undo:all --attributes userId:number, activityId:number, date:dateTime
```

### Seeding
Seeding is inserting data into tables
Generate a new seeding file
```
node_modules/.bin/sequelize seed:generate --name demo-user
```
This will create a seed file, this will need editing with objects/rows of data