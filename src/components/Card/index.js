import { h } from "vue";

export default {
  install: (app) => {
    app.component("dt-card", {
      props: {
        type: String,
      },
      render() {
        return h(
          "div",
          { class: "dt-card-content" + " " + `type-${this.type}` },
          [
            h("div", { class: "dt-card" }, [
              h("div", { class: "dt-card__img" }, this.$slots.img(), [
                h(
                  "div",
                  { class: "dt-card__interactions" },
                  this.$slots.interactions()
                ),
              ]),
              h("div", { class: "dt-card__text" }, [
                h(
                  "div",
                  { class: "dt-card__title" },
                  this.$slots.title(),
                  this.$slots.text()
                ),
              ]),
            ]),
          ]
        );
      },
    });
  },
};
