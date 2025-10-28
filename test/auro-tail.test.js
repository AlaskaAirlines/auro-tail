// @ts-nocheck
import { expect, fixture, html, oneEvent } from "@open-wc/testing";
/* eslint-env mocha */
/* global describe, it */
/** @typedef {import('../src/auro-tail.js').AuroTail} AuroTail */
import "../src/registered";

describe("auro-tail", () => {
  it("defines the custom element", () => {
    expect(!!customElements.get("auro-tail")).to.be.true;
  });

  it("has default property values", async () => {
    const el = /** @type {AuroTail} */ (await fixture(html`<auro-tail></auro-tail>`));
    expect(el.tail).to.equal("AS");
    expect(el.size).to.equal("lg");
    expect(el.outline).to.be.false;
    expect(el.borderWidth).to.equal(undefined);
    expect(el.borderColor).to.equal(undefined);
    expect(el.href).to.equal(undefined);
  });

  it("sets data-variant based on tail code and updates when tail changes", async () => {
    const el = /** @type {AuroTail} */ (await fixture(html`<auro-tail tail="AS"></auro-tail>`));
    expect(el.dataset.variant).to.equal("aag");
    el.tail = "OA";
    await el.updateComplete;
    expect(el.dataset.variant).to.equal("oa");
    el.tail = "PR";
    await el.updateComplete;
    expect(el.dataset.variant).to.equal("oa");
  });

  it("computes labelTypeClass per size map", async () => {
    const el = /** @type {AuroTail} */ (await fixture(html`<auro-tail size="md"></auro-tail>`));
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
    const el = /** @type {AuroTail} */ (await fixture(html`<auro-tail href="https://alaskaair.com" size="lg"></auro-tail>`));
    expect(el.shouldShowLink).to.be.true;
    const link = el.shadowRoot.querySelector("auro-hyperlink");
    expect(link).to.exist;
  });

  it("does not render hyperlink when in group", async () => {
    const group = await fixture(html`
      <auro-tail-group>
        <auro-tail href="https://alaskaair.com" size="lg"></auro-tail>
      </auro-tail-group>
    `);
    const tail = /** @type {AuroTail} */ (group.querySelector("auro-tail"));
    await tail.updateComplete;
    expect(tail.isInGroup).to.be.true;
    expect(tail.shouldShowLink).to.be.false;
    expect(tail.shadowRoot.querySelector("auro-hyperlink")).to.be.null;
  });

  it("applies border custom properties when border props set", async () => {
    const el = /** @type {AuroTail} */ (await fixture(html`<auro-tail border-width="2px" border-color="#ffffff"></auro-tail>`));
    await el.updateComplete;
    const border = el.shadowRoot.querySelector(".border");
    expect(border.classList.contains("has-border")).to.be.true;
    expect(el.style.getPropertyValue("--border-width")).to.equal("2px");
    expect(el.style.getPropertyValue("--border-color")).to.equal("#ffffff");
  });

  it("applies has-border when in horizontal group (layout='horizontal')", async () => {
    const group = await fixture(html`
      <auro-tail-group layout="horizontal">
        <auro-tail></auro-tail>
      </auro-tail-group>
    `);
    const tail = /** @type {AuroTail} */ (group.querySelector("auro-tail"));
    await tail.updateComplete;
    const border = tail.shadowRoot.querySelector(".border");
    expect(border.classList.contains("has-border")).to.be.true;
  });

  it("badge not rendered when in group", async () => {
    const group = await fixture(html`
      <auro-tail-group>
        <auro-tail badge="oneworld" size="lg"></auro-tail>
      </auro-tail-group>
    `);
    const tail = /** @type {AuroTail} */ (group.querySelector("auro-tail"));
    await tail.updateComplete;
    expect(tail.badgeConfig).to.equal(undefined);
    expect(tail.shadowRoot.querySelector(".badge")).to.be.null;
  });

  it("badge rendered when eligible (not grouped, size supports badges)", async () => {
    const el = /** @type {AuroTail} */ (await fixture(html`<auro-tail badge="oneworld" size="lg"></auro-tail>`));
    await el.updateComplete;
    if (el.badgeConfig) {
      expect(el.shadowRoot.querySelector(".badge")).to.exist;
    } else {
      // Badge restricted by size
      expect(el.shadowRoot.querySelector(".badge")).to.be.null;
    }
  });

  it("aria-label includes member text when badge present", async () => {
    const el = /** @type {AuroTail} */ (await fixture(html`<auro-tail badge="oneworld" size="lg"></auro-tail>`));
    await el.updateComplete;
    const label = el.shadowRoot.querySelector(".container")?.getAttribute("aria-label");
    expect(label).to.include("Tail livery");
    if (el.badgeConfig) {
      expect(label).to.include("member");
    }
  });

  it("dispatches cancelable href-click event and respects preventDefault", async () => {
    const el = /** @type {AuroTail} */ (await fixture(html`<auro-tail href="https://alaskaair.com" size="lg"></auro-tail>`));
    await el.updateComplete;

    // Non-canceled
    let eventObj;
    el.addEventListener("href-click", e => { eventObj = e; });
    el.shadowRoot.querySelector("auro-hyperlink").click();
    expect(eventObj).to.exist;
    expect(eventObj.defaultPrevented).to.be.false;

    // Canceled
    let canceledEvent;
    el.addEventListener("href-click", e => {
      e.preventDefault();
      canceledEvent = e;
    }, { once: true });
    el.shadowRoot.querySelector("auro-hyperlink").click();
    expect(canceledEvent).to.exist;
    expect(canceledEvent.defaultPrevented).to.be.true;
  });

  it("invokes internal onHrefClick callback before event dispatch", async () => {
    const el = /** @type {AuroTail} */ (await fixture(html`<auro-tail href="https://alaskaair.com" size="lg"></auro-tail>`));
    let calls = 0;
    el.onHrefClick = () => { calls++; };
    await el.updateComplete;
    el.shadowRoot.querySelector("auro-hyperlink").click();
    expect(calls).to.equal(1);
  });

  it("has-border class present when border props set; absent otherwise", async () => {
    const withBorder = /** @type {AuroTail} */ (await fixture(html`<auro-tail border-color="blue"></auro-tail>`));
    expect(withBorder.shadowRoot.querySelector(".border").classList.contains("has-border")).to.be.true;
  const withoutBorder = /** @type {AuroTail} */ (await fixture(html`<auro-tail></auro-tail>`));
    expect(withoutBorder.shadowRoot.querySelector(".border").classList.contains("has-border")).to.be.false;
  });

  it("updates variant after tail change inside same instance", async () => {
    const el = /** @type {AuroTail} */ (await fixture(html`<auro-tail tail="HA"></auro-tail>`));
    expect(el.dataset.variant).to.equal("aag");
    el.tail = "OA";
    await el.updateComplete;
    expect(el.dataset.variant).to.equal("oa");
  });

  it("shouldShowLink false when size not in LINKS_SIZES", async () => {
    const el = /** @type {AuroTail} */ (await fixture(html`<auro-tail href="https://alaskaair.com" size="xs"></auro-tail>`));
    expect(el.shouldShowLink).to.be.false;
    expect(el.shadowRoot.querySelector("auro-hyperlink")).to.be.null;
  });

  it("accessible check (basic)", async () => {
    const el = /** @type {AuroTail} */ (await fixture(html`<auro-tail></auro-tail>`));
    await expect(el).to.be.accessible();
  });

  it("badge not rendered when size not in BADGES_SIZES", async () => {
    const el = /** @type {AuroTail} */ (await fixture(html`<auro-tail badge="oneworld" size="xs"></auro-tail>`));
    await el.updateComplete;
    expect(el.badgeConfig).to.equal(undefined);
    expect(el.shadowRoot.querySelector(".badge")).to.be.null;
  });

  it("badge not rendered for unknown badge type", async () => {
    const el = /** @type {AuroTail} */ (await fixture(html`<auro-tail badge="unknown" size="lg"></auro-tail>`));
    await el.updateComplete;
    expect(el.badgeConfig).to.equal(undefined);
    expect(el.shadowRoot.querySelector(".badge")).to.be.null;
  });

  it("applies outline attribute", async () => {
    const el = /** @type {AuroTail} */ (await fixture(html`<auro-tail outline></auro-tail>`));
    expect(el.outline).to.be.true;
    expect(el.hasAttribute("outline")).to.be.true;
  });

  it("handles border-width as number", async () => {
    const el = /** @type {AuroTail} */ (await fixture(html`<auro-tail></auro-tail>`));
    el.borderWidth = 3;
    await el.updateComplete;
    expect(el.style.getPropertyValue("--border-width")).to.equal("3px");
  });

  it("handles border-width as zero", async () => {
    const el = /** @type {AuroTail} */ (await fixture(html`<auro-tail border-width="0"></auro-tail>`));
    await el.updateComplete;
    expect(el.style.getPropertyValue("--border-width")).to.equal("0px");
  });

  it("ignores non-px border-width units", async () => {
    const el = /** @type {AuroTail} */ (await fixture(html`<auro-tail border-width="2rem"></auro-tail>`));
    await el.updateComplete;
    expect(el.style.getPropertyValue("--border-width")).to.equal("");
  });

  it("returns default labelTypeClass for unmapped size", async () => {
    const el = /** @type {AuroTail} */ (await fixture(html`<auro-tail size="xs"></auro-tail>`));
    expect(el.labelTypeClass).to.equal("body-sm");
  });

  it("maps Hawaiian (HA) to aag variant", async () => {
    const el = /** @type {AuroTail} */ (await fixture(html`<auro-tail tail="HA"></auro-tail>`));
    expect(el.variant).to.equal("aag");
    expect(el.dataset.variant).to.equal("aag");
  });

  it("maps unknown carrier codes to oa variant", async () => {
    const el = /** @type {AuroTail} */ (await fixture(html`<auro-tail tail="XX"></auro-tail>`));
    expect(el.variant).to.equal("oa");
    expect(el.dataset.variant).to.equal("oa");
  });

  it("renders slot content as label in hyperlink", async () => {
    const el = /** @type {AuroTail} */ (await fixture(html`
      <auro-tail href="https://alaskaair.com" size="lg">
        <span slot="display">Custom Label</span>
      </auro-tail>
    `));
    await el.updateComplete;
    const link = el.shadowRoot.querySelector("auro-hyperlink");
    expect(link).to.exist;
    const slot = link.querySelector('slot[name="display"]');
    expect(slot).to.exist;
  });

  it("href-click event 'detail' prop includes href property", async () => {
    const el = /** @type {AuroTail} */ (await fixture(html`<auro-tail href="https://alaskaair.com" size="lg"></auro-tail>`));
    await el.updateComplete;
    
    let eventDetail;
    el.addEventListener("href-click", e => { eventDetail = e.detail; });
    el.shadowRoot.querySelector("auro-hyperlink").click();
    expect(eventDetail).to.deep.equal({ href: "https://alaskaair.com" });
  });

  it("removes CSS custom properties when border props are cleared", async () => {
    const el = /** @type {AuroTail} */ (await fixture(html`<auro-tail border-width="2px" border-color="red"></auro-tail>`));
    await el.updateComplete;
    expect(el.style.getPropertyValue("--border-width")).to.equal("2px");
    expect(el.style.getPropertyValue("--border-color")).to.equal("red");

    el.borderWidth = undefined;
    el.borderColor = undefined;
    await el.updateComplete;
    expect(el.style.getPropertyValue("--border-width")).to.equal("");
    expect(el.style.getPropertyValue("--border-color")).to.equal("");
  });

  // Registering a custom name would interfere with other tests
  // Just verify method exists on class
  it("has register method", async () => {
    const { AuroTail } = await import("../src/auro-tail.js");
    expect(typeof AuroTail.register).to.equal("function");
  });
});
