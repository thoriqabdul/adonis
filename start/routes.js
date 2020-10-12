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

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.group(() => {
  Route.post('login', 'AuthController.postLoginJwt').as('loginJwt')
}).prefix('api/auth')

Route.group(() => {
    Route.get('index', 'StudentController.index')
    Route.post('/store', 'StudentController.store')
    Route.get('/detail/:id', 'StudentController.detail')
    Route.put('/update/:id', 'StudentController.update')
    Route.delete('/destroy/:id', 'StudentController.destroy')
}).prefix('api/v1').middleware(['auth:jwt'])

Route.group(() => {
    Route.get('index', 'UserController.index')
    Route.post('/store', 'UserController.store')
    Route.get('/detail/:id', 'UserController.detail')
    Route.put('/update/:id', 'UserController.update')
    Route.delete('/destroy/:id', 'UserController.destroy')
}).prefix('api/v2').middleware(['auth:jwt'])
