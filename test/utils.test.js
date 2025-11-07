// @ts-nocheck
import { expect } from "@open-wc/testing";
/* eslint-env mocha */
/* global describe, it */
import { i18nTemplate } from "../src/utils.js";

describe("utils", () => {
  describe("i18nTemplate", () => {
    it("replaces placeholders with provided values", () => {
      const result = i18nTemplate("Tail livery, {badgeAlt} member", {
        badgeAlt: "OneWorld Alliance"
      });
      expect(result).to.equal("Tail livery, OneWorld Alliance member");
    });

    it("returns original placeholder if key not found", () => {
      const result = i18nTemplate("Hello {name}", {});
      expect(result).to.equal("Hello {name}");
    });

    it("handles multiple placeholders", () => {
      const result = i18nTemplate("{greeting} {name}!", {
        greeting: "Hello",
        name: "World"
      });
      expect(result).to.equal("Hello World!");
    });

    it("handles empty values object", () => {
      const result = i18nTemplate("No placeholders here");
      expect(result).to.equal("No placeholders here");
    });
  });
});
