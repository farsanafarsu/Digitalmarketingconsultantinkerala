// Sends every request to one address (https://farsanaa.in) so Google sees a
// single copy of the site, then serves the static files.
const HOST = "farsanaa.in";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const local = url.hostname === "localhost" || url.hostname === "127.0.0.1";
    if (!local && (url.hostname !== HOST || url.protocol !== "https:")) {
      url.hostname = HOST;
      url.protocol = "https:";
      url.port = "";
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
