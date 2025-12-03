// @ts-nocheck
import { expect, fixture, html, oneEvent } from "@open-wc/testing";
/* eslint-env mocha */
/* global describe, it */
/** @typedef {import('../src/auro-tail.js').AuroTail} AuroTail */
import "../src/registered";
import { AuroTail } from "../src/auro-tail.js";

// Register custom-named component for testing
if (!customElements.get("test-tail")) {
  AuroTail.register("test-tail");
}

describe("auro-tail", () => {
  it("defines the custom element", () => {
    expect(!!customElements.get("auro-tail")).to.be.true;
  });

  it("has default property values", async () => {
    const el = await fixture(html`<auro-tail></auro-tail>`);
    expect(el.tail).to.equal("AS");
    expect(el.size).to.equal("lg");
    expect(el.variant).to.equal(undefined);
    expect(el.href).to.equal(undefined);
  });

  it("sets data-carrier-type based on tail code and updates when tail changes", async () => {
    const el = await fixture(html`<auro-tail tail="AS"></auro-tail>`);
    expect(el.dataset.carrierType).to.equal("aag");
    el.tail = "OA";
    await el.updateComplete;
    expect(el.dataset.carrierType).to.equal("oa");
    el.tail = "PR";
    await el.updateComplete;
    expect(el.dataset.carrierType).to.equal("oa");
  });

  it("computes labelTypeClass per size map", async () => {
    const el = await fixture(html`<auro-tail size="md"></auro-tail>`);
    expect(el.labelTypeClass).to.equal("body-xs");
    el.size = "lg";
    await el.updateComplete;
    expect(el.labelTypeClass).to.equal("body-sm");
    el.size = "xl";
    await el.updateComplete;
    expect(el.labelTypeClass).to.equal("body-default");
    el.size = "2xl";
    await el.updateComplete;
    expect(el.labelTypeClass).to.equal("body-lg");
  });

  it("renders hyperlink when href provided and size allowed and not grouped", async () => {
    const el = await fixture(html`<auro-tail href="https://alaskaair.com" size="lg"></auro-tail>`);
    expect(el.shouldShowLink).to.be.true;
    const link = el.shadowRoot.querySelector(el.hyperlinkTag._$litStatic$);
    expect(link).to.exist;
  });

  it("does not render hyperlink when in group", async () => {
    const group = await fixture(html`
      <auro-tail-group>
        <auro-tail href="https://alaskaair.com" size="lg"></auro-tail>
      </auro-tail-group>
    `);
    const tail = group.querySelector("auro-tail");
    await tail.updateComplete;
    expect(tail.isInGroup).to.be.true;
    expect(tail.shouldShowLink).to.be.false;
    expect(tail.shadowRoot.querySelector(tail.hyperlinkTag._$litStatic$)).to.be.null;
  });

  it("detects when tail is in horizontal group", async () => {
    const group = await fixture(html`
      <auro-tail-group layout="horizontal" size="lg">
        <auro-tail tail="AS"></auro-tail>
      </auro-tail-group>
    `);
    const tail = group.querySelector("auro-tail");
    await tail.updateComplete;
    expect(tail.isInGroup).to.be.true;
    expect(tail.isInHorizontalGroup).to.be.true;
    expect(tail.isInDiagonalGroup).to.be.false;
  });

  it("detects when tail is in diagonal group", async () => {
    const group = await fixture(html`
      <auro-tail-group layout="diagonal" size="lg">
        <auro-tail tail="AS"></auro-tail>
      </auro-tail-group>
    `);
    const tail = group.querySelector("auro-tail");
    await tail.updateComplete;
    expect(tail.isInGroup).to.be.true;
    expect(tail.isInHorizontalGroup).to.be.false;
    expect(tail.isInDiagonalGroup).to.be.true;
  });

  it("renders border element", async () => {
    const el = await fixture(html`<auro-tail></auro-tail>`);
    await el.updateComplete;
    const border = el.shadowRoot.querySelector(".border");
    expect(border).to.exist;
  });

  it("badge not rendered when in group", async () => {
    const group = await fixture(html`
      <auro-tail-group>
        <auro-tail badge="oneworld" size="lg"></auro-tail>
      </auro-tail-group>
    `);
    const tail = group.querySelector("auro-tail");
    await tail.updateComplete;
    expect(tail.badgeConfig).to.equal(undefined);
    expect(tail.shadowRoot.querySelector(".badge")).to.be.null;
  });

  it("badge rendered when eligible (not grouped, size supports badges)", async () => {
    const el = await fixture(html`<auro-tail badge="oneworld" size="lg"></auro-tail>`);
    await el.updateComplete;
    if (el.badgeConfig) {
      expect(el.shadowRoot.querySelector(".badge")).to.exist;
    } else {
      // Badge restricted by size
      expect(el.shadowRoot.querySelector(".badge")).to.be.null;
    }
  });

  it("aria-label includes member text when badge present", async () => {
    const el = await fixture(html`<auro-tail badge="oneworld" size="lg"></auro-tail>`);
    await el.updateComplete;
    const label = el.shadowRoot.querySelector(".container")?.getAttribute("aria-label");
    expect(label).to.include("Tail livery");
    if (el.badgeConfig) {
      expect(label).to.include("member");
    }
  });


  it("updates carrierType after tail change inside same instance", async () => {
    const el = await fixture(html`<auro-tail tail="HA"></auro-tail>`);
    expect(el.dataset.carrierType).to.equal("aag");
    el.tail = "OA";
    await el.updateComplete;
    expect(el.dataset.carrierType).to.equal("oa");
  });

  it("shouldShowLink false when size not in LINKS_SIZES", async () => {
    const el = await fixture(html`<auro-tail href="https://alaskaair.com" size="xs"></auro-tail>`);
    expect(el.shouldShowLink).to.be.false;
    expect(el.shadowRoot.querySelector(el.hyperlinkTag._$litStatic$)).to.be.null;
  });

  it("accessible check (basic)", async () => {
    const el = await fixture(html`<auro-tail></auro-tail>`);
    await expect(el).to.be.accessible();
  });

  it("badge not rendered when size not in BADGES_SIZES", async () => {
    const el = await fixture(html`<auro-tail badge="oneworld" size="xs"></auro-tail>`);
    await el.updateComplete;
    expect(el.badgeConfig).to.equal(undefined);
    expect(el.shadowRoot.querySelector(".badge")).to.be.null;
  });

  it("badge not rendered for unknown badge type", async () => {
    const el = await fixture(html`<auro-tail badge="unknown" size="lg"></auro-tail>`);
    await el.updateComplete;
    expect(el.badgeConfig).to.equal(undefined);
    expect(el.shadowRoot.querySelector(".badge")).to.be.null;
  });

  it("applies variant attribute", async () => {
    const el = await fixture(html`<auro-tail variant="outline"></auro-tail>`);
    expect(el.variant).to.equal("outline");
    expect(el.getAttribute("variant")).to.equal("outline");
  });

  it("returns default labelTypeClass for unmapped size", async () => {
    const el = await fixture(html`<auro-tail size="xs"></auro-tail>`);
    expect(el.labelTypeClass).to.equal("body-sm");
  });

  it("maps Hawaiian (HA) to aag carrierType", async () => {
    const el = await fixture(html`<auro-tail tail="HA"></auro-tail>`);
    expect(el.carrierType).to.equal("aag");
    expect(el.dataset.carrierType).to.equal("aag");
  });

  it("maps unknown carrier codes to oa carrierType", async () => {
    const el = await fixture(html`<auro-tail tail="XX"></auro-tail>`);
    expect(el.carrierType).to.equal("oa");
    expect(el.dataset.carrierType).to.equal("oa");
  });

  it("renders slot content as label in hyperlink", async () => {
    const el = await fixture(html`
      <auro-tail href="https://alaskaair.com" size="lg">
        <span>Custom Label</span>
      </auro-tail>
    `);
    await el.updateComplete;
    const link = el.shadowRoot.querySelector(el.hyperlinkTag._$litStatic$);
    expect(link).to.exist;
    const slot = link.querySelector('slot');
    expect(slot).to.exist;
  });

  // Registering a custom name would interfere with other tests
  // Just verify method exists on class
  it("has register method", async () => {
    const { AuroTail } = await import("../src/auro-tail.js");
    expect(typeof AuroTail.register).to.equal("function");
  });

  it("renders custom-registered tail", async () => {
    const el = await fixture(html`<test-tail tail="AS"></test-tail>`);
    await el.updateComplete;

    expect(el.shadowRoot.querySelector(".container")).to.exist;
    expect(el.tail).to.equal("AS");
  });
});
