# Semantic Release Automated Changelog

## [4.1.3](https://github.com/AlaskaAirlines/auro-skeleton/compare/v4.1.2...v4.1.3) (2025-08-14)


### Bug Fixes

* update auro-library to latest version ([d6abd97](https://github.com/AlaskaAirlines/auro-skeleton/commit/d6abd975cd25eb08d3875bd24c8eae6b9bab2a81))

## [4.1.2](https://github.com/AlaskaAirlines/auro-skeleton/compare/v4.1.1...v4.1.2) (2025-08-11)


### Bug Fixes

* auro library was causing aqua scan failures ([a401435](https://github.com/AlaskaAirlines/auro-skeleton/commit/a40143506540712f7e724418ecfdfb12cc965c7a))

## [4.1.1](https://github.com/AlaskaAirlines/auro-skeleton/compare/v4.1.0...v4.1.1) (2025-07-02)


### Bug Fixes

* add type token integration ([820e3aa](https://github.com/AlaskaAirlines/auro-skeleton/commit/820e3aaf21b458513469324a66762479054e8a0e))
* update docs head content ([0fa05dd](https://github.com/AlaskaAirlines/auro-skeleton/commit/0fa05ddf7bdd8ff8999c184f1f7363f038aecd8d))

# [4.1.0](https://github.com/AlaskaAirlines/auro-skeleton/compare/v4.0.0...v4.1.0) (2025-04-28)


### Features

* update to use new color theme tokens [#53](https://github.com/AlaskaAirlines/auro-skeleton/issues/53) ([8213b6b](https://github.com/AlaskaAirlines/auro-skeleton/commit/8213b6bc234f35c871958528fce1475dafaf85cf))


### Performance Improvements

* add wca script for docs api ([db7ee06](https://github.com/AlaskaAirlines/auro-skeleton/commit/db7ee0622523ebda300681e92ec5b11e1fb40f62))

# [4.0.0](https://github.com/AlaskaAirlines/auro-skeleton/compare/v3.3.2...v4.0.0) (2025-02-28)


* feat!: move peer dependencies to "real" dependencies ([c39e639](https://github.com/AlaskaAirlines/auro-skeleton/commit/c39e63995028efb50d9733786c6080e846e3f83e))


### BREAKING CHANGES

* last change was breaking _on a patch version_ because of peer dependencies

Summary:
  Our current build process relies on peer dependencies being present, but
  the peer dependency pipeline is causing far more issues than it's worth.
  Why not just make them regular dependencies? This is what this PR does :)

## [3.3.2](https://github.com/AlaskaAirlines/auro-skeleton/compare/v3.3.1...v3.3.2) (2025-02-08)


### Performance Improvements

* update dependencies ([d8680f2](https://github.com/AlaskaAirlines/auro-skeleton/commit/d8680f2d9cf8b848c5333c3bc9041f579ad3311a))

## [3.3.1](https://github.com/AlaskaAirlines/auro-skeleton/compare/v3.3.0...v3.3.1) (2025-02-08)


### Performance Improvements

* update dependencies ([776a077](https://github.com/AlaskaAirlines/auro-skeleton/commit/776a077242c014c425112c5ef384cb9bb5a5b0d1))

# [3.3.0](https://github.com/AlaskaAirlines/auro-skeleton/compare/v3.2.0...v3.3.0) (2025-02-07)


### Features

* feature commit to trigger release from last chore ([35e6868](https://github.com/AlaskaAirlines/auro-skeleton/commit/35e6868ce79c9e74abb510a70c76d17f81678c80))

# [3.2.0](https://github.com/AlaskaAirlines/auro-skeleton/compare/v3.1.1...v3.2.0) (2024-12-23)


### Features

* update auro deps post node 22 update ([9eec344](https://github.com/AlaskaAirlines/auro-skeleton/commit/9eec344965e9c9468c039798274817da41dd46cf))


### Performance Improvements

* update node to version 22 ([2717502](https://github.com/AlaskaAirlines/auro-skeleton/commit/2717502094be505fcca31cdfff48ca242794283a))

## [3.1.1](https://github.com/AlaskaAirlines/auro-skeleton/compare/v3.1.0...v3.1.1) (2024-11-23)


### Bug Fixes

* update markdown partial pathing to consume new auro lib [#41](https://github.com/AlaskaAirlines/auro-skeleton/issues/41) ([b2c51a7](https://github.com/AlaskaAirlines/auro-skeleton/commit/b2c51a7a0c5e089eb1eab7db5a839b37a2236e15))


### Performance Improvements

* update library to 3.0.2 ([a80a750](https://github.com/AlaskaAirlines/auro-skeleton/commit/a80a75081b4d14ca73c3e500ee6f1059c87f1eb2))

# [3.1.0](https://github.com/AlaskaAirlines/auro-skeleton/compare/v3.0.1...v3.1.0) (2024-10-24)


### Features

* **api:** add register static method [#39](https://github.com/AlaskaAirlines/auro-skeleton/issues/39) ([0a5deb7](https://github.com/AlaskaAirlines/auro-skeleton/commit/0a5deb789cb640410c32427a23753cbf1e2222ef))


### Performance Improvements

* update dependency versions ([2d4af8a](https://github.com/AlaskaAirlines/auro-skeleton/commit/2d4af8a69b421a31f2d3e8c6346a8a3e64572d97))

## [3.0.1](https://github.com/AlaskaAirlines/auro-skeleton/compare/v3.0.0...v3.0.1) (2024-10-09)


### Bug Fixes

* make auro-library a normal dep instead of devDep ([2f71bc8](https://github.com/AlaskaAirlines/auro-skeleton/commit/2f71bc893c928c49f01334ff07afb8dbd8ab8d7f))

# [3.0.0](https://github.com/AlaskaAirlines/auro-skeleton/compare/v2.1.5...v3.0.0) (2024-09-30)


### Bug Fixes

* resolve minor color theming issues ([37d636c](https://github.com/AlaskaAirlines/auro-skeleton/commit/37d636c76e628a39d62c21a30770771d596b9b34))


### Features

* add tag name as attribute when custom registered ([99a7b02](https://github.com/AlaskaAirlines/auro-skeleton/commit/99a7b02877fd4248edf2901862b1c3e462be2d4d))
* refactor color token structure with tier 3 tokens [#31](https://github.com/AlaskaAirlines/auro-skeleton/issues/31) ([ad5bdfa](https://github.com/AlaskaAirlines/auro-skeleton/commit/ad5bdfaef8cf26fbf6e00bba0ecb06e58369c410))


### Performance Improvements

* refactor custom component registration config ([a5534f5](https://github.com/AlaskaAirlines/auro-skeleton/commit/a5534f516838558f58d7b80469c1944ee6cbac6b))
* update dependencies ([67b0b6c](https://github.com/AlaskaAirlines/auro-skeleton/commit/67b0b6c2492b5ef3d441292721db2deffbb3dd5d))


### BREAKING CHANGES

* trigger major release for color theme support #31

## [2.1.5](https://github.com/AlaskaAirlines/auro-skeleton/compare/v2.1.4...v2.1.5) (2024-02-20)


### Performance Improvements

* **docs:** add custom registration example ([185c777](https://github.com/AlaskaAirlines/auro-skeleton/commit/185c777a618bf9867b717f5bca46e5891e21f96f))

## [2.1.4](https://github.com/AlaskaAirlines/auro-skeleton/compare/v2.1.3...v2.1.4) (2024-02-15)


### Performance Improvements

* **demo:** update demo file names ([ef0a58b](https://github.com/AlaskaAirlines/auro-skeleton/commit/ef0a58b68345fc7ba9dff07effa81d121e55d3a4))
* **deps:** update dependencies ([aa06406](https://github.com/AlaskaAirlines/auro-skeleton/commit/aa064068472cdbf658f56efa0b512b9a0ad1e77c))

## [2.1.3](https://github.com/AlaskaAirlines/auro-skeleton/compare/v2.1.2...v2.1.3) (2024-02-13)


### Performance Improvements

* update deps and add ESM support badge ([17e6439](https://github.com/AlaskaAirlines/auro-skeleton/commit/17e64399cde80ac8183cb3da054b29b3acbb324f))

## [2.1.2](https://github.com/AlaskaAirlines/auro-skeleton/compare/v2.1.1...v2.1.2) (2024-01-31)


### Performance Improvements

* alaskaairux ref updates ([7f9ef97](https://github.com/AlaskaAirlines/auro-skeleton/commit/7f9ef9777bf539468f336baf340cacedb2658b98))

## [2.1.1](https://github.com/AlaskaAirlines/auro-skeleton/compare/v2.1.0...v2.1.1) (2024-01-30)


### Performance Improvements

* **deps:** update dependencies to latest version ([2eb3ce5](https://github.com/AlaskaAirlines/auro-skeleton/commit/2eb3ce5ddecc822fe2f27f92c14ab40f8e9d6f1f))
* **imports:** update imports to [@aurodesignsystem](https://github.com/aurodesignsystem) ([858660b](https://github.com/AlaskaAirlines/auro-skeleton/commit/858660bb867702e0a08dd63f578d74404d8d19d5))
* **token:** update token per new theming [#23](https://github.com/AlaskaAirlines/auro-skeleton/issues/23) ([0305927](https://github.com/AlaskaAirlines/auro-skeleton/commit/03059279acaf69a2c0578e6b0651ae0b664296da))

# [2.1.0](https://github.com/AlaskaAirlines/auro-skeleton/compare/v2.0.1...v2.1.0) (2022-06-03)


### Features

* **bkgColor:** update gradient color ([c29135c](https://github.com/AlaskaAirlines/auro-skeleton/commit/c29135c5212c9316487efcdc6d377a7bb4689e47))

## [2.0.1](https://github.com/AlaskaAirlines/auro-skeleton/compare/v2.0.0...v2.0.1) (2021-12-02)


### Bug Fixes

* **a11y:** update css to support a11y contrast [#16](https://github.com/AlaskaAirlines/auro-skeleton/issues/16) ([d7a175e](https://github.com/AlaskaAirlines/auro-skeleton/commit/d7a175e5a11a02b02f0682a1fbd63f7474d80f01))

# [2.0.0](https://github.com/AlaskaAirlines/auro-skeleton/compare/v1.0.8...v2.0.0) (2021-08-13)


### chore

* **deps:** update packages ([056bc8d](https://github.com/AlaskaAirlines/auro-skeleton/commit/056bc8d618c8a0e5184ac2a5504119dc17fb99d4))


### BREAKING CHANGES

* **deps:** This update signals the official release of
@aurodesignsystem/auro-skeleton html custom element

## [1.0.8](https://github.com/AlaskaAirlines/auro-skeleton/compare/v1.0.7...v1.0.8) (2021-07-15)


### Bug Fixes

* **readme:** correct readme code sample ([fe9fe79](https://github.com/AlaskaAirlines/auro-skeleton/commit/fe9fe79bf4e1744d380a0f37a723108944b82a82))

## [1.0.7](https://github.com/AlaskaAirlines/auro-skeleton/compare/v1.0.6...v1.0.7) (2021-06-04)


### Bug Fixes

* **version:** remove version feature ([9144d4b](https://github.com/AlaskaAirlines/auro-skeleton/commit/9144d4bff34ac4b40b1b9de065e2d244a476ef11))

## [1.0.6](https://github.com/AlaskaAirlines/auro-skeleton/compare/v1.0.5...v1.0.6) (2021-06-04)


### Bug Fixes

* **version:** try a different way to print to file ([8e5f281](https://github.com/AlaskaAirlines/auro-skeleton/commit/8e5f2813dd56d366ccb39486c804687db9990cc0))

## [1.0.5](https://github.com/AlaskaAirlines/auro-skeleton/compare/v1.0.4...v1.0.5) (2021-06-04)


### Bug Fixes

* **version:** add back to template ([2068fda](https://github.com/AlaskaAirlines/auro-skeleton/commit/2068fda05936707d9d35248e8aad3a308c05ea02))
* **version:** remove from template ([bb584f3](https://github.com/AlaskaAirlines/auro-skeleton/commit/bb584f3a3badc8e0136104105fd6c63aa2f20e23))

## [1.0.4](https://github.com/AlaskaAirlines/auro-skeleton/compare/v1.0.3...v1.0.4) (2021-06-04)


### Bug Fixes

* **version:** add suport for version in dom ([779bb67](https://github.com/AlaskaAirlines/auro-skeleton/commit/779bb6735a8374d7d0ca9afa45d975ac59c3145b))
* **version:** remove from template ([df02d20](https://github.com/AlaskaAirlines/auro-skeleton/commit/df02d20099d071c18344eaa884d7a7329e31e6b0))

## [1.0.3](https://github.com/AlaskaAirlines/auro-skeleton/compare/v1.0.2...v1.0.3) (2021-06-04)


### Bug Fixes

* **version:** dry run of next version ([e371ccb](https://github.com/AlaskaAirlines/auro-skeleton/commit/e371ccbbc256fd27f452704f1d944c08fe22f277))

## [1.0.2](https://github.com/AlaskaAirlines/auro-skeleton/compare/v1.0.1...v1.0.2) (2021-06-04)


### Bug Fixes

* **version:** dry run of next version ([e20eb3a](https://github.com/AlaskaAirlines/auro-skeleton/commit/e20eb3adb5cb41493c8885f21289a734bf022b42))

## [1.0.1](https://github.com/AlaskaAirlines/auro-skeleton/compare/v1.0.0...v1.0.1) (2021-06-04)


### Bug Fixes

* **automate api:** address setup for commit back of generated API ([c6d5c3d](https://github.com/AlaskaAirlines/auro-skeleton/commit/c6d5c3def1f39238179e3ee5c4a63e383e43e8bd))

# 1.0.0 (2021-06-03)


### Bug Fixes

* **commitlint:** update rules ([d4ae08a](https://github.com/AlaskaAirlines/auro-skeleton/commit/d4ae08aefc8ba966fd333627f59d22045e31c1f1))
* **commitLint:** add config; reset all max values ([b07fcc7](https://github.com/AlaskaAirlines/auro-skeleton/commit/b07fcc76942c0b26357fe6db48320f1a42903940))
* **commitLint:** add config; set max to 1000 ([1806caf](https://github.com/AlaskaAirlines/auro-skeleton/commit/1806cafaf852d978277d9143d88225102fe152f1))
* **commitLint:** set max to 1000 ([c83d2fc](https://github.com/AlaskaAirlines/auro-skeleton/commit/c83d2fc479c5def0ddc5832bb62f6e4a1246a1bf))
* **commitLint:** set max-length to Infinity ([b7edaf2](https://github.com/AlaskaAirlines/auro-skeleton/commit/b7edaf2800feaa1ff33a19e4061b4cbbb34626ca))
* **preCommit:** remove hook and replace with text ([0db4982](https://github.com/AlaskaAirlines/auro-skeleton/commit/0db49822a35b5a1c9e98f905058a74f4f580e437))
* clean up repo ([d2202bd](https://github.com/AlaskaAirlines/auro-skeleton/commit/d2202bd75158473969a2598302925a9e9619a2fa))


### Features

* initial component build ([abb3c10](https://github.com/AlaskaAirlines/auro-skeleton/commit/abb3c10e16d96c2df2da7e5f6e009935e6b9ee64))
* update component ([2d9abab](https://github.com/AlaskaAirlines/auro-skeleton/commit/2d9abab184ccff84549ede0457103e25ccadb0ad))
