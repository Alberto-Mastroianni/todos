

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.f333031c.js","_app/immutable/chunks/scheduler.afabb3ec.js","_app/immutable/chunks/index.5bfae8ca.js"];
export const stylesheets = ["_app/immutable/assets/2.07ef6b3c.css"];
export const fonts = [];
