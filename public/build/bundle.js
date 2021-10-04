
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
var app = (function () {
    'use strict';

    function noop() { }
    function is_promise(value) {
        return value && typeof value === 'object' && typeof value.then === 'function';
    }
    function add_location(element, file, line, column, char) {
        element.__svelte_meta = {
            loc: { file, line, column, char }
        };
    }
    function run(fn) {
        return fn();
    }
    function blank_object() {
        return Object.create(null);
    }
    function run_all(fns) {
        fns.forEach(run);
    }
    function is_function(thing) {
        return typeof thing === 'function';
    }
    function safe_not_equal(a, b) {
        return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
    }
    let src_url_equal_anchor;
    function src_url_equal(element_src, url) {
        if (!src_url_equal_anchor) {
            src_url_equal_anchor = document.createElement('a');
        }
        src_url_equal_anchor.href = url;
        return element_src === src_url_equal_anchor.href;
    }
    function is_empty(obj) {
        return Object.keys(obj).length === 0;
    }
    function append(target, node) {
        target.appendChild(node);
    }
    function insert(target, node, anchor) {
        target.insertBefore(node, anchor || null);
    }
    function detach(node) {
        node.parentNode.removeChild(node);
    }
    function destroy_each(iterations, detaching) {
        for (let i = 0; i < iterations.length; i += 1) {
            if (iterations[i])
                iterations[i].d(detaching);
        }
    }
    function element(name) {
        return document.createElement(name);
    }
    function text(data) {
        return document.createTextNode(data);
    }
    function space() {
        return text(' ');
    }
    function empty() {
        return text('');
    }
    function listen(node, event, handler, options) {
        node.addEventListener(event, handler, options);
        return () => node.removeEventListener(event, handler, options);
    }
    function attr(node, attribute, value) {
        if (value == null)
            node.removeAttribute(attribute);
        else if (node.getAttribute(attribute) !== value)
            node.setAttribute(attribute, value);
    }
    function children(element) {
        return Array.from(element.childNodes);
    }
    function set_input_value(input, value) {
        input.value = value == null ? '' : value;
    }
    function custom_event(type, detail, bubbles = false) {
        const e = document.createEvent('CustomEvent');
        e.initCustomEvent(type, bubbles, false, detail);
        return e;
    }

    let current_component;
    function set_current_component(component) {
        current_component = component;
    }
    function get_current_component() {
        if (!current_component)
            throw new Error('Function called outside component initialization');
        return current_component;
    }

    const dirty_components = [];
    const binding_callbacks = [];
    const render_callbacks = [];
    const flush_callbacks = [];
    const resolved_promise = Promise.resolve();
    let update_scheduled = false;
    function schedule_update() {
        if (!update_scheduled) {
            update_scheduled = true;
            resolved_promise.then(flush);
        }
    }
    function add_render_callback(fn) {
        render_callbacks.push(fn);
    }
    let flushing = false;
    const seen_callbacks = new Set();
    function flush() {
        if (flushing)
            return;
        flushing = true;
        do {
            // first, call beforeUpdate functions
            // and update components
            for (let i = 0; i < dirty_components.length; i += 1) {
                const component = dirty_components[i];
                set_current_component(component);
                update(component.$$);
            }
            set_current_component(null);
            dirty_components.length = 0;
            while (binding_callbacks.length)
                binding_callbacks.pop()();
            // then, once components are updated, call
            // afterUpdate functions. This may cause
            // subsequent updates...
            for (let i = 0; i < render_callbacks.length; i += 1) {
                const callback = render_callbacks[i];
                if (!seen_callbacks.has(callback)) {
                    // ...so guard against infinite loops
                    seen_callbacks.add(callback);
                    callback();
                }
            }
            render_callbacks.length = 0;
        } while (dirty_components.length);
        while (flush_callbacks.length) {
            flush_callbacks.pop()();
        }
        update_scheduled = false;
        flushing = false;
        seen_callbacks.clear();
    }
    function update($$) {
        if ($$.fragment !== null) {
            $$.update();
            run_all($$.before_update);
            const dirty = $$.dirty;
            $$.dirty = [-1];
            $$.fragment && $$.fragment.p($$.ctx, dirty);
            $$.after_update.forEach(add_render_callback);
        }
    }
    const outroing = new Set();
    let outros;
    function group_outros() {
        outros = {
            r: 0,
            c: [],
            p: outros // parent group
        };
    }
    function check_outros() {
        if (!outros.r) {
            run_all(outros.c);
        }
        outros = outros.p;
    }
    function transition_in(block, local) {
        if (block && block.i) {
            outroing.delete(block);
            block.i(local);
        }
    }
    function transition_out(block, local, detach, callback) {
        if (block && block.o) {
            if (outroing.has(block))
                return;
            outroing.add(block);
            outros.c.push(() => {
                outroing.delete(block);
                if (callback) {
                    if (detach)
                        block.d(1);
                    callback();
                }
            });
            block.o(local);
        }
    }

    function handle_promise(promise, info) {
        const token = info.token = {};
        function update(type, index, key, value) {
            if (info.token !== token)
                return;
            info.resolved = value;
            let child_ctx = info.ctx;
            if (key !== undefined) {
                child_ctx = child_ctx.slice();
                child_ctx[key] = value;
            }
            const block = type && (info.current = type)(child_ctx);
            let needs_flush = false;
            if (info.block) {
                if (info.blocks) {
                    info.blocks.forEach((block, i) => {
                        if (i !== index && block) {
                            group_outros();
                            transition_out(block, 1, 1, () => {
                                if (info.blocks[i] === block) {
                                    info.blocks[i] = null;
                                }
                            });
                            check_outros();
                        }
                    });
                }
                else {
                    info.block.d(1);
                }
                block.c();
                transition_in(block, 1);
                block.m(info.mount(), info.anchor);
                needs_flush = true;
            }
            info.block = block;
            if (info.blocks)
                info.blocks[index] = block;
            if (needs_flush) {
                flush();
            }
        }
        if (is_promise(promise)) {
            const current_component = get_current_component();
            promise.then(value => {
                set_current_component(current_component);
                update(info.then, 1, info.value, value);
                set_current_component(null);
            }, error => {
                set_current_component(current_component);
                update(info.catch, 2, info.error, error);
                set_current_component(null);
                if (!info.hasCatch) {
                    throw error;
                }
            });
            // if we previously had a then/catch block, destroy it
            if (info.current !== info.pending) {
                update(info.pending, 0);
                return true;
            }
        }
        else {
            if (info.current !== info.then) {
                update(info.then, 1, info.value, promise);
                return true;
            }
            info.resolved = promise;
        }
    }
    function update_await_block_branch(info, ctx, dirty) {
        const child_ctx = ctx.slice();
        const { resolved } = info;
        if (info.current === info.then) {
            child_ctx[info.value] = resolved;
        }
        if (info.current === info.catch) {
            child_ctx[info.error] = resolved;
        }
        info.block.p(child_ctx, dirty);
    }

    const globals = (typeof window !== 'undefined'
        ? window
        : typeof globalThis !== 'undefined'
            ? globalThis
            : global);
    function create_component(block) {
        block && block.c();
    }
    function mount_component(component, target, anchor, customElement) {
        const { fragment, on_mount, on_destroy, after_update } = component.$$;
        fragment && fragment.m(target, anchor);
        if (!customElement) {
            // onMount happens before the initial afterUpdate
            add_render_callback(() => {
                const new_on_destroy = on_mount.map(run).filter(is_function);
                if (on_destroy) {
                    on_destroy.push(...new_on_destroy);
                }
                else {
                    // Edge case - component was destroyed immediately,
                    // most likely as a result of a binding initialising
                    run_all(new_on_destroy);
                }
                component.$$.on_mount = [];
            });
        }
        after_update.forEach(add_render_callback);
    }
    function destroy_component(component, detaching) {
        const $$ = component.$$;
        if ($$.fragment !== null) {
            run_all($$.on_destroy);
            $$.fragment && $$.fragment.d(detaching);
            // TODO null out other refs, including component.$$ (but need to
            // preserve final state?)
            $$.on_destroy = $$.fragment = null;
            $$.ctx = [];
        }
    }
    function make_dirty(component, i) {
        if (component.$$.dirty[0] === -1) {
            dirty_components.push(component);
            schedule_update();
            component.$$.dirty.fill(0);
        }
        component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
    }
    function init(component, options, instance, create_fragment, not_equal, props, append_styles, dirty = [-1]) {
        const parent_component = current_component;
        set_current_component(component);
        const $$ = component.$$ = {
            fragment: null,
            ctx: null,
            // state
            props,
            update: noop,
            not_equal,
            bound: blank_object(),
            // lifecycle
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
            // everything else
            callbacks: blank_object(),
            dirty,
            skip_bound: false,
            root: options.target || parent_component.$$.root
        };
        append_styles && append_styles($$.root);
        let ready = false;
        $$.ctx = instance
            ? instance(component, options.props || {}, (i, ret, ...rest) => {
                const value = rest.length ? rest[0] : ret;
                if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                    if (!$$.skip_bound && $$.bound[i])
                        $$.bound[i](value);
                    if (ready)
                        make_dirty(component, i);
                }
                return ret;
            })
            : [];
        $$.update();
        ready = true;
        run_all($$.before_update);
        // `false` as a special case of no DOM component
        $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
        if (options.target) {
            if (options.hydrate) {
                const nodes = children(options.target);
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.l(nodes);
                nodes.forEach(detach);
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.c();
            }
            if (options.intro)
                transition_in(component.$$.fragment);
            mount_component(component, options.target, options.anchor, options.customElement);
            flush();
        }
        set_current_component(parent_component);
    }
    /**
     * Base class for Svelte components. Used when dev=false.
     */
    class SvelteComponent {
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set($$props) {
            if (this.$$set && !is_empty($$props)) {
                this.$$.skip_bound = true;
                this.$$set($$props);
                this.$$.skip_bound = false;
            }
        }
    }

    function dispatch_dev(type, detail) {
        document.dispatchEvent(custom_event(type, Object.assign({ version: '3.43.0' }, detail), true));
    }
    function append_dev(target, node) {
        dispatch_dev('SvelteDOMInsert', { target, node });
        append(target, node);
    }
    function insert_dev(target, node, anchor) {
        dispatch_dev('SvelteDOMInsert', { target, node, anchor });
        insert(target, node, anchor);
    }
    function detach_dev(node) {
        dispatch_dev('SvelteDOMRemove', { node });
        detach(node);
    }
    function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
        const modifiers = options === true ? ['capture'] : options ? Array.from(Object.keys(options)) : [];
        if (has_prevent_default)
            modifiers.push('preventDefault');
        if (has_stop_propagation)
            modifiers.push('stopPropagation');
        dispatch_dev('SvelteDOMAddEventListener', { node, event, handler, modifiers });
        const dispose = listen(node, event, handler, options);
        return () => {
            dispatch_dev('SvelteDOMRemoveEventListener', { node, event, handler, modifiers });
            dispose();
        };
    }
    function attr_dev(node, attribute, value) {
        attr(node, attribute, value);
        if (value == null)
            dispatch_dev('SvelteDOMRemoveAttribute', { node, attribute });
        else
            dispatch_dev('SvelteDOMSetAttribute', { node, attribute, value });
    }
    function set_data_dev(text, data) {
        data = '' + data;
        if (text.wholeText === data)
            return;
        dispatch_dev('SvelteDOMSetData', { node: text, data });
        text.data = data;
    }
    function validate_each_argument(arg) {
        if (typeof arg !== 'string' && !(arg && typeof arg === 'object' && 'length' in arg)) {
            let msg = '{#each} only iterates over array-like objects.';
            if (typeof Symbol === 'function' && arg && Symbol.iterator in arg) {
                msg += ' You can use a spread to convert this iterable into an array.';
            }
            throw new Error(msg);
        }
    }
    function validate_slots(name, slot, keys) {
        for (const slot_key of Object.keys(slot)) {
            if (!~keys.indexOf(slot_key)) {
                console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
            }
        }
    }
    /**
     * Base class for Svelte components with some minor dev-enhancements. Used when dev=true.
     */
    class SvelteComponentDev extends SvelteComponent {
        constructor(options) {
            if (!options || (!options.target && !options.$$inline)) {
                throw new Error("'target' is a required option");
            }
            super();
        }
        $destroy() {
            super.$destroy();
            this.$destroy = () => {
                console.warn('Component was already destroyed'); // eslint-disable-line no-console
            };
        }
        $capture_state() { }
        $inject_state() { }
    }

    /* src/Header.svelte generated by Svelte v3.43.0 */

    const { console: console_1$3 } = globals;
    const file$4 = "src/Header.svelte";

    // (1:0) <script>     async function getMe() {         const me_data = await fetch("http://localhost:3000/me");         const user = await me_data.json();          return user;     }
    function create_catch_block$1(ctx) {
    	const block = { c: noop, m: noop, p: noop, d: noop };

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_catch_block$1.name,
    		type: "catch",
    		source: "(1:0) <script>     async function getMe() {         const me_data = await fetch(\\\"http://localhost:3000/me\\\");         const user = await me_data.json();          return user;     }",
    		ctx
    	});

    	return block;
    }

    // (20:42)                  {(console.log(userData), "")}
    function create_then_block$1(ctx) {
    	let t0_value = (console.log(/*userData*/ ctx[0]), "") + "";
    	let t0;
    	let t1;
    	let img;
    	let img_src_value;
    	let t2;
    	let div;
    	let t3_value = /*userData*/ ctx[0].name + "";
    	let t3;

    	const block = {
    		c: function create() {
    			t0 = text(t0_value);
    			t1 = space();
    			img = element("img");
    			t2 = space();
    			div = element("div");
    			t3 = text(t3_value);
    			attr_dev(img, "id", "avatar");
    			if (!src_url_equal(img.src, img_src_value = /*userData*/ ctx[0].avatar_url)) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "alt", "avatar");
    			attr_dev(img, "class", "svelte-cij83");
    			add_location(img, file$4, 21, 16, 567);
    			attr_dev(div, "id", "username");
    			add_location(div, file$4, 22, 16, 642);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, t0, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, img, anchor);
    			insert_dev(target, t2, anchor);
    			insert_dev(target, div, anchor);
    			append_dev(div, t3);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(t0);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(img);
    			if (detaching) detach_dev(t2);
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_then_block$1.name,
    		type: "then",
    		source: "(20:42)                  {(console.log(userData), \\\"\\\")}",
    		ctx
    	});

    	return block;
    }

    // (1:0) <script>     async function getMe() {         const me_data = await fetch("http://localhost:3000/me");         const user = await me_data.json();          return user;     }
    function create_pending_block$1(ctx) {
    	const block = { c: noop, m: noop, p: noop, d: noop };

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_pending_block$1.name,
    		type: "pending",
    		source: "(1:0) <script>     async function getMe() {         const me_data = await fetch(\\\"http://localhost:3000/me\\\");         const user = await me_data.json();          return user;     }",
    		ctx
    	});

    	return block;
    }

    function create_fragment$5(ctx) {
    	let div4;
    	let div1;
    	let h1;
    	let t1;
    	let div0;
    	let t3;
    	let div3;
    	let div2;
    	let t4;
    	let button;

    	let info = {
    		ctx,
    		current: null,
    		token: null,
    		hasCatch: false,
    		pending: create_pending_block$1,
    		then: create_then_block$1,
    		catch: create_catch_block$1,
    		value: 0
    	};

    	handle_promise(getMe(), info);

    	const block = {
    		c: function create() {
    			div4 = element("div");
    			div1 = element("div");
    			h1 = element("h1");
    			h1.textContent = "My Digital Library";
    			t1 = space();
    			div0 = element("div");
    			div0.textContent = "The new way for you to keep track of your books.";
    			t3 = space();
    			div3 = element("div");
    			div2 = element("div");
    			info.block.c();
    			t4 = space();
    			button = element("button");
    			button.textContent = "Logout";
    			add_location(h1, file$4, 11, 8, 251);
    			attr_dev(div0, "class", "subtext");
    			add_location(div0, file$4, 12, 8, 287);
    			attr_dev(div1, "class", "title svelte-cij83");
    			add_location(div1, file$4, 10, 4, 223);
    			attr_dev(div2, "class", "user-info svelte-cij83");
    			add_location(div2, file$4, 18, 8, 438);
    			attr_dev(button, "type", "button");
    			attr_dev(button, "class", "btn btn-secondary");
    			attr_dev(button, "id", "logout-link");
    			attr_dev(button, "onclick", "window.location.href='http://localhost:3000/logout';");
    			add_location(button, file$4, 25, 8, 727);
    			attr_dev(div3, "class", "login-controls svelte-cij83");
    			add_location(div3, file$4, 17, 4, 401);
    			attr_dev(div4, "class", "header container-lg svelte-cij83");
    			add_location(div4, file$4, 9, 0, 185);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div4, anchor);
    			append_dev(div4, div1);
    			append_dev(div1, h1);
    			append_dev(div1, t1);
    			append_dev(div1, div0);
    			append_dev(div4, t3);
    			append_dev(div4, div3);
    			append_dev(div3, div2);
    			info.block.m(div2, info.anchor = null);
    			info.mount = () => div2;
    			info.anchor = null;
    			append_dev(div3, t4);
    			append_dev(div3, button);
    		},
    		p: function update(new_ctx, [dirty]) {
    			ctx = new_ctx;
    			update_await_block_branch(info, ctx, dirty);
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div4);
    			info.block.d();
    			info.token = null;
    			info = null;
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$5.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    async function getMe() {
    	const me_data = await fetch("http://localhost:3000/me");
    	const user = await me_data.json();
    	return user;
    }

    function instance$5($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Header', slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console_1$3.warn(`<Header> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ getMe });
    	return [];
    }

    class Header extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$5, create_fragment$5, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Header",
    			options,
    			id: create_fragment$5.name
    		});
    	}
    }

    const subscriber_queue = [];
    /**
     * Create a `Writable` store that allows both updating and reading by subscription.
     * @param {*=}value initial value
     * @param {StartStopNotifier=}start start and stop notifications for subscriptions
     */
    function writable(value, start = noop) {
        let stop;
        const subscribers = new Set();
        function set(new_value) {
            if (safe_not_equal(value, new_value)) {
                value = new_value;
                if (stop) { // store is ready
                    const run_queue = !subscriber_queue.length;
                    for (const subscriber of subscribers) {
                        subscriber[1]();
                        subscriber_queue.push(subscriber, value);
                    }
                    if (run_queue) {
                        for (let i = 0; i < subscriber_queue.length; i += 2) {
                            subscriber_queue[i][0](subscriber_queue[i + 1]);
                        }
                        subscriber_queue.length = 0;
                    }
                }
            }
        }
        function update(fn) {
            set(fn(value));
        }
        function subscribe(run, invalidate = noop) {
            const subscriber = [run, invalidate];
            subscribers.add(subscriber);
            if (subscribers.size === 1) {
                stop = start(set) || noop;
            }
            run(value);
            return () => {
                subscribers.delete(subscriber);
                if (subscribers.size === 0) {
                    stop();
                    stop = null;
                }
            };
        }
        return { set, update, subscribe };
    }

    const shouldUpdateBooks = writable(false);

    /* src/BookList.svelte generated by Svelte v3.43.0 */

    const { Object: Object_1 } = globals;
    const file$3 = "src/BookList.svelte";

    function get_each_context(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[11] = list[i];
    	child_ctx[13] = i;
    	return child_ctx;
    }

    function get_each_context_1(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[14] = list[i];
    	return child_ctx;
    }

    function get_each_context_2(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[17] = list[i];
    	return child_ctx;
    }

    // (87:24) {:else}
    function create_else_block_1(ctx) {
    	let th;
    	let t_value = /*tableColumns*/ ctx[5][/*columnKey*/ ctx[17]].name + "";
    	let t;

    	const block = {
    		c: function create() {
    			th = element("th");
    			t = text(t_value);
    			attr_dev(th, "scope", "col");
    			add_location(th, file$3, 87, 28, 2742);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, th, anchor);
    			append_dev(th, t);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(th);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block_1.name,
    		type: "else",
    		source: "(87:24) {:else}",
    		ctx
    	});

    	return block;
    }

    // (85:24) {#if isString(tableColumns[columnKey])}
    function create_if_block_1(ctx) {
    	let th;
    	let t_value = /*tableColumns*/ ctx[5][/*columnKey*/ ctx[17]] + "";
    	let t;

    	const block = {
    		c: function create() {
    			th = element("th");
    			t = text(t_value);
    			attr_dev(th, "scope", "col");
    			add_location(th, file$3, 85, 28, 2635);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, th, anchor);
    			append_dev(th, t);
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(th);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_1.name,
    		type: "if",
    		source: "(85:24) {#if isString(tableColumns[columnKey])}",
    		ctx
    	});

    	return block;
    }

    // (84:20) {#each Object.keys(tableColumns) as columnKey}
    function create_each_block_2(ctx) {
    	let if_block_anchor;

    	function select_block_type(ctx, dirty) {
    		if (/*isString*/ ctx[4](/*tableColumns*/ ctx[5][/*columnKey*/ ctx[17]])) return create_if_block_1;
    		return create_else_block_1;
    	}

    	let current_block_type = select_block_type(ctx);
    	let if_block = current_block_type(ctx);

    	const block = {
    		c: function create() {
    			if_block.c();
    			if_block_anchor = empty();
    		},
    		m: function mount(target, anchor) {
    			if_block.m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if_block.p(ctx, dirty);
    		},
    		d: function destroy(detaching) {
    			if_block.d(detaching);
    			if (detaching) detach_dev(if_block_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block_2.name,
    		type: "each",
    		source: "(84:20) {#each Object.keys(tableColumns) as columnKey}",
    		ctx
    	});

    	return block;
    }

    // (1:0) <script>     import { shouldUpdateBooks }
    function create_catch_block(ctx) {
    	const block = { c: noop, m: noop, p: noop, d: noop };

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_catch_block.name,
    		type: "catch",
    		source: "(1:0) <script>     import { shouldUpdateBooks }",
    		ctx
    	});

    	return block;
    }

    // (95:48)                      {#each booksData as book, index}
    function create_then_block(ctx) {
    	let each_1_anchor;
    	let each_value = /*booksData*/ ctx[10];
    	validate_each_argument(each_value);
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
    	}

    	const block = {
    		c: function create() {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			each_1_anchor = empty();
    		},
    		m: function mount(target, anchor) {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(target, anchor);
    			}

    			insert_dev(target, each_1_anchor, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*bookData, rawBookData, onDeleteBook, onModifyBook*/ 15) {
    				each_value = /*booksData*/ ctx[10];
    				validate_each_argument(each_value);
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    					} else {
    						each_blocks[i] = create_each_block(child_ctx);
    						each_blocks[i].c();
    						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
    					}
    				}

    				for (; i < each_blocks.length; i += 1) {
    					each_blocks[i].d(1);
    				}

    				each_blocks.length = each_value.length;
    			}
    		},
    		d: function destroy(detaching) {
    			destroy_each(each_blocks, detaching);
    			if (detaching) detach_dev(each_1_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_then_block.name,
    		type: "then",
    		source: "(95:48)                      {#each booksData as book, index}",
    		ctx
    	});

    	return block;
    }

    // (103:32) {:else}
    function create_else_block(ctx) {
    	let td;
    	let t_value = /*columnEntry*/ ctx[14].text + "";
    	let t;

    	const block = {
    		c: function create() {
    			td = element("td");
    			t = text(t_value);
    			add_location(td, file$3, 103, 36, 3459);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, td, anchor);
    			append_dev(td, t);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*bookData*/ 8 && t_value !== (t_value = /*columnEntry*/ ctx[14].text + "")) set_data_dev(t, t_value);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(td);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_else_block.name,
    		type: "else",
    		source: "(103:32) {:else}",
    		ctx
    	});

    	return block;
    }

    // (99:32) {#if columnEntry.isHeader}
    function create_if_block(ctx) {
    	let th;
    	let t_value = /*columnEntry*/ ctx[14].text + "";
    	let t;
    	let th_scope_value;

    	const block = {
    		c: function create() {
    			th = element("th");
    			t = text(t_value);
    			attr_dev(th, "scope", th_scope_value = /*columnEntry*/ ctx[14].scope);
    			add_location(th, file$3, 99, 36, 3251);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, th, anchor);
    			append_dev(th, t);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*bookData*/ 8 && t_value !== (t_value = /*columnEntry*/ ctx[14].text + "")) set_data_dev(t, t_value);

    			if (dirty & /*bookData*/ 8 && th_scope_value !== (th_scope_value = /*columnEntry*/ ctx[14].scope)) {
    				attr_dev(th, "scope", th_scope_value);
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(th);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block.name,
    		type: "if",
    		source: "(99:32) {#if columnEntry.isHeader}",
    		ctx
    	});

    	return block;
    }

    // (98:28) {#each book.columns as columnEntry}
    function create_each_block_1(ctx) {
    	let if_block_anchor;

    	function select_block_type_1(ctx, dirty) {
    		if (/*columnEntry*/ ctx[14].isHeader) return create_if_block;
    		return create_else_block;
    	}

    	let current_block_type = select_block_type_1(ctx);
    	let if_block = current_block_type(ctx);

    	const block = {
    		c: function create() {
    			if_block.c();
    			if_block_anchor = empty();
    		},
    		m: function mount(target, anchor) {
    			if_block.m(target, anchor);
    			insert_dev(target, if_block_anchor, anchor);
    		},
    		p: function update(ctx, dirty) {
    			if (current_block_type === (current_block_type = select_block_type_1(ctx)) && if_block) {
    				if_block.p(ctx, dirty);
    			} else {
    				if_block.d(1);
    				if_block = current_block_type(ctx);

    				if (if_block) {
    					if_block.c();
    					if_block.m(if_block_anchor.parentNode, if_block_anchor);
    				}
    			}
    		},
    		d: function destroy(detaching) {
    			if_block.d(detaching);
    			if (detaching) detach_dev(if_block_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block_1.name,
    		type: "each",
    		source: "(98:28) {#each book.columns as columnEntry}",
    		ctx
    	});

    	return block;
    }

    // (96:20) {#each booksData as book, index}
    function create_each_block(ctx) {
    	let tr;
    	let t0;
    	let td;
    	let div;
    	let a0;
    	let t2;
    	let ul;
    	let li0;
    	let a1;
    	let t3;
    	let a1_data_bs_book_id_value;
    	let t4;
    	let li1;
    	let a2;
    	let t5;
    	let a2_data_bs_book_id_value;
    	let t6;
    	let mounted;
    	let dispose;
    	let each_value_1 = /*book*/ ctx[11].columns;
    	validate_each_argument(each_value_1);
    	let each_blocks = [];

    	for (let i = 0; i < each_value_1.length; i += 1) {
    		each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
    	}

    	function click_handler() {
    		return /*click_handler*/ ctx[6](/*book*/ ctx[11]);
    	}

    	function click_handler_1(...args) {
    		return /*click_handler_1*/ ctx[7](/*book*/ ctx[11], ...args);
    	}

    	const block = {
    		c: function create() {
    			tr = element("tr");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			t0 = space();
    			td = element("td");
    			div = element("div");
    			a0 = element("a");
    			a0.textContent = "...";
    			t2 = space();
    			ul = element("ul");
    			li0 = element("li");
    			a1 = element("a");
    			t3 = text("Modify Entry");
    			t4 = space();
    			li1 = element("li");
    			a2 = element("a");
    			t5 = text("Delete Entry");
    			t6 = space();
    			attr_dev(a0, "class", "btn btn-secondary");
    			attr_dev(a0, "href", "#");
    			attr_dev(a0, "role", "button");
    			attr_dev(a0, "id", `dropdownMenuLink${/*index*/ ctx[13]}`);
    			attr_dev(a0, "data-bs-toggle", "dropdown");
    			attr_dev(a0, "aria-expanded", "false");
    			add_location(a0, file$3, 108, 36, 3685);
    			attr_dev(a1, "class", "btn btn-primary dropdown-item");
    			attr_dev(a1, "data-bs-toggle", "modal");
    			attr_dev(a1, "data-bs-target", "#modify-book-modal");
    			attr_dev(a1, "data-bs-book-id", a1_data_bs_book_id_value = /*book*/ ctx[11].id);
    			attr_dev(a1, "href", "#");
    			add_location(a1, file$3, 124, 44, 4485);
    			add_location(li0, file$3, 123, 40, 4436);
    			attr_dev(a2, "class", "btn btn-primary dropdown-item");
    			attr_dev(a2, "data-bs-toggle", "modal");
    			attr_dev(a2, "data-bs-target", "#delete-book-modal");
    			attr_dev(a2, "data-bs-book-id", a2_data_bs_book_id_value = /*book*/ ctx[11].id);
    			attr_dev(a2, "href", "#");
    			add_location(a2, file$3, 144, 44, 5740);
    			add_location(li1, file$3, 143, 40, 5691);
    			attr_dev(ul, "class", "dropdown-menu");
    			attr_dev(ul, "aria-labelledby", "dropdownMenuLink");
    			add_location(ul, file$3, 119, 36, 4217);
    			attr_dev(div, "class", "dropdown");
    			add_location(div, file$3, 107, 32, 3626);
    			add_location(td, file$3, 106, 28, 3589);
    			add_location(tr, file$3, 96, 24, 3087);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, tr, anchor);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(tr, null);
    			}

    			append_dev(tr, t0);
    			append_dev(tr, td);
    			append_dev(td, div);
    			append_dev(div, a0);
    			append_dev(div, t2);
    			append_dev(div, ul);
    			append_dev(ul, li0);
    			append_dev(li0, a1);
    			append_dev(a1, t3);
    			append_dev(ul, t4);
    			append_dev(ul, li1);
    			append_dev(li1, a2);
    			append_dev(a2, t5);
    			append_dev(tr, t6);

    			if (!mounted) {
    				dispose = [
    					listen_dev(a1, "click", click_handler, false, false, false),
    					listen_dev(a2, "click", click_handler_1, false, false, false)
    				];

    				mounted = true;
    			}
    		},
    		p: function update(new_ctx, dirty) {
    			ctx = new_ctx;

    			if (dirty & /*bookData*/ 8) {
    				each_value_1 = /*book*/ ctx[11].columns;
    				validate_each_argument(each_value_1);
    				let i;

    				for (i = 0; i < each_value_1.length; i += 1) {
    					const child_ctx = get_each_context_1(ctx, each_value_1, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    					} else {
    						each_blocks[i] = create_each_block_1(child_ctx);
    						each_blocks[i].c();
    						each_blocks[i].m(tr, t0);
    					}
    				}

    				for (; i < each_blocks.length; i += 1) {
    					each_blocks[i].d(1);
    				}

    				each_blocks.length = each_value_1.length;
    			}

    			if (dirty & /*bookData*/ 8 && a1_data_bs_book_id_value !== (a1_data_bs_book_id_value = /*book*/ ctx[11].id)) {
    				attr_dev(a1, "data-bs-book-id", a1_data_bs_book_id_value);
    			}

    			if (dirty & /*bookData*/ 8 && a2_data_bs_book_id_value !== (a2_data_bs_book_id_value = /*book*/ ctx[11].id)) {
    				attr_dev(a2, "data-bs-book-id", a2_data_bs_book_id_value);
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(tr);
    			destroy_each(each_blocks, detaching);
    			mounted = false;
    			run_all(dispose);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block.name,
    		type: "each",
    		source: "(96:20) {#each booksData as book, index}",
    		ctx
    	});

    	return block;
    }

    // (1:0) <script>     import { shouldUpdateBooks }
    function create_pending_block(ctx) {
    	const block = { c: noop, m: noop, p: noop, d: noop };

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_pending_block.name,
    		type: "pending",
    		source: "(1:0) <script>     import { shouldUpdateBooks }",
    		ctx
    	});

    	return block;
    }

    function create_fragment$4(ctx) {
    	let div2;
    	let div1;
    	let div0;
    	let h1;
    	let t1;
    	let button;
    	let t3;
    	let table;
    	let thead;
    	let tr;
    	let t4;
    	let th;
    	let t6;
    	let tbody;
    	let promise;
    	let each_value_2 = Object.keys(/*tableColumns*/ ctx[5]);
    	validate_each_argument(each_value_2);
    	let each_blocks = [];

    	for (let i = 0; i < each_value_2.length; i += 1) {
    		each_blocks[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
    	}

    	let info = {
    		ctx,
    		current: null,
    		token: null,
    		hasCatch: false,
    		pending: create_pending_block,
    		then: create_then_block,
    		catch: create_catch_block,
    		value: 10
    	};

    	handle_promise(promise = /*bookData*/ ctx[3], info);

    	const block = {
    		c: function create() {
    			div2 = element("div");
    			div1 = element("div");
    			div0 = element("div");
    			h1 = element("h1");
    			h1.textContent = "My Books";
    			t1 = space();
    			button = element("button");
    			button.textContent = "+";
    			t3 = space();
    			table = element("table");
    			thead = element("thead");
    			tr = element("tr");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			t4 = space();
    			th = element("th");
    			th.textContent = "Edit";
    			t6 = space();
    			tbody = element("tbody");
    			info.block.c();
    			attr_dev(h1, "class", "position-absolute start-50 translate-middle-x");
    			add_location(h1, file$3, 69, 12, 2040);
    			attr_dev(button, "type", "button");
    			attr_dev(button, "class", "btn btn-primary svelte-98fhsj");
    			attr_dev(button, "data-bs-toggle", "modal");
    			attr_dev(button, "data-bs-target", "#add-book-modal");
    			attr_dev(button, "id", "add-book");
    			add_location(button, file$3, 72, 12, 2154);
    			attr_dev(div0, "class", "my-books-header svelte-98fhsj");
    			add_location(div0, file$3, 68, 8, 1998);
    			attr_dev(th, "scope", "col");
    			add_location(th, file$3, 90, 20, 2872);
    			add_location(tr, file$3, 82, 16, 2471);
    			add_location(thead, file$3, 81, 12, 2447);
    			add_location(tbody, file$3, 93, 12, 2953);
    			attr_dev(table, "class", "table");
    			attr_dev(table, "id", "book-table");
    			add_location(table, file$3, 80, 8, 2397);
    			attr_dev(div1, "class", "book-list container-lg");
    			add_location(div1, file$3, 67, 4, 1953);
    			attr_dev(div2, "class", "content");
    			add_location(div2, file$3, 66, 0, 1927);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div2, anchor);
    			append_dev(div2, div1);
    			append_dev(div1, div0);
    			append_dev(div0, h1);
    			append_dev(div0, t1);
    			append_dev(div0, button);
    			append_dev(div1, t3);
    			append_dev(div1, table);
    			append_dev(table, thead);
    			append_dev(thead, tr);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(tr, null);
    			}

    			append_dev(tr, t4);
    			append_dev(tr, th);
    			append_dev(table, t6);
    			append_dev(table, tbody);
    			info.block.m(tbody, info.anchor = null);
    			info.mount = () => tbody;
    			info.anchor = null;
    		},
    		p: function update(new_ctx, [dirty]) {
    			ctx = new_ctx;

    			if (dirty & /*tableColumns, Object, isString*/ 48) {
    				each_value_2 = Object.keys(/*tableColumns*/ ctx[5]);
    				validate_each_argument(each_value_2);
    				let i;

    				for (i = 0; i < each_value_2.length; i += 1) {
    					const child_ctx = get_each_context_2(ctx, each_value_2, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    					} else {
    						each_blocks[i] = create_each_block_2(child_ctx);
    						each_blocks[i].c();
    						each_blocks[i].m(tr, t4);
    					}
    				}

    				for (; i < each_blocks.length; i += 1) {
    					each_blocks[i].d(1);
    				}

    				each_blocks.length = each_value_2.length;
    			}

    			info.ctx = ctx;

    			if (dirty & /*bookData*/ 8 && promise !== (promise = /*bookData*/ ctx[3]) && handle_promise(promise, info)) ; else {
    				update_await_block_branch(info, ctx, dirty);
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div2);
    			destroy_each(each_blocks, detaching);
    			info.block.d();
    			info.token = null;
    			info = null;
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$4.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$4($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('BookList', slots, []);
    	let { onModifyBook } = $$props;
    	let { onDeleteBook } = $$props;
    	const isString = val => typeof val === "string" || val instanceof String;

    	const tableColumns = {
    		title: { name: "Title", isHeader: true },
    		authors: {
    			name: "Author(s)",
    			formatter: authors => authors.join(", ")
    		},
    		num_pages: "# Pages",
    		date_added: {
    			name: "Date Added",
    			formatter: timestamp => new Date(timestamp).toLocaleDateString("en-us", {
    				year: "numeric",
    				month: "short",
    				day: "numeric"
    			})
    		},
    		rating: "Rating",
    		location: "Location"
    	};

    	async function getBookData() {
    		const res = await fetch("http://localhost:3000/me/books");
    		const books = await res.json();
    		$$invalidate(2, rawBookData = books);
    		return books.map(bookDataToTableRowData);
    	}

    	function bookDataToTableRowData(rowData) {
    		let bookRow = { columns: [], id: rowData._id };

    		Object.keys(tableColumns).forEach(columnKey => {
    			const columnData = tableColumns[columnKey];
    			let columnValue = rowData[columnKey];

    			if (columnData.formatter) {
    				columnValue = columnData.formatter(columnValue);
    			}

    			let bookEntry = { isHeader: columnData.isHeader };
    			bookEntry.text = columnData.text || columnValue;
    			bookEntry.scope = columnData.isHeader ? "row" : null;
    			bookRow.columns.push(bookEntry);
    		});

    		return bookRow;
    	}

    	let rawBookData;
    	let bookData = getBookData();

    	shouldUpdateBooks.subscribe(shouldUpdate => {
    		if (shouldUpdate) {
    			$$invalidate(3, bookData = getBookData());
    			shouldUpdateBooks.set(false);
    		}
    	});

    	const writable_props = ['onModifyBook', 'onDeleteBook'];

    	Object_1.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<BookList> was created with unknown prop '${key}'`);
    	});

    	const click_handler = book => {
    		const us = rawBookData.find(a => a._id === book.id);
    		onModifyBook({ id: book.id, ...us });
    	};

    	const click_handler_1 = (book, e) => {
    		const us = rawBookData.find(a => a._id === book.id);
    		onDeleteBook({ id: book.id, ...us });
    	};

    	$$self.$$set = $$props => {
    		if ('onModifyBook' in $$props) $$invalidate(0, onModifyBook = $$props.onModifyBook);
    		if ('onDeleteBook' in $$props) $$invalidate(1, onDeleteBook = $$props.onDeleteBook);
    	};

    	$$self.$capture_state = () => ({
    		shouldUpdateBooks,
    		onModifyBook,
    		onDeleteBook,
    		isString,
    		tableColumns,
    		getBookData,
    		bookDataToTableRowData,
    		rawBookData,
    		bookData
    	});

    	$$self.$inject_state = $$props => {
    		if ('onModifyBook' in $$props) $$invalidate(0, onModifyBook = $$props.onModifyBook);
    		if ('onDeleteBook' in $$props) $$invalidate(1, onDeleteBook = $$props.onDeleteBook);
    		if ('rawBookData' in $$props) $$invalidate(2, rawBookData = $$props.rawBookData);
    		if ('bookData' in $$props) $$invalidate(3, bookData = $$props.bookData);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [
    		onModifyBook,
    		onDeleteBook,
    		rawBookData,
    		bookData,
    		isString,
    		tableColumns,
    		click_handler,
    		click_handler_1
    	];
    }

    class BookList extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$4, create_fragment$4, safe_not_equal, { onModifyBook: 0, onDeleteBook: 1 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "BookList",
    			options,
    			id: create_fragment$4.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*onModifyBook*/ ctx[0] === undefined && !('onModifyBook' in props)) {
    			console.warn("<BookList> was created without expected prop 'onModifyBook'");
    		}

    		if (/*onDeleteBook*/ ctx[1] === undefined && !('onDeleteBook' in props)) {
    			console.warn("<BookList> was created without expected prop 'onDeleteBook'");
    		}
    	}

    	get onModifyBook() {
    		throw new Error("<BookList>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set onModifyBook(value) {
    		throw new Error("<BookList>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get onDeleteBook() {
    		throw new Error("<BookList>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set onDeleteBook(value) {
    		throw new Error("<BookList>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /**
     * Returns true if c is a digit character
     */
    function isCharNumber(c) {
        return c >= "0" && c <= "9";
    }

    function checkISBN10(isbn) {
        // in ISBN10 the last digit can be an X, and this represents 10
        let justDigits = Array.from(isbn)
            .filter((c) => isCharNumber(c) || c === "X")
            .map((c) => (isCharNumber(c) ? parseInt(c) : 10));

        if (justDigits.length !== 10) {
            return false;
        }

        let index = 0;
        let multiplier = 10;
        let sum = 0;
        while (index < 10) {
            sum += multiplier * justDigits[index];
            index++;
            multiplier--;
        }

        return sum % 11 === 0;
    }

    function checkISBN13(isbn) {
        let justDigits = Array.from(isbn)
            .filter(isCharNumber)
            .map((c) => parseInt(c));

        if (justDigits.length !== 13) {
            return false;
        }

        let index = 0;
        let weight = 1;
        let sum = 0;
        while (index < 13) {
            sum += weight * justDigits[index];
            index++;
            // weight alternates between 1 and 3
            weight = weight === 1 ? 3 : 1;
        }

        return sum % 10 === 0;
    }

    /**
     * Count the number of digits to figure out which length of isbn it is,
     * and call the correct validator
     */
    function checkISBN(isbn) {
        let numDigits = Array.from(isbn).filter(isCharNumber).length;

        if (numDigits < 13) {
            return checkISBN10(isbn);
        } else {
            return checkISBN13(isbn);
        }
    }

    /* src/Modals/AddBookModal.svelte generated by Svelte v3.43.0 */

    const { console: console_1$2 } = globals;
    const file$2 = "src/Modals/AddBookModal.svelte";

    function create_fragment$3(ctx) {
    	let div11;
    	let div10;
    	let form;
    	let div9;
    	let div0;
    	let h5;
    	let t1;
    	let button0;
    	let t2;
    	let div7;
    	let div2;
    	let label0;
    	let t4;
    	let div1;
    	let input0;
    	let t5;
    	let div4;
    	let label1;
    	let t7;
    	let div3;
    	let input1;
    	let t8;
    	let div6;
    	let label2;
    	let t10;
    	let div5;
    	let input2;
    	let t11;
    	let div8;
    	let button1;
    	let t13;
    	let button2;
    	let mounted;
    	let dispose;

    	const block = {
    		c: function create() {
    			div11 = element("div");
    			div10 = element("div");
    			form = element("form");
    			div9 = element("div");
    			div0 = element("div");
    			h5 = element("h5");
    			h5.textContent = "Add Book";
    			t1 = space();
    			button0 = element("button");
    			t2 = space();
    			div7 = element("div");
    			div2 = element("div");
    			label0 = element("label");
    			label0.textContent = "ISBN";
    			t4 = space();
    			div1 = element("div");
    			input0 = element("input");
    			t5 = space();
    			div4 = element("div");
    			label1 = element("label");
    			label1.textContent = "Rating";
    			t7 = space();
    			div3 = element("div");
    			input1 = element("input");
    			t8 = space();
    			div6 = element("div");
    			label2 = element("label");
    			label2.textContent = "Location";
    			t10 = space();
    			div5 = element("div");
    			input2 = element("input");
    			t11 = space();
    			div8 = element("div");
    			button1 = element("button");
    			button1.textContent = "Close";
    			t13 = space();
    			button2 = element("button");
    			button2.textContent = "Add Book";
    			attr_dev(h5, "class", "modal-title");
    			attr_dev(h5, "id", "exampleModalLabel");
    			add_location(h5, file$2, 53, 5, 1359);
    			attr_dev(button0, "type", "button");
    			attr_dev(button0, "class", "btn-close");
    			attr_dev(button0, "data-bs-dismiss", "modal");
    			attr_dev(button0, "aria-label", "Close");
    			add_location(button0, file$2, 54, 5, 1425);
    			attr_dev(div0, "class", "modal-header");
    			add_location(div0, file$2, 52, 4, 1327);
    			attr_dev(label0, "for", "ISBN");
    			attr_dev(label0, "class", "col-sm-2 col-form-label");
    			add_location(label0, file$2, 63, 6, 1614);
    			attr_dev(input0, "type", "text");
    			attr_dev(input0, "class", "form-control");
    			attr_dev(input0, "id", "add-book-ISBN");
    			input0.required = true;
    			add_location(input0, file$2, 67, 7, 1729);
    			attr_dev(div1, "class", "col-sm-10");
    			add_location(div1, file$2, 66, 6, 1698);
    			attr_dev(div2, "class", "mb-3 row");
    			add_location(div2, file$2, 62, 5, 1585);
    			attr_dev(label1, "for", "rating");
    			attr_dev(label1, "class", "col-sm-2 col-form-label");
    			add_location(label1, file$2, 76, 6, 1898);
    			attr_dev(input1, "type", "text");
    			attr_dev(input1, "class", "form-control");
    			attr_dev(input1, "id", "add-book-rating");
    			add_location(input1, file$2, 80, 7, 2017);
    			attr_dev(div3, "class", "col-sm-10");
    			add_location(div3, file$2, 79, 6, 1986);
    			attr_dev(div4, "class", "mb-3 row");
    			add_location(div4, file$2, 75, 5, 1869);
    			attr_dev(label2, "for", "location");
    			attr_dev(label2, "class", "col-sm-2 col-form-label");
    			add_location(label2, file$2, 88, 6, 2171);
    			attr_dev(input2, "type", "text");
    			attr_dev(input2, "class", "form-control");
    			attr_dev(input2, "id", "add-book-location");
    			add_location(input2, file$2, 92, 7, 2294);
    			attr_dev(div5, "class", "col-sm-10");
    			add_location(div5, file$2, 91, 6, 2263);
    			attr_dev(div6, "class", "mb-3 row");
    			add_location(div6, file$2, 87, 5, 2142);
    			attr_dev(div7, "class", "modal-body");
    			add_location(div7, file$2, 61, 4, 1555);
    			attr_dev(button1, "type", "button");
    			attr_dev(button1, "class", "btn btn-secondary");
    			attr_dev(button1, "data-bs-dismiss", "modal");
    			add_location(button1, file$2, 101, 5, 2463);
    			attr_dev(button2, "type", "submit");
    			attr_dev(button2, "class", "btn btn-primary");
    			add_location(button2, file$2, 106, 5, 2579);
    			attr_dev(div8, "class", "modal-footer");
    			add_location(div8, file$2, 100, 4, 2431);
    			attr_dev(div9, "class", "modal-content");
    			add_location(div9, file$2, 51, 3, 1295);
    			attr_dev(form, "method", "");
    			attr_dev(form, "id", "add-book-form");
    			add_location(form, file$2, 50, 2, 1256);
    			attr_dev(div10, "class", "modal-dialog");
    			add_location(div10, file$2, 49, 1, 1227);
    			attr_dev(div11, "class", "modal fade");
    			attr_dev(div11, "id", "add-book-modal");
    			attr_dev(div11, "aria-hidden", "true");
    			add_location(div11, file$2, 48, 0, 1162);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div11, anchor);
    			append_dev(div11, div10);
    			append_dev(div10, form);
    			append_dev(form, div9);
    			append_dev(div9, div0);
    			append_dev(div0, h5);
    			append_dev(div0, t1);
    			append_dev(div0, button0);
    			append_dev(div9, t2);
    			append_dev(div9, div7);
    			append_dev(div7, div2);
    			append_dev(div2, label0);
    			append_dev(div2, t4);
    			append_dev(div2, div1);
    			append_dev(div1, input0);
    			append_dev(div7, t5);
    			append_dev(div7, div4);
    			append_dev(div4, label1);
    			append_dev(div4, t7);
    			append_dev(div4, div3);
    			append_dev(div3, input1);
    			append_dev(div7, t8);
    			append_dev(div7, div6);
    			append_dev(div6, label2);
    			append_dev(div6, t10);
    			append_dev(div6, div5);
    			append_dev(div5, input2);
    			append_dev(div9, t11);
    			append_dev(div9, div8);
    			append_dev(div8, button1);
    			append_dev(div8, t13);
    			append_dev(div8, button2);

    			if (!mounted) {
    				dispose = listen_dev(button2, "click", /*handleAddBook*/ ctx[0], false, false, false);
    				mounted = true;
    			}
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div11);
    			mounted = false;
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$3.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    async function apiAddBook(json) {
    	console.log("adding book:");
    	console.log(json);

    	let res = await fetch("/addBook", {
    		method: "POST",
    		body: JSON.stringify(json),
    		headers: { "Content-Type": "application/json" }
    	});

    	console.log(res);
    }

    function instance$3($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('AddBookModal', slots, []);

    	function handleAddBook(event) {
    		let form = document.getElementById("add-book-form");

    		form.addEventListener("submit", e => {
    			e.preventDefault();
    			e.stopPropagation();
    		});

    		let formValues = {};

    		form.querySelectorAll("input").forEach(input => {
    			const realId = input.id.split("-")[2];
    			formValues[realId] = input.value;
    		});

    		if (!checkISBN(formValues["ISBN"])) {
    			console.log("INVALID ISBN!");
    			form.querySelector("#add-book-ISBN").setCustomValidity("ISBN number invalid");
    			return;
    		}

    		apiAddBook(formValues).then(res => {
    			shouldUpdateBooks.set(true);
    			const addBookModal = bootstrap.Modal.getInstance(document.getElementById("add-book-modal"));
    			addBookModal.hide();
    		}).catch(err => console.log(err));
    	}

    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console_1$2.warn(`<AddBookModal> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({
    		shouldUpdateBooks,
    		checkISBN,
    		apiAddBook,
    		handleAddBook
    	});

    	return [handleAddBook];
    }

    class AddBookModal extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$3, create_fragment$3, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "AddBookModal",
    			options,
    			id: create_fragment$3.name
    		});
    	}
    }

    /* src/Modals/ModifyBookModal.svelte generated by Svelte v3.43.0 */

    const { console: console_1$1 } = globals;
    const file$1 = "src/Modals/ModifyBookModal.svelte";

    function create_fragment$2(ctx) {
    	let div11;
    	let div10;
    	let form;
    	let div9;
    	let div0;
    	let h5;
    	let t0;
    	let t1_value = (/*book*/ ctx[0].title ?? "book") + "";
    	let t1;
    	let t2;
    	let button0;
    	let t3;
    	let div7;
    	let div2;
    	let label0;
    	let t5;
    	let div1;
    	let input0;
    	let t6;
    	let div4;
    	let label1;
    	let t8;
    	let div3;
    	let input1;
    	let t9;
    	let div6;
    	let label2;
    	let t11;
    	let div5;
    	let input2;
    	let t12;
    	let div8;
    	let button1;
    	let t14;
    	let button2;
    	let mounted;
    	let dispose;

    	const block = {
    		c: function create() {
    			div11 = element("div");
    			div10 = element("div");
    			form = element("form");
    			div9 = element("div");
    			div0 = element("div");
    			h5 = element("h5");
    			t0 = text("Modify ");
    			t1 = text(t1_value);
    			t2 = space();
    			button0 = element("button");
    			t3 = space();
    			div7 = element("div");
    			div2 = element("div");
    			label0 = element("label");
    			label0.textContent = "ISBN";
    			t5 = space();
    			div1 = element("div");
    			input0 = element("input");
    			t6 = space();
    			div4 = element("div");
    			label1 = element("label");
    			label1.textContent = "Rating";
    			t8 = space();
    			div3 = element("div");
    			input1 = element("input");
    			t9 = space();
    			div6 = element("div");
    			label2 = element("label");
    			label2.textContent = "Location";
    			t11 = space();
    			div5 = element("div");
    			input2 = element("input");
    			t12 = space();
    			div8 = element("div");
    			button1 = element("button");
    			button1.textContent = "Close";
    			t14 = space();
    			button2 = element("button");
    			button2.textContent = "Save changes";
    			attr_dev(h5, "class", "modal-title");
    			attr_dev(h5, "id", "exampleModalLabel");
    			add_location(h5, file$1, 54, 20, 1804);
    			attr_dev(button0, "type", "button");
    			attr_dev(button0, "class", "btn-close");
    			attr_dev(button0, "data-bs-dismiss", "modal");
    			attr_dev(button0, "aria-label", "Close");
    			add_location(button0, file$1, 57, 20, 1952);
    			attr_dev(div0, "class", "modal-header");
    			add_location(div0, file$1, 53, 16, 1757);
    			attr_dev(label0, "for", "ISBN");
    			attr_dev(label0, "class", "col-sm-2 col-form-label");
    			add_location(label0, file$1, 66, 24, 2285);
    			attr_dev(input0, "type", "text");
    			attr_dev(input0, "class", "form-control");
    			attr_dev(input0, "id", "modify-book-ISBN");
    			input0.required = true;
    			add_location(input0, file$1, 70, 28, 2478);
    			attr_dev(div1, "class", "col-sm-10");
    			add_location(div1, file$1, 69, 24, 2426);
    			attr_dev(div2, "class", "mb-3 row");
    			add_location(div2, file$1, 65, 20, 2238);
    			attr_dev(label1, "for", "rating");
    			attr_dev(label1, "class", "col-sm-2 col-form-label");
    			add_location(label1, file$1, 80, 24, 2888);
    			attr_dev(input1, "type", "text");
    			attr_dev(input1, "class", "form-control");
    			attr_dev(input1, "id", "modify-book-rating");
    			add_location(input1, file$1, 84, 28, 3085);
    			attr_dev(div3, "class", "col-sm-10");
    			add_location(div3, file$1, 83, 24, 3033);
    			attr_dev(div4, "class", "mb-3 row");
    			add_location(div4, file$1, 79, 20, 2841);
    			attr_dev(label2, "for", "location");
    			attr_dev(label2, "class", "col-sm-2 col-form-label");
    			add_location(label2, file$1, 93, 24, 3458);
    			attr_dev(input2, "type", "text");
    			attr_dev(input2, "class", "form-control");
    			attr_dev(input2, "id", "modify-book-location");
    			add_location(input2, file$1, 97, 28, 3659);
    			attr_dev(div5, "class", "col-sm-10");
    			add_location(div5, file$1, 96, 24, 3607);
    			attr_dev(div6, "class", "mb-3 row");
    			add_location(div6, file$1, 92, 20, 3411);
    			attr_dev(div7, "class", "modal-body");
    			add_location(div7, file$1, 64, 16, 2193);
    			attr_dev(button1, "type", "button");
    			attr_dev(button1, "class", "btn btn-secondary");
    			attr_dev(button1, "data-bs-dismiss", "modal");
    			add_location(button1, file$1, 107, 20, 4055);
    			attr_dev(button2, "type", "submit");
    			attr_dev(button2, "class", "btn btn-primary book-modify-button");
    			add_location(button2, file$1, 112, 20, 4255);
    			attr_dev(div8, "class", "modal-footer");
    			add_location(div8, file$1, 106, 16, 4008);
    			attr_dev(div9, "class", "modal-content");
    			add_location(div9, file$1, 52, 12, 1713);
    			attr_dev(form, "method", "");
    			attr_dev(form, "id", "modify-book-form");
    			add_location(form, file$1, 51, 8, 1662);
    			attr_dev(div10, "class", "modal-dialog");
    			add_location(div10, file$1, 50, 4, 1627);
    			attr_dev(div11, "class", "modal fade");
    			attr_dev(div11, "id", "modify-book-modal");
    			attr_dev(div11, "aria-hidden", "true");
    			add_location(div11, file$1, 49, 0, 1556);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div11, anchor);
    			append_dev(div11, div10);
    			append_dev(div10, form);
    			append_dev(form, div9);
    			append_dev(div9, div0);
    			append_dev(div0, h5);
    			append_dev(h5, t0);
    			append_dev(h5, t1);
    			append_dev(div0, t2);
    			append_dev(div0, button0);
    			append_dev(div9, t3);
    			append_dev(div9, div7);
    			append_dev(div7, div2);
    			append_dev(div2, label0);
    			append_dev(div2, t5);
    			append_dev(div2, div1);
    			append_dev(div1, input0);
    			set_input_value(input0, /*book*/ ctx[0].isbn);
    			append_dev(div7, t6);
    			append_dev(div7, div4);
    			append_dev(div4, label1);
    			append_dev(div4, t8);
    			append_dev(div4, div3);
    			append_dev(div3, input1);
    			set_input_value(input1, /*book*/ ctx[0].rating);
    			append_dev(div7, t9);
    			append_dev(div7, div6);
    			append_dev(div6, label2);
    			append_dev(div6, t11);
    			append_dev(div6, div5);
    			append_dev(div5, input2);
    			set_input_value(input2, /*book*/ ctx[0].location);
    			append_dev(div9, t12);
    			append_dev(div9, div8);
    			append_dev(div8, button1);
    			append_dev(div8, t14);
    			append_dev(div8, button2);

    			if (!mounted) {
    				dispose = [
    					listen_dev(input0, "input", /*input0_input_handler*/ ctx[2]),
    					listen_dev(input1, "input", /*input1_input_handler*/ ctx[3]),
    					listen_dev(input2, "input", /*input2_input_handler*/ ctx[4]),
    					listen_dev(button2, "click", /*modifyBookEntry*/ ctx[1], false, false, false)
    				];

    				mounted = true;
    			}
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*book*/ 1 && t1_value !== (t1_value = (/*book*/ ctx[0].title ?? "book") + "")) set_data_dev(t1, t1_value);

    			if (dirty & /*book*/ 1 && input0.value !== /*book*/ ctx[0].isbn) {
    				set_input_value(input0, /*book*/ ctx[0].isbn);
    			}

    			if (dirty & /*book*/ 1 && input1.value !== /*book*/ ctx[0].rating) {
    				set_input_value(input1, /*book*/ ctx[0].rating);
    			}

    			if (dirty & /*book*/ 1 && input2.value !== /*book*/ ctx[0].location) {
    				set_input_value(input2, /*book*/ ctx[0].location);
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div11);
    			mounted = false;
    			run_all(dispose);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$2.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$2($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('ModifyBookModal', slots, []);

    	let { book = {
    		title: "",
    		isnb: "",
    		rating: "",
    		location: ""
    	} } = $$props;

    	function modifyBookEntry(entry_id) {
    		let form = document.getElementById("modify-book-form");

    		form.addEventListener("submit", e => {
    			e.preventDefault();
    			e.stopPropagation();
    		});

    		let formValues = { _id: book.id };

    		form.querySelectorAll("input").forEach(input => {
    			console.log("input:", input);
    			formValues[input.id.split("-")[2]] = input.value;
    		});

    		if (!checkISBN(formValues["ISBN"])) {
    			console.log("INVALID ISBN!");
    			console.log(form.querySelector("#modify-book-ISBN"));
    			form.querySelector("#modify-book-ISBN").setCustomValidity("ISBN number invalid");
    			return;
    		} else {
    			console.log("valid ISBN!");
    		}

    		fetch("/modifyBook", {
    			method: "PUT",
    			body: JSON.stringify(formValues),
    			headers: { "Content-Type": "application/json" }
    		}).then(response => {
    			console.log("response:", response.json());
    			shouldUpdateBooks.set(true);
    			const modifyBookModal = bootstrap.Modal.getInstance(document.getElementById("modify-book-modal"));
    			modifyBookModal.hide();
    		});
    	}

    	const writable_props = ['book'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console_1$1.warn(`<ModifyBookModal> was created with unknown prop '${key}'`);
    	});

    	function input0_input_handler() {
    		book.isbn = this.value;
    		$$invalidate(0, book);
    	}

    	function input1_input_handler() {
    		book.rating = this.value;
    		$$invalidate(0, book);
    	}

    	function input2_input_handler() {
    		book.location = this.value;
    		$$invalidate(0, book);
    	}

    	$$self.$$set = $$props => {
    		if ('book' in $$props) $$invalidate(0, book = $$props.book);
    	};

    	$$self.$capture_state = () => ({
    		shouldUpdateBooks,
    		checkISBN,
    		book,
    		modifyBookEntry
    	});

    	$$self.$inject_state = $$props => {
    		if ('book' in $$props) $$invalidate(0, book = $$props.book);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [
    		book,
    		modifyBookEntry,
    		input0_input_handler,
    		input1_input_handler,
    		input2_input_handler
    	];
    }

    class ModifyBookModal extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$2, create_fragment$2, safe_not_equal, { book: 0 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "ModifyBookModal",
    			options,
    			id: create_fragment$2.name
    		});
    	}

    	get book() {
    		throw new Error("<ModifyBookModal>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set book(value) {
    		throw new Error("<ModifyBookModal>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/Modals/DeleteBookModal.svelte generated by Svelte v3.43.0 */

    const { console: console_1 } = globals;
    const file = "src/Modals/DeleteBookModal.svelte";

    function create_fragment$1(ctx) {
    	let div5;
    	let div4;
    	let div3;
    	let div0;
    	let h5;
    	let t0;
    	let t1;
    	let t2;
    	let button0;
    	let t3;
    	let div1;
    	let t4;
    	let t5;
    	let t6;
    	let t7;
    	let div2;
    	let button1;
    	let t9;
    	let button2;
    	let mounted;
    	let dispose;

    	const block = {
    		c: function create() {
    			div5 = element("div");
    			div4 = element("div");
    			div3 = element("div");
    			div0 = element("div");
    			h5 = element("h5");
    			t0 = text("Delete ");
    			t1 = text(/*bookTitle*/ ctx[0]);
    			t2 = space();
    			button0 = element("button");
    			t3 = space();
    			div1 = element("div");
    			t4 = text("Are you sure you want to delete ");
    			t5 = text(/*bookTitle*/ ctx[0]);
    			t6 = text("?");
    			t7 = space();
    			div2 = element("div");
    			button1 = element("button");
    			button1.textContent = "Close";
    			t9 = space();
    			button2 = element("button");
    			button2.textContent = "Delete";
    			attr_dev(h5, "class", "modal-title");
    			attr_dev(h5, "id", "exampleModalLabel");
    			add_location(h5, file, 27, 16, 875);
    			attr_dev(button0, "type", "button");
    			attr_dev(button0, "class", "btn-close");
    			attr_dev(button0, "data-bs-dismiss", "modal");
    			attr_dev(button0, "aria-label", "Close");
    			add_location(button0, file, 30, 16, 1000);
    			attr_dev(div0, "class", "modal-header");
    			add_location(div0, file, 26, 12, 832);
    			attr_dev(div1, "class", "modal-body");
    			add_location(div1, file, 37, 12, 1213);
    			attr_dev(button1, "type", "button");
    			attr_dev(button1, "class", "btn btn-secondary");
    			attr_dev(button1, "data-bs-dismiss", "modal");
    			add_location(button1, file, 41, 16, 1373);
    			attr_dev(button2, "type", "button");
    			attr_dev(button2, "class", "btn btn-danger book-deletion-button");
    			add_location(button2, file, 46, 16, 1553);
    			attr_dev(div2, "class", "modal-footer");
    			add_location(div2, file, 40, 12, 1330);
    			attr_dev(div3, "class", "modal-content");
    			add_location(div3, file, 25, 8, 792);
    			attr_dev(div4, "class", "modal-dialog");
    			add_location(div4, file, 24, 4, 757);
    			attr_dev(div5, "class", "modal fade");
    			attr_dev(div5, "id", "delete-book-modal");
    			attr_dev(div5, "aria-hidden", "true");
    			add_location(div5, file, 23, 0, 686);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div5, anchor);
    			append_dev(div5, div4);
    			append_dev(div4, div3);
    			append_dev(div3, div0);
    			append_dev(div0, h5);
    			append_dev(h5, t0);
    			append_dev(h5, t1);
    			append_dev(div0, t2);
    			append_dev(div0, button0);
    			append_dev(div3, t3);
    			append_dev(div3, div1);
    			append_dev(div1, t4);
    			append_dev(div1, t5);
    			append_dev(div1, t6);
    			append_dev(div3, t7);
    			append_dev(div3, div2);
    			append_dev(div2, button1);
    			append_dev(div2, t9);
    			append_dev(div2, button2);

    			if (!mounted) {
    				dispose = listen_dev(button2, "click", /*deleteBook*/ ctx[1], false, false, false);
    				mounted = true;
    			}
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*bookTitle*/ 1) set_data_dev(t1, /*bookTitle*/ ctx[0]);
    			if (dirty & /*bookTitle*/ 1) set_data_dev(t5, /*bookTitle*/ ctx[0]);
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div5);
    			mounted = false;
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$1.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$1($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('DeleteBookModal', slots, []);
    	let { bookId } = $$props;
    	let { bookTitle = "" } = $$props;

    	function deleteBook(event) {
    		fetch("/deleteBook", {
    			method: "DELETE",
    			body: JSON.stringify({ _id: bookId }),
    			headers: { "Content-Type": "application/json" }
    		}).then(response => {
    			console.log("response:", response.json());
    			shouldUpdateBooks.set(true);
    			const deleteBookModal = bootstrap.Modal.getInstance(document.getElementById("delete-book-modal"));
    			deleteBookModal.hide();
    		});
    	}

    	const writable_props = ['bookId', 'bookTitle'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console_1.warn(`<DeleteBookModal> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ('bookId' in $$props) $$invalidate(2, bookId = $$props.bookId);
    		if ('bookTitle' in $$props) $$invalidate(0, bookTitle = $$props.bookTitle);
    	};

    	$$self.$capture_state = () => ({
    		shouldUpdateBooks,
    		bookId,
    		bookTitle,
    		deleteBook
    	});

    	$$self.$inject_state = $$props => {
    		if ('bookId' in $$props) $$invalidate(2, bookId = $$props.bookId);
    		if ('bookTitle' in $$props) $$invalidate(0, bookTitle = $$props.bookTitle);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [bookTitle, deleteBook, bookId];
    }

    class DeleteBookModal extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$1, create_fragment$1, safe_not_equal, { bookId: 2, bookTitle: 0 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "DeleteBookModal",
    			options,
    			id: create_fragment$1.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*bookId*/ ctx[2] === undefined && !('bookId' in props)) {
    			console_1.warn("<DeleteBookModal> was created without expected prop 'bookId'");
    		}
    	}

    	get bookId() {
    		throw new Error("<DeleteBookModal>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set bookId(value) {
    		throw new Error("<DeleteBookModal>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get bookTitle() {
    		throw new Error("<DeleteBookModal>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set bookTitle(value) {
    		throw new Error("<DeleteBookModal>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/App.svelte generated by Svelte v3.43.0 */

    function create_fragment(ctx) {
    	let header;
    	let t0;
    	let booklist;
    	let t1;
    	let addbookmodal;
    	let t2;
    	let modifybookmodal;
    	let t3;
    	let deletebookmodal;
    	let current;
    	header = new Header({ $$inline: true });

    	booklist = new BookList({
    			props: {
    				onModifyBook: /*onModifyBook*/ ctx[3],
    				onDeleteBook: /*onDeleteBook*/ ctx[4]
    			},
    			$$inline: true
    		});

    	addbookmodal = new AddBookModal({ $$inline: true });

    	modifybookmodal = new ModifyBookModal({
    			props: { book: /*modBook*/ ctx[0] },
    			$$inline: true
    		});

    	deletebookmodal = new DeleteBookModal({
    			props: {
    				bookId: /*delId*/ ctx[1],
    				bookTitle: /*delTitle*/ ctx[2]
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(header.$$.fragment);
    			t0 = space();
    			create_component(booklist.$$.fragment);
    			t1 = space();
    			create_component(addbookmodal.$$.fragment);
    			t2 = space();
    			create_component(modifybookmodal.$$.fragment);
    			t3 = space();
    			create_component(deletebookmodal.$$.fragment);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			mount_component(header, target, anchor);
    			insert_dev(target, t0, anchor);
    			mount_component(booklist, target, anchor);
    			insert_dev(target, t1, anchor);
    			mount_component(addbookmodal, target, anchor);
    			insert_dev(target, t2, anchor);
    			mount_component(modifybookmodal, target, anchor);
    			insert_dev(target, t3, anchor);
    			mount_component(deletebookmodal, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			const modifybookmodal_changes = {};
    			if (dirty & /*modBook*/ 1) modifybookmodal_changes.book = /*modBook*/ ctx[0];
    			modifybookmodal.$set(modifybookmodal_changes);
    			const deletebookmodal_changes = {};
    			if (dirty & /*delId*/ 2) deletebookmodal_changes.bookId = /*delId*/ ctx[1];
    			if (dirty & /*delTitle*/ 4) deletebookmodal_changes.bookTitle = /*delTitle*/ ctx[2];
    			deletebookmodal.$set(deletebookmodal_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(header.$$.fragment, local);
    			transition_in(booklist.$$.fragment, local);
    			transition_in(addbookmodal.$$.fragment, local);
    			transition_in(modifybookmodal.$$.fragment, local);
    			transition_in(deletebookmodal.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(header.$$.fragment, local);
    			transition_out(booklist.$$.fragment, local);
    			transition_out(addbookmodal.$$.fragment, local);
    			transition_out(modifybookmodal.$$.fragment, local);
    			transition_out(deletebookmodal.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(header, detaching);
    			if (detaching) detach_dev(t0);
    			destroy_component(booklist, detaching);
    			if (detaching) detach_dev(t1);
    			destroy_component(addbookmodal, detaching);
    			if (detaching) detach_dev(t2);
    			destroy_component(modifybookmodal, detaching);
    			if (detaching) detach_dev(t3);
    			destroy_component(deletebookmodal, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('App', slots, []);
    	let modBook;
    	let delId, delTitle;

    	let onModifyBook = book => {
    		$$invalidate(0, modBook = book);
    	};

    	let onDeleteBook = book => {
    		$$invalidate(1, delId = book.id);
    		$$invalidate(2, delTitle = book.title);
    	};

    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<App> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({
    		Header,
    		BookList,
    		AddBookModal,
    		ModifyBookModal,
    		DeleteBookModal,
    		modBook,
    		delId,
    		delTitle,
    		onModifyBook,
    		onDeleteBook
    	});

    	$$self.$inject_state = $$props => {
    		if ('modBook' in $$props) $$invalidate(0, modBook = $$props.modBook);
    		if ('delId' in $$props) $$invalidate(1, delId = $$props.delId);
    		if ('delTitle' in $$props) $$invalidate(2, delTitle = $$props.delTitle);
    		if ('onModifyBook' in $$props) $$invalidate(3, onModifyBook = $$props.onModifyBook);
    		if ('onDeleteBook' in $$props) $$invalidate(4, onDeleteBook = $$props.onDeleteBook);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [modBook, delId, delTitle, onModifyBook, onDeleteBook];
    }

    class App extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance, create_fragment, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "App",
    			options,
    			id: create_fragment.name
    		});
    	}
    }

    const app = new App({
        target: document.body,
        props: {}
    });

    return app;

})();
//# sourceMappingURL=bundle.js.map
