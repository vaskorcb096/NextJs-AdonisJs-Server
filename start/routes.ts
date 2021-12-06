/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
 
  Route.post('/register', 'Auth/AuthController.register');
  Route.post('/login', 'Auth/AuthController.login');
  Route.get('/logout', 'Auth/AuthController.logout');
  Route.get('/validUser', 'Auth/AuthController.getUser');

}).prefix('auth')

Route.group(()=>{
  Route.group(()=>{
    Route.post('/post', 'Post/PostsController.post');
    Route.post('/like', 'Post/PostsController.like');
    Route.post('/comment', 'Post/PostsController.comment');
    Route.post('/reply_comment', 'Post/PostsController.reply_comment');
    Route.get('/getpost', 'Post/PostsController.getPost');
    Route.get('/getSpecificUpser/:email','Post/PostsController.getUserInfo')

  })

}).prefix('post')
Route.group(()=>{
  Route.group(()=>{
    Route.post('/msg','Conversation/ConversationController.conversation');
    Route.get('/msg/:id','Conversation/ConversationController.getConversation');
    Route.post('/cmsg','Conversation/ConversationController.messages');
    Route.get('/getmsg/:id','Conversation/ConversationController.getmessages');
    Route.get('/getUser/:id','Conversation/ConversationController.getUsername');
    Route.post('/DeleteMsg/:id','Conversation/ConversationController.deleteSppecificUserMessage');
  })

}).prefix('conversation')
Route.delete('/posts/:id','Post/PostsController.deletePost');
Route.delete('/comment/:id','Post/PostsController.deleteComment');
Route.delete('/replyComment/:id','Post/PostsController.deleteReplyComment');







