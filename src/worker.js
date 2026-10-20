// Sends every request to one address (https://farsanaa.in) so Google sees a
// single copy of the site, then serves the static files with security and
// caching headers.
const HOST = "farsanaa.in";

const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://static.cloudflareinsights.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' data: blob:",
  "connect-src 'self' https://script.google.com https://script.googleusercontent.com https://formsubmit.co https://cloudflareinsights.com",
  "frame-src 'self'",
  "frame-ancestors 'self'",
  "form-action 'self' https://formsubmit.co",
  "base-uri 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

const SECURITY = {
  "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "SAMEORIGIN",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
  "Content-Security-Policy": CSP,
};

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
    let assetRequest = request;
    if (/^\/google[0-9a-f]+\.html$/.test(url.pathname)) {
      url.pathname = url.pathname.slice(0, -5);
      assetRequest = new Request(url, request);
    }

    const res = await env.ASSETS.fetch(assetRequest);
    const out = new Response(res.body, res);
    for (const [k, v] of Object.entries(SECURITY)) out.headers.set(k, v);

    const type = out.headers.get("Content-Type") || "";
    if (/^text\/(html|plain|css|xml)|javascript|json/.test(type) && !/charset/i.test(type)) {
      out.headers.set("Content-Type", type + "; charset=utf-8");
    }
    // Files under /assets/ change rarely; CSS and JS are linked with ?v= so a
    // new version is fetched as soon as the HTML changes.
    if (res.status === 200 && url.pathname.startsWith("/assets/")) {
      out.headers.set("Cache-Control", "public, max-age=2592000");
    }
    return out;
  },
};
