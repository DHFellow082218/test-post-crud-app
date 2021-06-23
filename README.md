# SAMPLE READ ME

This is a sample readme file

## Table of contents

* [General Info](#general-info)
* [Features](#features)
* [Scope](#scope)
* [Technologies](#technologies)
  * [Frameworks](#frameworks)
  * [Packages](#packages)
* [Contributing](#contributing)
  * [Forking the Project](#forking-the-project)
  * [Code Consistency](#code-consistency)
  * [Commiting Messages](#commiting-messages)
* [Project Setup](#project-setup)
* [License](#license)

## General Info

To be Added

## Features

To be Added

## Scope

To be Added
	
## Technologies

Project is created with:

### Frameworks

|Name                                                                              |Version          |
|:--------------------------------------------------------------------------------:|:---------------:|
|[Laravel](https://laravel.com/docs/8.x)                                           |`^8.0.0`         |
|[VueJS](https://vuejs.org/v2/guide/)                                              |`^2.0.0`         |

### Packages

|Name 		                                                                                                      |Version          |Function                                     |
|:---------------------------------------------------------------------------------------------:                |:---------------:|:-------------------------------------------:|
|[barryvdh/laravel-dompdf](https://github.com/barryvdh/laravel-dompdf)                                          |`^0.9.0`         |HTML to PDF Renderer                         |
|[lorisleiva/laravel-actions](https://laravelactions.com/2.x/installation.html)                                 |`^1.0.0`         |Organize Code Structure                      |
|[laravel/telescope](https://laravel.com/docs/8.x/telescope)                                                    |`^4.0.0`         |Performance Monitoring and Testing           |
|[maatwebsite/excel](https://docs.laravel-excel.com/3.1/getting-started/installation.html)                      |`^3.1.0`         |Excel Renderer                               |
|[spatie/laravel-permission](https://spatie.be/docs/laravel-permission/v3/installation-laravel)                 |`^3.0.0`         |Associate Users with Roles and Permissions   |
|[spatie/laravel-activitylog](https://spatie.be/docs/laravel-activitylog/v4/introduction)                       |`^4.0.0`         |Activity Logging                             |
|[MarcinOrlowski/laravel-api-response-builder](https://github.com/MarcinOrlowski/laravel-api-response-builder)  |`^9.0.0`         |API Response Builder                         |
|[tymon/jwt-auth](https://jwt-auth.readthedocs.io/en/develop/laravel-installation/)                             |`^1.0.0`         |API Token Authentication                     |
|[Vue Router](https://router.vuejs.org/guide/)                                                                  |`^3.0.0`         |Official Router For VueJS                    |
|[Vuex](https://vuex.vuejs.org/)                                                                                |`^2.0.0`         |State Management For VueJS                   |


## Project Setup

* Set up your `.env file` by copying the contents of the `.env.example` file then configure it according to your **MySQL Database Credentials** to establish a connection.

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
```

* After setting up your `.env` file, run the following code to setup the project.

```bash
# Install package dependencies 
$ composer install 
$ npm i

# Generate the APP_KEY and JWT_SECRET
$ php artisan key:generate
$ php artisan jwt:secret 

# Run dump-autoload 
$ composer dump-autoload

# Run Migrations and Seeders
$ php artisan migrate:fresh 
$ php artisan db:seed

# Clear the cache, config and routes
$ php artisan cache:clear 
$ php artisan config:clear 
$ php artisan route:clear 
```

* Then Start the Server  

```bash
# Start the server
$ php artisan serve 
$ npm run watch
```

## Contributing

### Repository Structure

The main repository will be divided into branches that may increase over time to modularize development. The purpose of the **first three branches** will remain the same throughout our project development.

|Branch        		                       |Description                                                                                                                                |
|:----------------------------------------:|:---------------------------------------------------------------------------------------------------------------------------------------:|
|`master`                                  |The default branch; will always contain the latest changes. Contributors are encourage to often pull code from this branch in their forks|
|`_develop`                                |This branch cointers code to be tested in a live server                                                                                  |  
|`_production`                             |This branch contains code that will be used for deployment                                                                               |

### Forking the Project  

Contributors will be using [Standard Fork & Pull Request Workflow](https://gist.github.com/Chaser324/ce0505fbed06b947d962). [Fork the repository](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo) then run the following code to sync your fork to the main repository.

```bash
# Add upstream to remote 
git remote add upstream https://github.com/ictdu/spcf-general-accounting.git

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
|:art:                      |`:art:`                        |Improve Code Struture or Format        |
|:bug:                      |`:bug:`                        |Bug Fixing                             |
|:bulb:                     |`:bulb:`                       |Add Comments in your code              |
|:coffee:                   |`:coffee:`                     |Initial or Non-important changes       |
|:construction:             |`:construction:`               |Work in Progress                       |
|:fire:                     |`:fire:`                       |Remove Code and Files                  |
|:notebook:                 |`:notebook:`                   |Documentation                          |
|:pencil2:                  |`:pencil2:`                    |Fix Typos                              |
|:recycle:                  |`:recycle:`                    |Refactor Code                          |
|:truck:                    |`:truck:`                      |Rename Files, Routes etc.              |
|:twisted_rightwards_arrows:|`:twisted_rightwards_arrows:`  |Merge Branches                         |
|:rewind:                   |`:rewind:`                     |Revert Changes                         |
|:iphone:                   |`:iphone:`                     |Work on Responsive Design              |

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
