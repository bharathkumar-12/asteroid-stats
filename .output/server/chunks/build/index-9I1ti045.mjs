import { ssrRenderAttrs, ssrRenderComponent, ssrIncludeBooleanAttr, ssrRenderClass, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { defineComponent, createElementBlock, ref, provide, computed, watch, mergeProps, unref, isRef, useSSRContext } from 'vue';
import responseData from './data-NpUELSnS.mjs';

const _sfc_main$2 = {
  __name: "DateInput",
  __ssrInlineRender: true,
  props: {
    label: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    modelValue: {
      type: String,
      required: false
    },
    required: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "date"
    },
    allowedRange: {
      type: Object,
      required: false,
      default: () => null
      // Defaults to no restriction
    }
  },
  setup(__props) {
    const props = __props;
    const inputClasses = computed(() => {
      return [
        "w-full pl-4 pr-12 py-3 rounded-lg text-white",
        "bg-white/5 border border-white/10",
        "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black",
        "placeholder:text-gray-500",
        "transition-all duration-300",
        "hover:border-white/20",
        "[&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full"
      ].join(" ");
    });
    const computedMinDate = computed(() => {
      var _a;
      return ((_a = props.allowedRange) == null ? void 0 : _a.start) || "";
    });
    const computedMaxDate = computed(() => {
      var _a;
      return ((_a = props.allowedRange) == null ? void 0 : _a.end) || "";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><label${ssrRenderAttr("for", __props.id)} class="block text-sm font-light text-gray-300 mb-2">${ssrInterpolate(__props.label)} `);
      if (__props.required) {
        _push(`<span class="text-blue-400">*</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</label><div class="relative"><input${ssrRenderAttr("type", __props.type)}${ssrRenderAttr("id", __props.id)}${ssrRenderAttr("value", __props.modelValue)} class="${ssrRenderClass(inputClasses.value)}"${ssrIncludeBooleanAttr(__props.required) ? " required" : ""}${ssrRenderAttr("min", computedMinDate.value)}${ssrRenderAttr("max", computedMaxDate.value)}><div class="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"><svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DateInput.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "AsteroidStats",
  __ssrInlineRender: true,
  props: {
    statTitle: {
      type: String,
      required: true
    },
    statValue: {
      type: [Number, String],
      required: true
    },
    unit: {
      type: String,
      required: false
    },
    astName: {
      type: String
    }
  },
  setup(__props) {
    const props = __props;
    const formattedValue = computed(() => {
      if (typeof props.statValue === "number") {
        return props.statValue.toLocaleString();
      }
      return props.statValue;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col h-full" }, _attrs))}><div class="text-sm font-light text-blue-400 mb-2">${ssrInterpolate(__props.statTitle)}</div>`);
      if (__props.astName) {
        _push(`<div class="text-lg text-gray-300 mb-4">${ssrInterpolate(__props.astName)}</div>`);
      } else {
        _push(`<div class="h-6"></div>`);
      }
      _push(`<div class="text-3xl font-light text-white mb-2">${ssrInterpolate(unref(formattedValue))}</div>`);
      if (__props.unit) {
        _push(`<div class="text-sm text-gray-400">${ssrInterpolate(__props.unit)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AsteroidStats.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
defineComponent({
  name: "ServerPlaceholder",
  render() {
    return createElementBlock("div");
  }
});
const clientOnlySymbol = Symbol.for("nuxt:client-only");
const __nuxt_component_2 = defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    provide(clientOnlySymbol, true);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const loading = ref(false);
    const startDate = ref("");
    const endDate = ref("");
    const dateRange = ref({});
    const responseData$1 = ref(responseData);
    const asteroids = computed(() => {
      const objects = responseData$1.value.near_earth_objects;
      return Object.values(objects).flat();
    });
    const fastestAsteroid = computed(() => {
      return asteroids.value.reduce((fastest, asteroid) => {
        var _a;
        const speed = parseFloat(
          (_a = asteroid.close_approach_data[0]) == null ? void 0 : _a.relative_velocity.kilometers_per_hour
        );
        return speed > ((fastest == null ? void 0 : fastest.speed) || 0) ? { name: asteroid.name, speed } : fastest;
      }, null);
    });
    const closestAsteroid = computed(() => {
      return asteroids.value.reduce((closest, asteroid) => {
        var _a;
        const distance = parseFloat(
          (_a = asteroid.close_approach_data[0]) == null ? void 0 : _a.miss_distance.kilometers
        );
        return distance < ((closest == null ? void 0 : closest.distance) || Infinity) ? { name: asteroid.name, distance } : closest;
      }, null);
    });
    const averageSize = computed(() => {
      const totalSize = asteroids.value.reduce((sum, asteroid) => {
        const diameterMin = asteroid.estimated_diameter.kilometers.estimated_diameter_min;
        const diameterMax = asteroid.estimated_diameter.kilometers.estimated_diameter_max;
        const averageDiameter = (diameterMin + diameterMax) / 2;
        return sum + averageDiameter;
      }, 0);
      return (totalSize / asteroids.value.length).toFixed(2);
    });
    const chartLabels = computed(
      () => Object.keys(responseData$1.value.near_earth_objects)
    );
    computed(
      () => chartLabels.value.map(
        (date) => {
          var _a;
          return ((_a = responseData$1.value.near_earth_objects[date]) == null ? void 0 : _a.length) || 0;
        }
      )
    );
    computed(() => [
      { offset: 0, color: "rgba(255, 99, 132, 0.5)" },
      { offset: 0.5, color: "rgba(54, 162, 235, 0.5)" },
      { offset: 1, color: "rgba(75, 192, 192, 0.5)" }
    ]);
    const setDateRange = () => {
      endDate.value = "";
      const start = new Date(startDate.value);
      const calculatedEndDate = new Date(start);
      calculatedEndDate.setDate(start.getDate() + 7);
      dateRange.value = {
        start: startDate.value,
        end: calculatedEndDate.toISOString().split("T")[0]
      };
    };
    watch(startDate, () => {
      if (startDate.value) {
        setDateRange();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DateInput = _sfc_main$2;
      const _component_AsteroidStats = _sfc_main$1;
      const _component_ClientOnly = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-12" }, _attrs))}><section class="relative py-20 overflow-hidden"><div class="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black/40 z-0"></div><div class="relative z-10 max-w-4xl mx-auto text-center"><h1 class="text-5xl md:text-6xl font-light mb-6 tracking-tight"> Explore Near-Earth Asteroids </h1><p class="text-xl text-gray-300 mb-8"> Track and analyze asteroid data from NASA&#39;s NEO database </p></div></section><section class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"><h2 class="text-2xl font-light mb-6 text-blue-400">Asteroid Search</h2><form class="grid grid-cols-1 md:grid-cols-3 gap-6">`);
      _push(ssrRenderComponent(_component_DateInput, {
        id: "start_date",
        label: "Start Date",
        modelValue: unref(startDate),
        "onUpdate:modelValue": [($event) => isRef(startDate) ? startDate.value = $event : null, setDateRange],
        required: "",
        class: "bg-white/5 border-white/10 text-white"
      }, null, _parent));
      _push(ssrRenderComponent(_component_DateInput, {
        id: "end_date",
        label: "End Date",
        modelValue: unref(endDate),
        "onUpdate:modelValue": ($event) => isRef(endDate) ? endDate.value = $event : null,
        allowedRange: unref(dateRange),
        class: "bg-white/5 border-white/10 text-white"
      }, null, _parent));
      _push(`<div class="flex items-end"><button type="submit" class="w-full bg-blue-500 hover:bg-blue-600 text-white font-light py-3 px-6 rounded-lg transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black relative"${ssrIncludeBooleanAttr(unref(loading)) ? " disabled" : ""}><span class="${ssrRenderClass({ "opacity-0": unref(loading) })}">Search Asteroids</span>`);
      if (unref(loading)) {
        _push(`<div class="absolute inset-0 flex items-center justify-center"><div class="relative w-6 h-6"><div class="absolute inset-0 rounded-full border-2 border-white/20"></div><div class="absolute inset-0 rounded-full border-2 border-t-white border-r-transparent border-b-transparent border-l-transparent animate-spin"></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</button></div></form></section>`);
      if (unref(loading)) {
        _push(`<div class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"><div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"><div class="relative w-48 h-48 mb-8"><div class="absolute inset-0 rounded-full border border-blue-400/20 animate-orbit"></div><div class="absolute inset-4 rounded-full border border-blue-400/10 animate-orbit" style="${ssrRenderStyle({ "animation-duration": "15s" })}"></div><div class="absolute inset-8 rounded-full border border-blue-400/5 animate-orbit" style="${ssrRenderStyle({ "animation-duration": "20s" })}"></div><div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-yellow-400/20 border border-yellow-400/30 flex items-center justify-center"><div class="w-12 h-12 rounded-full bg-yellow-400/30 border border-yellow-400/40 animate-pulse"></div><div class="absolute inset-0 rounded-full bg-yellow-400/10 animate-ping"></div></div><div class="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-blue-400/20 border border-blue-400/30 animate-orbit"></div><div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-green-400/20 border border-green-400/30 animate-orbit" style="${ssrRenderStyle({ "animation-duration": "15s" })}"></div><div class="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-purple-400/20 border border-purple-400/30 animate-orbit" style="${ssrRenderStyle({ "animation-duration": "20s" })}"></div></div><div class="relative"><p class="text-white text-lg font-light mb-2">Fetching asteroid data</p><div class="flex justify-center space-x-1"><div class="w-2 h-2 rounded-full bg-blue-400/60 animate-bounce" style="${ssrRenderStyle({ "animation-delay": "0s" })}"></div><div class="w-2 h-2 rounded-full bg-blue-400/60 animate-bounce" style="${ssrRenderStyle({ "animation-delay": "0.2s" })}"></div><div class="w-2 h-2 rounded-full bg-blue-400/60 animate-bounce" style="${ssrRenderStyle({ "animation-delay": "0.4s" })}"></div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<section class="grid gap-6 grid-cols-1 md:grid-cols-3">`);
      _push(ssrRenderComponent(_component_AsteroidStats, {
        statTitle: "Fastest Asteroid",
        astName: unref(fastestAsteroid).name,
        statValue: unref(fastestAsteroid).speed,
        unit: "km/h",
        class: "bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
      }, null, _parent));
      _push(ssrRenderComponent(_component_AsteroidStats, {
        statTitle: "Closest Asteroid",
        astName: unref(closestAsteroid).name,
        statValue: unref(closestAsteroid).distance,
        unit: "km",
        class: "bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
      }, null, _parent));
      _push(ssrRenderComponent(_component_AsteroidStats, {
        statTitle: "Average Asteroid Size",
        statValue: unref(averageSize),
        unit: "km",
        class: "bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
      }, null, _parent));
      _push(`</section><section class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"><h2 class="text-2xl font-light mb-6 text-blue-400">Asteroid Activity</h2>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</section><section class="grid gap-8 md:grid-cols-2"><div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"><h2 class="text-2xl font-light mb-6 text-blue-400">Asteroid Facts</h2><div class="space-y-6"><div class="flex items-start space-x-4"><div class="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center"><svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg></div><div><h3 class="text-lg font-light text-white mb-2">Fastest Known Asteroid</h3><p class="text-gray-300">The fastest asteroid ever recorded was traveling at approximately 70,000 km/h (43,500 mph) relative to Earth.</p></div></div><div class="flex items-start space-x-4"><div class="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center"><svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div><div><h3 class="text-lg font-light text-white mb-2">Closest Approach</h3><p class="text-gray-300">The closest asteroid approach in recent history was just 2,950 km (1,830 miles) from Earth&#39;s surface.</p></div></div><div class="flex items-start space-x-4"><div class="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center"><svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg></div><div><h3 class="text-lg font-light text-white mb-2">Size Distribution</h3><p class="text-gray-300">Most near-Earth asteroids are between 100 meters and 1 kilometer in diameter, with some as large as 5 kilometers.</p></div></div></div></div><div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"><h2 class="text-2xl font-light mb-6 text-blue-400">NASA Missions</h2><div class="space-y-8"><div class="flex items-start space-x-6"><div class="flex-shrink-0 w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center"><svg class="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg></div><div><h3 class="text-xl font-light text-white mb-2">OSIRIS-REx</h3><p class="text-gray-300">First U.S. mission to return asteroid samples to Earth. Successfully collected material from asteroid Bennu in 2020.</p><div class="mt-4 flex space-x-4"><span class="text-sm text-blue-400">Launch: 2016</span><span class="text-sm text-blue-400">Return: 2023</span></div></div></div><div class="flex items-start space-x-6"><div class="flex-shrink-0 w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center"><svg class="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg></div><div><h3 class="text-xl font-light text-white mb-2">DART Mission</h3><p class="text-gray-300">First planetary defense test against asteroid impact. Successfully altered asteroid Dimorphos&#39;s orbit in 2022.</p><div class="mt-4 flex space-x-4"><span class="text-sm text-blue-400">Launch: 2021</span><span class="text-sm text-blue-400">Impact: 2022</span></div></div></div></div></div></section><section class="relative h-[400px] bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 overflow-hidden"><h2 class="text-2xl font-light mb-6 text-blue-400">Asteroid Approach Simulation</h2><div class="relative h-full"><div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center"><div class="w-24 h-24 rounded-full bg-blue-500/30 border border-blue-400/40"></div><div class="absolute inset-0 rounded-full bg-blue-400/10 animate-pulse"></div></div><div class="absolute inset-0 border border-blue-400/10 rounded-full"></div><div class="absolute inset-4 border border-blue-400/5 rounded-full"></div><div class="absolute inset-8 border border-blue-400/5 rounded-full"></div>`);
      if (unref(asteroids).length > 0) {
        _push(`<!--[-->`);
        ssrRenderList(unref(asteroids).slice(0, 5), (asteroid) => {
          var _a;
          _push(`<div class="absolute animate-asteroid" style="${ssrRenderStyle({
            width: `${Math.min(asteroid.estimated_diameter.kilometers.estimated_diameter_max * 40, 48)}px`,
            height: `${Math.min(asteroid.estimated_diameter.kilometers.estimated_diameter_max * 40, 48)}px`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.max(5, Math.min(15, ((_a = asteroid.close_approach_data[0]) == null ? void 0 : _a.relative_velocity.kilometers_per_hour) / 1e4))}s`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          })}"><div class="relative"><div class="absolute inset-0 rounded-full bg-yellow-400/20 animate-pulse"></div><div class="absolute inset-2 rounded-full bg-yellow-400/10 animate-pulse" style="${ssrRenderStyle({ "animation-delay": "0.5s" })}"></div><div class="absolute inset-4 rounded-full bg-yellow-400/5 animate-pulse" style="${ssrRenderStyle({ "animation-delay": "1s" })}"></div><div class="relative w-full h-full rounded-full bg-white/90 flex items-center justify-center border-2 border-yellow-400/50 shadow-lg"><div class="absolute w-1/2 h-1/2 rounded-full bg-gray-200/50 top-1/4 left-1/4"></div><div class="absolute w-1/3 h-1/3 rounded-full bg-gray-300/50 top-1/3 right-1/4"></div><div class="absolute inset-0 rounded-full bg-white/20 animate-pulse"></div></div><div class="absolute -top-8 left-1/2 transform -translate-x-1/2"><div class="bg-black/60 backdrop-blur-sm border border-yellow-400/30 rounded-lg px-2 py-1 text-xs text-white whitespace-nowrap animate-float">${ssrInterpolate(asteroid.name)}</div><div class="absolute left-1/2 -translate-x-1/2 w-px h-2 bg-yellow-400/20"></div></div></div></div>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<div class="absolute inset-0 flex items-center justify-center"><p class="text-gray-400">Select a date range to see asteroid simulations</p></div>`);
      }
      _push(`<div class="absolute top-4 right-4 bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg p-4 max-w-xs"><h3 class="text-sm font-light text-blue-400 mb-2">Simulation Details</h3><div class="space-y-2 text-sm text-gray-300"><p>Showing ${ssrInterpolate(Math.min(unref(asteroids).length, 5))} asteroids</p><p>Size scale: 1km = 20px</p><p>Speed: Relative to orbital velocity</p><p class="text-xs text-blue-400">Hover over asteroids to see names</p></div></div></div></section><section class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"><h2 class="text-2xl font-light mb-6 text-blue-400">Impact Statistics</h2><div class="grid gap-6 md:grid-cols-3"><div class="text-center"><div class="text-4xl font-light text-blue-400 mb-2">~1,000</div><div class="text-gray-300">Near-Earth asteroids larger than 1km</div></div><div class="text-center"><div class="text-4xl font-light text-blue-400 mb-2">~15,000</div><div class="text-gray-300">Near-Earth asteroids larger than 140m</div></div><div class="text-center"><div class="text-4xl font-light text-blue-400 mb-2">~100</div><div class="text-gray-300">New asteroids discovered monthly</div></div></div></section><section class="text-center py-12"><h2 class="text-3xl font-light text-white mb-4">Want to Learn More?</h2><p class="text-gray-300 mb-8 max-w-2xl mx-auto"> NASA&#39;s Near-Earth Object Program provides detailed information about asteroids and comets that orbit near Earth. </p><a href="https://cneos.jpl.nasa.gov/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-light transition-all duration-300"> Visit NASA NEO Program <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></a></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-9I1ti045.mjs.map
