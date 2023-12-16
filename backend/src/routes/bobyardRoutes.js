import { addNewComment, getComments, updateComment, deleteComment } from "../controllers/bobyardController";

const routes = (app) => {
    // create route for comments
    app.route('/comments')
      // create get request (list all)
      .get(getComments)
      // create post request (create new comment)
      .post(addNewComment);
    // create a new route to get comments by their ID's
    app.route('/comments/:commentID')
      // create put request (edit comment)
      .put(updateComment)
      // create delete request (delete comment)
      .delete(deleteComment)
}

export default routes;