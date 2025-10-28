// @ts-nocheck
import { expect, fixture, html } from "@open-wc/testing";
/* eslint-env mocha */
/* global describe, it */
/** @typedef {import('../src/auro-tail-group.js').AuroTailGroup} AuroTailGroup */
/** @typedef {import('../src/auro-tail.js').AuroTail} AuroTail */
import "../src/registered";

describe("auro-tail-group", () => {
  it("defines the custom element", () => {
    expect(!!customElements.get("auro-tail-group")).to.be.true;
  });

  it("has default property values", async () => {
    const el = /** @type {AuroTailGroup} */ (await fixture(html`<auro-tail-group></auro-tail-group>`));
    expect(el.layout).to.equal("horizontal");
    expect(el.size).to.equal("lg");
    expect(el.borderColor).to.equal(undefined);
  });

  it("renders horizontal layout by default", async () => {
    const el = /** @type {AuroTailGroup} */ (await fixture(html`
      <auro-tail-group>
        <auro-tail tail="AS"></auro-tail>
        <auro-tail tail="HA"></auro-tail>
      </auro-tail-group>
    `));
    await el.updateComplete;
    const group = el.shadowRoot.querySelector(".group");
    expect(group.classList.contains("horizontal")).to.be.true;
  });

  it("renders diagonal layout when specified", async () => {
    const el = /** @type {AuroTailGroup} */ (await fixture(html`
      <auro-tail-group layout="diagonal">
        <auro-tail tail="AS"></auro-tail>
        <auro-tail tail="HA"></auro-tail>
      </auro-tail-group>
    `));
    await el.updateComplete;
    const group = el.shadowRoot.querySelector(".group");
    expect(group.classList.contains("diagonal")).to.be.true;
  });

  it("propagates size to child tails", async () => {
    const el = /** @type {AuroTailGroup} */ (await fixture(html`
      <auro-tail-group size="md">
        <auro-tail tail="AS"></auro-tail>
        <auro-tail tail="HA"></auro-tail>
      </auro-tail-group>
    `));
    
    // Wait for async updateChildTails
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const tails = el.querySelectorAll('auro-tail');
    expect(tails[0].size).to.equal("md");
    expect(tails[1].size).to.equal("md");
  });

  it("propagates border-color to child tails", async () => {
    const el = /** @type {AuroTailGroup} */ (await fixture(html`
      <auro-tail-group border-color="blue">
        <auro-tail tail="AS"></auro-tail>
        <auro-tail tail="HA"></auro-tail>
      </auro-tail-group>
    `));
    
    // Wait for async updateChildTails
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const tails = el.querySelectorAll('auro-tail');
    expect(tails[0].borderColor).to.equal("blue");
    expect(tails[1].borderColor).to.equal("blue");
  });

  it("removes excess tails beyond MAX_TAILS_IN_GROUP", async () => {
    const el = /** @type {AuroTailGroup} */ (await fixture(html`
      <auro-tail-group>
        <auro-tail tail="AS"></auro-tail>
        <auro-tail tail="HA"></auro-tail>
        <auro-tail tail="AA"></auro-tail>
        <auro-tail tail="OA"></auro-tail>
      </auro-tail-group>
    `));
    
    // Wait for async updateChildTails
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const tails = el.querySelectorAll('auro-tail');
    expect(tails.length).to.equal(2); // Only first 2 should remain
  });

  it("does not render shadow DOM for unsupported sizes", async () => {
    const el = /** @type {AuroTailGroup} */ (await fixture(html`<auro-tail-group size="xl"></auro-tail-group>`));
    // xl is not in GROUPS_SIZES, so no shadow DOM should be created
    expect(el.shadowRoot).to.be.null;
  });

  it("removes all child tails for unsupported sizes", async () => {
    const el = /** @type {AuroTailGroup} */ (await fixture(html`
      <auro-tail-group size="xl">
        <auro-tail tail="AS"></auro-tail>
        <auro-tail tail="HA"></auro-tail>
      </auro-tail-group>
    `));
    
    // Wait for async updateChildTails
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const tails = el.querySelectorAll('auro-tail');
    expect(tails.length).to.equal(0); // All should be removed
  });

  it("updates child tails when size changes", async () => {
    const el = /** @type {AuroTailGroup} */ (await fixture(html`
      <auro-tail-group size="lg">
        <auro-tail tail="AS"></auro-tail>
      </auro-tail-group>
    `));
    
    // Wait for initial update
    await new Promise(resolve => setTimeout(resolve, 10));
    let tail = /** @type {AuroTail} */ (el.querySelector('auro-tail'));
    expect(tail.size).to.equal("lg");
    
    // Change size
    el.size = "md";
    await el.updateComplete;
    await new Promise(resolve => setTimeout(resolve, 10));
    
    tail = /** @type {AuroTail} */ (el.querySelector('auro-tail'));
    expect(tail.size).to.equal("md");
  });

  it("updates child tails when border-color changes", async () => {
    const el = /** @type {AuroTailGroup} */ (await fixture(html`
      <auro-tail-group border-color="red">
        <auro-tail tail="AS"></auro-tail>
      </auro-tail-group>
    `));
    
    // Wait for initial update
    await new Promise(resolve => setTimeout(resolve, 10));
    let tail = /** @type {AuroTail} */ (el.querySelector('auro-tail'));
    expect(tail.borderColor).to.equal("red");
    
    // Change border color
    el.borderColor = "green";
    await el.updateComplete;
    await new Promise(resolve => setTimeout(resolve, 10));
    
    tail = /** @type {AuroTail} */ (el.querySelector('auro-tail'));
    expect(tail.borderColor).to.equal("green");
  });

  it("handles slot changes", async () => {
    const el = /** @type {AuroTailGroup} */ (await fixture(html`<auro-tail-group></auro-tail-group>`));
    
    // Add a tail dynamically
    const newTail = document.createElement('auro-tail');
    newTail.tail = 'AS';
    el.appendChild(newTail);
    
    // Trigger slot change
    el.handleSlotChange();
    
    // Wait for async update
    await new Promise(resolve => setTimeout(resolve, 10));
    
    const tail = /** @type {AuroTail} */ (el.querySelector('auro-tail'));
    expect(tail.size).to.equal("lg"); // Should get group's default size
  });

  it("accessible check (basic)", async () => {
    const el = /** @type {AuroTailGroup} */ (await fixture(html`
      <auro-tail-group>
        <auro-tail tail="AS"></auro-tail>
        <auro-tail tail="HA"></auro-tail>
      </auro-tail-group>
    `));
    await expect(el).to.be.accessible();
  });

  // Test all supported sizes
  it("supports xs size", async () => {
    const el = /** @type {AuroTailGroup} */ (await fixture(html`<auro-tail-group size="xs"></auro-tail-group>`));
    expect(el.shadowRoot).to.not.be.null;
    expect(el.shadowRoot.querySelector(".group")).to.exist;
  });

  it("supports sm size", async () => {
    const el = /** @type {AuroTailGroup} */ (await fixture(html`<auro-tail-group size="sm"></auro-tail-group>`));
    expect(el.shadowRoot).to.not.be.null;
    expect(el.shadowRoot.querySelector(".group")).to.exist;
  });

  it("supports md size", async () => {
    const el = /** @type {AuroTailGroup} */ (await fixture(html`<auro-tail-group size="md"></auro-tail-group>`));
    expect(el.shadowRoot).to.not.be.null;
    expect(el.shadowRoot.querySelector(".group")).to.exist;
  });

  it("supports lg size", async () => {
    const el = /** @type {AuroTailGroup} */ (await fixture(html`<auro-tail-group size="lg"></auro-tail-group>`));
    expect(el.shadowRoot).to.not.be.null;
    expect(el.shadowRoot.querySelector(".group")).to.exist;
  });

  // Registering a custom name would interfere with other tests
  // Just verify method exists on class
  it("has register method", async () => {
    const { AuroTail } = await import("../src/auro-tail.js");
    expect(typeof AuroTail.register).to.equal("function");
  });
});
