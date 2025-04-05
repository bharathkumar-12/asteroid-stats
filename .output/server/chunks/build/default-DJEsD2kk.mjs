import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-black text-white" }, _attrs))}><header class="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10"><div class="max-w-[1440px] mx-auto px-4 lg:px-8"><div class="h-20 flex items-center justify-between"><div class="flex items-center space-x-4"><h1 class="text-2xl font-light tracking-wider"><span class="text-blue-400">ASTEROID</span> STATS </h1></div><nav class="hidden md:flex items-center space-x-8"><a href="#" class="text-sm text-gray-300 hover:text-white transition-colors">Home</a><a href="#" class="text-sm text-gray-300 hover:text-white transition-colors">About</a><a href="#" class="text-sm text-gray-300 hover:text-white transition-colors">Documentation</a></nav></div></div></header><main class="pt-24 pb-12"><div class="max-w-[1440px] mx-auto px-4 lg:px-8">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></main><footer class="border-t border-white/10 py-8"><div class="max-w-[1440px] mx-auto px-4 lg:px-8"><div class="flex flex-col md:flex-row justify-between items-center"><p class="text-sm text-gray-400">\xA9 2024 Asteroid Stats. All rights reserved.</p><div class="flex space-x-6 mt-4 md:mt-0"><a href="#" class="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</a><a href="#" class="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</a></div></div></div></footer></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-DJEsD2kk.mjs.map
