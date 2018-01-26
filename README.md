# nxt-graphics

## Development

`yarn dev` or `npm run dev`

## Building

You probably don't need this since development builds are identical to production builds, and you should check in your compiled files to source control to make life easy for non-devs.
But;

`yarn build` or `npm run build`

## Emulating Caspar

Templates in Caspar will ignore web security features, like disallowing responses with empty `Access-Control-Allow-Origin` headers from being handled in code.

To emulate this, you can disable web security features in your local browser too.
If you have Chrome Canary installed, you can run `./run-canary.sh` to spin up a Chrome Canary instance with disabled web security.

Chrome Canary is chosen in order to not interfere with Chrome, which for some reason can't start a new instance if already running.
Chrome Canary is a poor default, and should ideally be the version of Chromium that Caspar is running, but it's a hassle to get.
See the `'Downloading old builds of Chrome / Chromium'` section on [the Chromium Download page](https://www.chromium.org/getting-involved/download-chromium) if you care to have a go.

## Configuration

Copy config.example.json, rename it config.json and modify it to your liking.
You must restart webpack (see Development section) before changes take effect.

- `postBuild.copyTo` (array of strings): after build, copy all templates to every given folder. Typically you want to set this to your test Caspar's templates folder.
