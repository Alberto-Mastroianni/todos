import { c as create_ssr_component, e as escape, d as null_to_empty, f as createEventDispatcher, v as validate_component, h as add_attribute, i as each } from "../../chunks/ssr.js";
const icon_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".icon.svelte-5bh4oc{font-size:32px;color:var(--color)}.icon.svelte-5bh4oc:hover{cursor:pointer}",
  map: null
};
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { handler = () => {
  } } = $$props;
  let { color = "green" } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.handler === void 0 && $$bindings.handler && handler !== void 0)
    $$bindings.handler(handler);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  $$result.css.add(css$5);
  return `${$$result.head += `<!-- HEAD_svelte-v01l8y_START --><link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet"><!-- HEAD_svelte-v01l8y_END -->`, ""}  <span class="material-icons-outlined icon svelte-5bh4oc" style="${"--color:" + escape(color, true) + ";"}">${escape(name)} </span>`;
});
const cell_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".cell.svelte-1edthms{border-bottom:1px solid #E7ECEE;border-right:1px solid #E7ECEE;text-align:center;padding-top:10px;color:#525252;line-height:32px;font-size:18px}.cell-last.svelte-1edthms{border-right:none}",
  map: null
};
const Cell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { last = false } = $$props;
  if ($$props.last === void 0 && $$bindings.last && last !== void 0)
    $$bindings.last(last);
  $$result.css.add(css$4);
  return `<div class="${"cell " + escape(last ? "cell-last" : "", true) + " svelte-1edthms"}">${slots.default ? slots.default({}) : ``} </div>`;
});
const priority_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "span.svelte-mcntfr{display:inline-block;border-radius:5px;color:white;font-weight:bold;width:100px;height:30px}span.svelte-mcntfr:hover{cursor:pointer}.ALTA.svelte-mcntfr{background-color:red}.MEDIA.svelte-mcntfr{background-color:orange}.BASSA.svelte-mcntfr{background-color:green}",
  map: null
};
const Priority = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { prio = 3 } = $$props;
  const prio2str = (prio2) => {
    let map = { 1: "ALTA", 2: "MEDIA", 3: "BASSA" };
    return map[prio2];
  };
  if ($$props.prio === void 0 && $$bindings.prio && prio !== void 0)
    $$bindings.prio(prio);
  $$result.css.add(css$3);
  return `<span class="${escape(null_to_empty(prio2str(prio)), true) + " svelte-mcntfr"}">${escape(prio2str(prio))} </span>`;
});
const todo_item_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".todo-item-input-text.svelte-yxoink{border:none;width:90%;height:30px;font-size:20px;color:#525252}.todo-item-input-text.svelte-yxoink:focus{background-color:rgb(204, 229, 253);color:black;padding:4px;padding-left:10px}",
  map: null
};
const Todo_item = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const dispatch = createEventDispatcher();
  const item_change = (type) => {
    dispatch("change", { type, id: todo.id });
  };
  let { todo } = $$props;
  const toggle_status = () => {
    todo.done = !todo.done;
  };
  if ($$props.todo === void 0 && $$bindings.todo && todo !== void 0)
    $$bindings.todo(todo);
  $$result.css.add(css$2);
  return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
    default: () => {
      return `${escape(todo.id)}`;
    }
  })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
    default: () => {
      return `${todo.done == false ? `${validate_component(Icon, "Icon").$$render(
        $$result,
        {
          name: "circle",
          color: "red",
          handler: toggle_status
        },
        {},
        {}
      )}` : `${validate_component(Icon, "Icon").$$render($$result, { name: "task_alt", handler: toggle_status }, {}, {})}`}`;
    }
  })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
    default: () => {
      return `<input type="text" class="todo-item-input-text svelte-yxoink"${add_attribute("id", todo.id, 0)} placeholder="Inserisci il nuovo ToDO"${add_attribute("value", todo.task, 0)}>`;
    }
  })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Priority, "Priority").$$render($$result, {}, {}, {})}`;
    }
  })} ${validate_component(Cell, "Cell").$$render($$result, { last: true }, {}, {
    default: () => {
      return `${validate_component(Icon, "Icon").$$render(
        $$result,
        {
          name: "delete_forever",
          color: "red",
          handler: () => item_change("delete")
        },
        {},
        {}
      )}`;
    }
  })}`;
});
const todo_list_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');.app-title.svelte-1uiabwi{font-family:'Permanent Marker', cursive;margin-top:0px;font-size:60px;opacity:0.3}.todo-list.svelte-1uiabwi{display:grid;grid-template-columns:1fr 1fr 4fr 2fr 1fr;border:3px solid blue;width:95%;height:80%;margin:auto}.header.svelte-1uiabwi{border-bottom:1px solid #e7ecee;border-right:1px solid #e7ecee;text-align:center;padding-bottom:20px}.header-last.svelte-1uiabwi{border-right:none}",
  map: null
};
const Todo_list = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let todos = [];
  let last_id = 0;
  const create_todo = async () => {
    let todo = {
      //ToDo Item
      id: ++last_id,
      task: "",
      done: false,
      priority: 3
    };
    console.log("CREATE:", todo);
    todos = [...todos, todo];
  };
  $$result.css.add(css$1);
  return `<h1 class="app-title svelte-1uiabwi" data-svelte-h="svelte-nh6ksq">ToDos</h1> <div class="todo-list svelte-1uiabwi"><div class="header svelte-1uiabwi">${validate_component(Icon, "Icon").$$render($$result, { name: "tag" }, {}, {})}</div> <div class="header svelte-1uiabwi">${validate_component(Icon, "Icon").$$render($$result, { name: "task_alt" }, {}, {})}</div> <div class="header svelte-1uiabwi">${validate_component(Icon, "Icon").$$render($$result, { name: "list" }, {}, {})}</div> <div class="header svelte-1uiabwi">${validate_component(Icon, "Icon").$$render($$result, { name: "schedule" }, {}, {})}</div> <div class="header header-last svelte-1uiabwi">${validate_component(Icon, "Icon").$$render($$result, { name: "add_box", handler: create_todo }, {}, {})}</div>  ${each(todos, (todo) => {
    return `${validate_component(Todo_item, "TodoItem").$$render($$result, { todo }, {}, {})}`;
  })} </div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-5pk6cz{border:3px solid red;width:60%;height:90vh;margin:auto}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="svelte-5pk6cz">${validate_component(Todo_list, "TodoList").$$render($$result, {}, {}, {})} </main>`;
});
export {
  Page as default
};
