// @ts-nocheck
import { expect } from "@open-wc/testing";
/* eslint-env mocha */
/* global describe, it */
import { normalizeBorderWidth, resolveBorderProps, i18nTemplate } from "../src/utils.js";

describe("utils", () => {
  describe("normalizeBorderWidth", () => {
    it("returns undefined for null/undefined", () => {
      expect(normalizeBorderWidth(null)).to.equal(undefined);
      expect(normalizeBorderWidth(undefined)).to.equal(undefined);
    });

    it("handles number inputs", () => {
      expect(normalizeBorderWidth(0)).to.equal("0");
      expect(normalizeBorderWidth(1)).to.equal("1px");
      expect(normalizeBorderWidth(2.5)).to.equal("2.5px");
      expect(normalizeBorderWidth(-1)).to.equal("-1px");
    });

    it("handles numeric string inputs", () => {
      expect(normalizeBorderWidth("0")).to.equal("0");
      expect(normalizeBorderWidth("1")).to.equal("1px");
      expect(normalizeBorderWidth("2.5")).to.equal("2.5px");
      expect(normalizeBorderWidth("-1")).to.equal("-1px");
    });

    it("passes through px strings", () => {
      expect(normalizeBorderWidth("0px")).to.equal("0px");
      expect(normalizeBorderWidth("1px")).to.equal("1px");
      expect(normalizeBorderWidth("2.5px")).to.equal("2.5px");
      expect(normalizeBorderWidth("-1px")).to.equal("-1px");
    });

    it("ignores non-px units", () => {
      expect(normalizeBorderWidth("1rem")).to.equal(undefined);
      expect(normalizeBorderWidth("2em")).to.equal(undefined);
      expect(normalizeBorderWidth("100%")).to.equal(undefined);
      expect(normalizeBorderWidth("var(--width)")).to.equal(undefined);
    });

    it("ignores invalid strings", () => {
      expect(normalizeBorderWidth("")).to.equal(undefined);
      expect(normalizeBorderWidth("   ")).to.equal(undefined);
      expect(normalizeBorderWidth("abc")).to.equal(undefined);
      expect(normalizeBorderWidth("1px2")).to.equal(undefined);
    });

    it("handles edge cases", () => {
      expect(normalizeBorderWidth("  1  ")).to.equal("1px");
    });
  });

  describe("resolveBorderProps", () => {
    it("passes through borderColor unchanged", () => {
      const result = resolveBorderProps({ borderColor: "red" });
      expect(result.borderColor).to.equal("red");
    });

    it("normalizes borderWidth to px", () => {
      const result = resolveBorderProps({ borderWidth: 2 });
      expect(result.borderWidth).to.equal("2px");
    });

    it("converts zero to 0px", () => {
      const result = resolveBorderProps({ borderWidth: 0 });
      expect(result.borderWidth).to.equal("0px");
      
      const result2 = resolveBorderProps({ borderWidth: "0" });
      expect(result2.borderWidth).to.equal("0px");
    });

    it("ignores non-px borderWidth units", () => {
      const result = resolveBorderProps({ borderWidth: "2rem" });
      expect(result.borderWidth).to.equal(undefined);
    });

    it("handles both props together", () => {
      const result = resolveBorderProps({ 
        borderColor: "blue", 
        borderWidth: "3px" 
      });
      expect(result.borderColor).to.equal("blue");
      expect(result.borderWidth).to.equal("3px");
    });

    it("handles undefined props", () => {
      const result = resolveBorderProps({});
      expect(result.borderColor).to.equal(undefined);
      expect(result.borderWidth).to.equal(undefined);
    });

    it("handles mixed valid/invalid props", () => {
      const result = resolveBorderProps({ 
        borderColor: "green", 
        borderWidth: "invalid" 
      });
      expect(result.borderColor).to.equal("green");
      expect(result.borderWidth).to.equal(undefined);
    });
  });

  describe("i18nTemplate", () => {
    it("replaces placeholders with provided values", () => {
      const result = i18nTemplate("Tail livery, {badgeAlt} member", { 
        badgeAlt: "OneWorld Alliance" 
      });
      expect(result).to.equal("Tail livery, OneWorld Alliance member");
    });
  });
});
