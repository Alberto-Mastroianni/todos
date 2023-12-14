export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.a47158d4.js","app":"_app/immutable/entry/app.5c127161.js","imports":["_app/immutable/entry/start.a47158d4.js","_app/immutable/chunks/scheduler.afabb3ec.js","_app/immutable/chunks/singletons.96427c0a.js","_app/immutable/entry/app.5c127161.js","_app/immutable/chunks/scheduler.afabb3ec.js","_app/immutable/chunks/index.5bfae8ca.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();