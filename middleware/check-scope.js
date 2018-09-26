export default function(context) {
  console.log("[Middleware] Check Cope");
  context.store.dispatch("initAuth", context.req);
}
