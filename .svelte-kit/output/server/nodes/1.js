

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.3d3e4a31.js","_app/immutable/chunks/scheduler.afabb3ec.js","_app/immutable/chunks/index.5bfae8ca.js","_app/immutable/chunks/singletons.96427c0a.js"];
export const stylesheets = [];
export const fonts = [];
