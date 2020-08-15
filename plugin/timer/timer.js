wp.blocks.registerBlockType('my-timer/timer', {
  title: 'Timer',
  icon: 'clock',
  category: 'formatting',
  attributes: {
    content: { type: 'string' }
  },
  edit: function (props) {
    function updateContent(event) {
      props.setAttributes({ content: event.target.value })
    }
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h3",
        { class: "timerClass" },
        null,
        "Введите время для переключения слайда(в секундах):"
      ),
      React.createElement("input", { type: "text", value: props.attributes.content, onChange: updateContent }),
    );
  },
  save: function (props) {
    return wp.element.createElement(
      "h3",
      { className: "timerClasss" },
      props.attributes.content
    );
  }
})