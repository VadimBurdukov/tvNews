/* This section of the code registers a new block, sets an icon and a category, and indicates what type of fields it'll include. */
 
wp.blocks.registerBlockType('brad/border-box', {
  title: 'Timer',
  icon: 'clock',
  category: 'formatting',
  attributes: {
    content: {type: 'string'}
  },
 
/* This configures how the content and color fields will work, and sets up the necessary elements */
 
  edit: function(props) {
    function updateContent(event) {
      props.setAttributes({content: event.target.value})
    }
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h3",
        null,
        "Введите время для переключения слайда:"
      ),
      React.createElement("input", { type: "text", value: props.attributes.content, onChange: updateContent }),
    );
  },
  save: function(props) {
    return wp.element.createElement(
        "nav",
      { class: "timerClass" }, 
      props.attributes.content
    );
  }
})