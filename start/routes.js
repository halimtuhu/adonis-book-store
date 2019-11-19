'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
const HomeController = use('App/Controllers/Http/HomeController')
const UserController = use('App/Controllers/Http/UserController')

Route.get('/', 'HomeController.index')
Route.get('/about', 'HomeController.about')

Route.get('/users', 'UserController.index')
Route.post('/users', 'UserController.store')
Route.get('/users/:id', 'UserController.detail')
Route.put('/users/:id', 'UserController.update')
Route.delete('/users/:id', 'UserController.delete')