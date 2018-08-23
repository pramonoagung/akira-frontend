export default function(context) {
  //console.log(context.store.state);

  if (!context.store.state.auth.auth) {
    return context.redirect("/");
  }

  console.log("Middleware Auth Running");
}
