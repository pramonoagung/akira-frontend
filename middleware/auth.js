export default function(context) {
  if (!context.store.getters.isAuthenticated) {
    context.redirect("/");
  }
  console.log("Middleware Auth Running");
}
