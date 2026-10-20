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
    // Google's verification file must return 200 at its exact .html URL,
    // not the asset server's redirect to the extensionless path.
    if (/^\/google[0-9a-f]+\.html$/.test(url.pathname)) {
      url.pathname = url.pathname.slice(0, -5);
      return env.ASSETS.fetch(new Request(url, request));
    }
    return env.ASSETS.fetch(request);
  },
};
