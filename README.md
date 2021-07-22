# SAMPLE READ ME

This is a sample readme file

## Table of contents

* [General Info](#general-info)
* [Features](#features)
* [Scope](#scope)
* [Technologies](#technologies)
  * [Frameworks](#frameworks)
  * [Composer Packages](#composer-packages)
  * [NPM Packages](#npm-packages)
* [Contributing](#contributing)
  * [Forking the Project](#forking-the-project)
  * [Code Consistency](#code-consistency)
  * [Commiting Messages](#commiting-messages)
* [Project Setup](#project-setup)
* [License](#license)

## General Info

<style>
  table
  {
    width : 100%;
  }
</style>

To be Added

## Features

To be Added

## Scope

To be Added
	
## Technologies

Project is created with:

### Frameworks

|Name                                                                                                           |Version          |Description                                  |
|:--------------------------------------------------------------------------------:                             |:---------------:|:-------------------------------------------:|
|[Laravel](https://laravel.com/docs/8.x)                                                                        |`^8.0.0`         |PHP Back-End Framework                       |
|[VueJS](https://vuejs.org/v2/guide/)                                                                           |`^2.5.0`         |Javascript Front-End Framework               |
|[Vuetify](https://vuetifyjs.com/en/)                                                                           |`^2.5.0`         |Material Design Framework for VueJS          |

### Composer Packages

|Name                                                                                                           |Version          |Description                                    |
|:---------------------------------------------------------------------------------------------:                |:---------------:|:-------------------------------------------:  |
|[barryvdh/laravel-dompdf](https://github.com/barryvdh/laravel-dompdf)                                          |`^0.9.0`         |HTML to PDF Renderer                           |
|[lorisleiva/laravel-actions](https://laravelactions.com/2.x/installation.html)                                 |`^1.0.0`         |Organize Code Structure                        |
|[laravel/telescope](https://laravel.com/docs/8.x/telescope)                                                    |`^4.0.0`         |API Performance Monitoring and Testing         |
|[maatwebsite/excel](https://docs.laravel-excel.com/3.1/getting-started/installation.html)                      |`^3.1.0`         |Excel Renderer                                 |
|[spatie/laravel-permission](https://spatie.be/docs/laravel-permission/v3/installation-laravel)                 |`^3.0.0`         |Associate Users with Roles and Permissions     |
|[spatie/laravel-activitylog](https://spatie.be/docs/laravel-activitylog/v4/introduction)                       |`^4.0.0`         |Activity Logging                               |
|[MarcinOrlowski/laravel-api-response-builder](https://github.com/MarcinOrlowski/laravel-api-response-builder)  |`^9.0.0`         |API Response Builder                           |
|[tymon/jwt-auth](https://jwt-auth.readthedocs.io/en/develop/laravel-installation/)                             |`^1.0.0`         |API Token Authentication                       |

### NPM Packages

|Name                                                                                                           |Version          |Description                                    |
|:--------------------------------------------------------------------------------:                             |:---------------:|:-------------------------------------------:  |
|[Vue Router](https://router.vuejs.org/guide/)                                                                  |`^3.0.0`         |Official Router For VueJS                      |
|[Vuex](https://vuex.vuejs.org/)                                                                                |`^2.0.0`         |State Management For VueJS                     |
|[Casl Vue](https://casl.js.org/v4/en/package/casl-vue)                                                         |`^2.1.0`         |Vue Plugin for User Authorization              |
|[vuex-persistedstate](https://www.npmjs.com/package/vuex-persistedstate/v/3.2.0)                               |`^3.0.0`         |Vuex Plugin for Persisted State                |
|[js-cookie](https://www.npmjs.com/package/js-cookie)                                                           |`^2.2.0`         |lightweight JavaScript API for handling cookies|


## Project Setup

* Set up your `.env file` by copying the contents of the `.env.example` file then configure it according to your **MySQL Database Credentials** to establish a connection as well as your **Mailtrap Inbox SMTP Credentials** for Email Testing.

```bash
# Create and copy the contents of the .env.example file to .env file 
$ cp .env.example .env 
```

```bash
DB_CONNECTION=mysql
DB_HOST=<database host>
DB_PORT=<database port>
DB_DATABASE=<database name>
DB_USERNAME=<database username>
DB_PASSWORD=<database password>

MAIL_MAILER=smtp
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=<mailtrap smtp username>
MAIL_PASSWORD=<mailtrap smtp password>
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=null
MAIL_FROM_NAME="${APP_NAME}"
```

* After setting up your `.env` file, run the following code to setup the project.

```bash
# Install package dependencies 
$ composer install 
$ npm i

# Generate the APP_KEY and JWT_SECRET
$ php artisan key:generate
$ php artisan jwt:secret 

# Clear all composer's cache directories, Update Autoloader and Remove the cached bootstrap files
$ composer clear
$ composer dump-autoload
$ php artisan optimize:clear

# Create the symbolic link for storage for file uploads
$ php artisan storage:link

# Run Migrations and Seeders
$ php artisan migrate:fresh 
$ php artisan db:seed

# Start the server
$ php artisan serve 
$ npm run watch
```

## Contributing

### Repository Structure

The main repository will be divided into branches that may increase over time to modularize development. The purpose of the **first three branches** will remain the same throughout our project development.

|Branch                                    |Description                                                                                                                              |
|:----------------------------------------:|:---------------------------------------------------------------------------------------------------------------------------------------:|
|`master`                                  |The default branch; will always contain the latest changes.                                                                              |
|`_develop`                                |This branch contains code that is configured for a production environment to be tested in a live server                                  |  
|`_production`                             |This branch contains code that was tested in `_develop` and is actively being used in the live server by our clients                     |

### Forking the Project  

Contributors will be using [Standard Fork & Pull Request Workflow](https://gist.github.com/Chaser324/ce0505fbed06b947d962). [Fork the repository](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo) then run the following code to sync your fork to the main repository.

```bash
# Add upstream to remote 
git remote add upstream https://github.com/user/repo.git

# Pull Changes from upstream/master branch 
git pull upstream master
```

### Code Consistency

Please follow the tips written in this [medium article by Tony Stark](https://tony-stark.medium.com/larave-best-practices-for-developers-2021-19cf662f7de8) for using the Laravel framework as well as the [PSR-12: Extended Coding Style Standard](https://www.php-fig.org/psr/psr-12/) for PHP coding in general. Please also follow the [style guide for VueJS](https://vuejs.org/v2/style-guide)  


### Commiting Messages

In order to monitor our progress, signal other developers, and emphasize our commits, please use the appropriate [Git Emoji](https://gitmoji.dev/) at start of our commit messages along with a `(#issue_number)` at the end if necessary. Here are a few that we may use often:

| Illustration              | Code                          | Description                           |
|:-------------------------:|:-----------------------------:|:-------------------------------------:|
|:100:                      |`:100:`                        |Functions, routes, migrations etc.     |
|:adhesive_bandage:         |`:adhesive_bandage:`           |Simple Hotfix for Production           |
|:ambulance:                |`:ambulance:`                  |Critical Hotfix for Production         |
|:arrow_up:                 |`:arrow_up:`                   |Upgrade package dependencies           |
|:arrow_down:               |`:arrow_down:`                 |Downgrade package dependencies         |
|:art:                      |`:art:`                        |Improve Code Struture or Format        |
|:bug:                      |`:bug:`                        |Bug Fixing                             |
|:bento:                    |`:bento:`                      |Update Project Assets                  |
|:bookmark:                 |`:bookmark:`                   |Project Releases or Version Tags       |
|:bulb:                     |`:bulb:`                       |Add Comments in your code              |
|:card_file_box:            |`:card_file_box:`              |Perform Database Structural changes    |
|:coffee:                   |`:coffee:`                     |Initial or Non-important changes       |
|:construction:             |`:construction:`               |Work in Progress                       |
|:fire:                     |`:fire:`                       |Remove Code and Files                  |
|:hammer:                   |`:hammer:`                     |Add or update development scripts      |
|:iphone:                   |`:iphone:`                     |Work on Responsive Design              |
|:notebook:                 |`:notebook:`                   |Documentation                          |
|:package:                  |`:package:`                    |Add or setup package                   |
|:passport_control:         |`:passport_control:`           |Authorization, roles and permissions   |
|:pen:                      |`:pen:`                        |Fix Typos                              |
|:recycle:                  |`:recycle:`                    |Refactor Code                          |
|:rewind:                   |`:rewind:`                     |Revert Changes                         |
|:sparkles:                 |`:sparkles:`                   |Introduce a new Feature                |
|:seedling:                 |`:seedling:`                   |Add or update database seed files      |
|:truck:                    |`:truck:`                      |Rename Files, Routes etc.              |
|:twisted_rightwards_arrows:|`:twisted_rightwards_arrows:`  |Merge Branches                         |
|:wrench:                   |`:wrench:`                     |Update configuration files             |
|:zap:                      |`:zap:`                        |Write code to improve performance      |

Example Usage:

```bash
# Commit a message that has :art: emoji at the beggining and references issue #1 
$ git commit -m ":art: Updated README.md File (#1)"

# Change previous commit message
$ git commit --amend -m ":pencil2: Fixed typo in README.md File (#1)"
```

The examples above will display:

:art: Updated README.md File (ISSUE#1)

:pencil2: Fixed typo in README.md File (ISSUE#1)  

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

The VueJs is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
