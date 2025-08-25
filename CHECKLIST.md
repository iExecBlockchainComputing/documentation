# iExec Documentation Changes Checklist

## CRITICAL PRIORITY

### 1. Vale Error Resolution (491 Total Errors)

#### 1.1 Terminology Standardization Error

- [ ] **Intel Capitalization** (43 instances)
  - [ ] Convert `Intel` → `intel` across all files
  - [ ] Files: `src/get-started/protocol/tee/*.md`,
        `src/guides/build-iapp/advanced/*.md`
  - [ ] Verification: `grep -r "Intel" src/` should return 0 results

- [ ] **Ethereum Capitalization** (38 instances)
  - [ ] Convert `Ethereum` → `ethereum` across all files
  - [ ] Files: `src/get-started/overview/*.md`, `src/references/web3*/*.md`
  - [ ] Verification: `grep -r "Ethereum" src/` should return 0 results

- [ ] **Workerpool Standardization** (27 instances)
  - [ ] Convert `workerpool` → `Workerpool` across all files
  - [ ] Files: `src/get-started/protocol/worker/*.md`,
        `src/references/dataProtector/*.md`
  - [ ] Verification: `grep -r "workerpool[^s]" src/` should return 0 results

- [ ] **TaskId Standardization** (8 instances)
  - [ ] Convert `taskid` → `taskId` across all files
  - [ ] Files: `src/guides/build-iapp/advanced/*.md`,
        `src/references/web3telegram.md`
  - [ ] Verification: `grep -r "taskid" src/` should return 0 results

- [ ] **Oracle Capitalization** (34 instances)
  - [ ] Convert `Oracle` → `oracle` across all files
  - [ ] Files: `src/get-started/protocol/oracle.md`,
        `src/guides/build-iapp/advanced/*.md`
  - [ ] Verification: `grep -r "Oracle[^F]" src/` should return 0 results

- [ ] **Package Manager Terms** (15 instances)
  - [ ] Convert `NPM` → `npm` across all files
  - [ ] Convert `DockerHub` → `Dockerhub` across all files
  - [ ] Convert `GitHub` → `Github` across all files
  - [ ] Files: `src/references/*/getting-started.md`,
        `src/guides/build-iapp/*.md`

- [ ] **Blockchain Terms** (12 instances)
  - [ ] Convert `Blockchain` → `blockchain` across all files
  - [ ] Convert `Mainnet` → `mainnet` across all files
  - [ ] Convert `Sidechain` → `sidechain` across all files
  - [ ] Files: `src/get-started/overview/*.md`, `src/references/glossary.md`

- [ ] **Data Structure Terms** (18 instances)
  - [ ] Convert `JSON` → `json` across all files
  - [ ] Convert `Boolean` → `boolean` across all files
  - [ ] Files: `src/guides/manage-data/*.md`,
        `src/references/dataProtector/dataProtectorCore/*.md`

#### 1.2 Style Formatting Errors

- [ ] **Em Dash Spacing** (23 instances)
  - [ ] Fix spacing around em dashes (remove spaces)
  - [ ] Files: `src/get-started/protocol/pay-per-task.md`,
        `src/references/dataProtector/dataProtectorCore.md`
  - [ ] Pattern: `" - "` → `"—"`

- [ ] **Unit Spacing** (15 instances)
  - [ ] Add non-breaking space between numbers and units
  - [ ] Examples: `2GB` → `2 GB`, `30h` → `30 h`, `5s` → `5 s`
  - [ ] Files: `src/get-started/protocol/pay-per-task.md`,
        `src/guides/build-iapp/inputs-and-outputs.md`

- [ ] **Quote Punctuation** (8 instances)
  - [ ] Move commas and periods inside quotation marks
  - [ ] Files: `src/guides/build-iapp/manage-access.md`,
        `src/references/glossary.md`

- [ ] **AM/PM Formatting** (4 instances)
  - [ ] Add space before AM/PM designations
  - [ ] Files: `src/references/web3telegram.md`
  - [ ] Pattern: `9am` → `9 AM`, `5pm` → `5 PM`

### 2. Exclamation Point Removal (47 Errors)

- [ ] **Remove all exclamation points** from content text (keep in code examples
      if needed)
- [ ] **Primary Files**:
  - [ ] `src/get-started/helloWorld/*.md` (18 instances)
  - [ ] `src/guides/build-iapp/advanced/*.md` (12 instances)
  - [ ] `src/references/iapp-generator/*.md` (8 instances)
  - [ ] `src/guides/manage-data/*.md` (5 instances)
  - [ ] `src/guides/use-iapp/*.md` (4 instances)

### 3. Strategic Messaging Integration

- [ ] **"Turnkey Privacy" Integration**
  - [ ] Achieve 80% coverage across major sections
  - [ ] Add to all section introductions
  - [ ] Include in feature descriptions
  - [ ] Integrate into navigation CTAs
  - [ ] Reinforce in tutorial conclusions

- [ ] **Replace Generic Marketing Language**
  - [ ] "Solutions" → specific tool identification
  - [ ] "Revolutionary" → proven capabilities
  - [ ] "Leverage" → use/utilize appropriately
  - [ ] Generic benefits → iExec-specific value propositions

---

## HIGH PRIORITY

### 4. Heading Capitalization (246 Warnings)

#### 4.1 Systematic Heading Conversion

- [ ] **Convert Title Case → Sentence Case** across all headings
- [ ] **Pattern**: `## Getting Started` → `## Getting started`
- [ ] **Exception**: Proper nouns (iExec, DataProtector, etc.) remain
      capitalized

#### 4.2 Priority Files (High Traffic)

- [ ] `src/get-started/helloWorld/*.md` (25 headings)
- [ ] `src/guides/build-iapp/*.md` (45 headings)
- [ ] `src/guides/manage-data/*.md` (18 headings)
- [ ] `src/guides/use-iapp/*.md` (22 headings)
- [ ] `src/references/dataProtector/*.md` (67 headings)
- [ ] `src/references/iapp-generator/*.md` (23 headings)
- [ ] `src/references/web3mail/*.md` (18 headings)
- [ ] `src/references/web3telegram/*.md` (18 headings)

#### 4.3 Common Heading Patterns to Fix

- [ ] `Quick Start` → `Quick start`
- [ ] `Getting Started` → `Getting started`
- [ ] `Next Steps` → `Next steps`
- [ ] `Use Cases` → `Use cases`
- [ ] `Key Features` → `Key features`
- [ ] `Best Practices` → `Best practices`
- [ ] `Return Value` → `Return value`
- [ ] `Error Handling` → `Error handling`
- [ ] `What's Next?` → `What's next?`
- [ ] `How it Works` → `How it works`

### 5. First-Person Language Reduction (187 Warnings)

#### 5.1 "We/Our/Us" Conversion Patterns

- [ ] **"We provide"** → **"iExec provides"** or **"The platform provides"**
- [ ] **"Our tools"** → **"The tools"** or **"iExec tools"**
- [ ] **"Let's build"** → **"Build"** or **"Start building"**
- [ ] **"We believe"** → **"Privacy should be"** or remove entirely
- [ ] **"Our documentation"** → **"This documentation"** or **"The
      documentation"**

#### 5.2 Priority Files for First-Person Reduction

- [ ] `src/get-started/welcome.md` (8 instances) - **CRITICAL**
- [ ] `src/get-started/helloWorld/*.md` (23 instances)
- [ ] `src/guides/build-iapp/*.md` (34 instances)
- [ ] `src/guides/use-iapp/*.md` (18 instances)
- [ ] `src/references/web3telegram.md` (15 instances)
- [ ] `src/get-started/overview/*.md` (22 instances)

### 6. Application vs App Standardization (89 Instances)

- [ ] **Global Replace**: `application` → `app` (except in specific technical
      contexts)
- [ ] **Files to Update**:
  - [ ] `src/get-started/overview/iapp.md` (8 instances)
  - [ ] `src/guides/build-iapp/advanced/*.md` (23 instances)
  - [ ] `src/references/dataProtector/dataProtectorCore/*.md` (15 instances)
  - [ ] `src/references/web3mail/*.md` (12 instances)
  - [ ] `src/references/web3telegram.md` (18 instances)
  - [ ] `src/references/glossary.md` (13 instances)

### 7. Passive Voice Conversion (156 Suggestions)

#### 7.1 Common Passive → Active Patterns

- [ ] **"Data is encrypted"** → **"DataProtector encrypts data"**
- [ ] **"Apps are deployed"** → **"Developers deploy apps"**
- [ ] **"Results are returned"** → **"The system returns results"**
- [ ] **"Tasks are executed"** → **"Workers execute tasks"**
- [ ] **"Access is granted"** → **"Users grant access"**
- [ ] **"Files are processed"** → **"The system processes files"**
- [ ] **"Orders are created"** → **"Users create orders"**

#### 7.2 Priority Files for Active Voice

- [ ] `src/get-started/overview/protected-data.md` (12 instances)
- [ ] `src/get-started/helloWorld/2-protectData.md` (8 instances)
- [ ] `src/guides/build-iapp/inputs-and-outputs.md` (15 instances)
- [ ] `src/references/dataProtector/dataProtectorCore/*.md` (31 instances)
- [ ] `src/references/web3mail/methods/*.md` (18 instances)

### 8. Acronym Expansion (312 Suggestions)

#### 8.1 Technical Acronyms (First Usage Expansion)

- [ ] **TEE** → **Trusted Execution Environment (TEE)** on first usage per page
- [ ] **SGX** → **Software Guard Extensions (SGX)** on first usage per page
- [ ] **TDX** → **Trust Domain Extensions (TDX)** on first usage per page
- [ ] **RLC** → **Run on Lots of Computers (RLC)** on first usage per page
- [ ] **ENS** → **Ethereum Name Service (ENS)** on first usage per page
- [ ] **IPFS** → **InterPlanetary File System (IPFS)** on first usage per page

#### 8.2 Files Requiring Heavy Acronym Expansion

- [ ] `src/get-started/protocol/tee/*.md` (45 instances)
- [ ] `src/get-started/overview/rlc.md` (23 instances)
- [ ] `src/guides/build-iapp/advanced/*.md` (67 instances)
- [ ] `src/references/dataProtector/advanced/*.md` (38 instances)
- [ ] `src/references/web3mail/*.md` (28 instances)
- [ ] `src/references/web3telegram/*.md` (31 instances)

#### 8.3 Business/Web Acronyms

- [ ] **SEO** → **Search Engine Optimization (SEO)** on first usage
- [ ] **API** → **Application Programming Interface (API)** on first usage
- [ ] **CLI** → **Command Line Interface (CLI)** on first usage
- [ ] **SDK** → **Software Development Kit (SDK)** on first usage
- [ ] **NFT** → **Non-Fungible Token (NFT)** on first usage

---

## MEDIUM PRIORITY

### 9. Information Architecture Restructuring

#### 9.1 Protocol Section Integration

- [ ] **Move Protocol Content to Appropriate Sections**
  - [ ] `src/protocol/proof-of-contribution.md` → `src/get-started/overview/`
  - [ ] `src/protocol/tee/introduction.md` →
        `src/get-started/overview/tee-basics.md`
  - [ ] `src/protocol/tee/intel-sgx.md` →
        `src/references/tee-technologies/intel-sgx.md`
  - [ ] `src/protocol/tee/intel-tdx.md` →
        `src/references/tee-technologies/intel-tdx.md`
  - [ ] `src/protocol/tee/sgx-vs-tdx.md` →
        `src/references/tee-technologies/comparison.md`
  - [ ] `src/protocol/oracle.md` → `src/references/protocol/oracle.md`
  - [ ] `src/protocol/pay-per-task.md` →
        `src/references/protocol/pay-per-task.md`
  - [ ] `src/protocol/worker/*.md` → `src/references/protocol/worker/`

#### 9.2 Guides Section Reorganization

- [ ] **Restructure from Action-Based to Feature-Based**

  **Current Structure**:

  ```
  guides/
  ├── build-iapp/
  ├── manage-data/
  └── use-iapp/
  ```

  **Recommended Structure**:

  ```
  guides/
  ├── data-protection/
  │   ├── protect-sensitive-data.md (from manage-data/manage-access.md)
  │   ├── access-control.md (from manage-data/manage-access.md)
  │   ├── monetization.md (from manage-data/monetize-protected-data.md)
  │   └── schemas-and-types.md (from manage-data/handle-schemas-dataset-types.md)
  ├── confidential-computing/
  │   ├── getting-started.md (from build-iapp/build-&-test.md)
  │   ├── development-workflow.md (from build-iapp/build-&-test.md)
  │   ├── inputs-and-outputs.md (from build-iapp/inputs-and-outputs.md)
  │   ├── debugging.md (from build-iapp/debugging.md)
  │   ├── deployment.md (from build-iapp/deploy-&-run.md)
  │   ├── access-management.md (from build-iapp/manage-access.md)
  │   └── advanced/ (from build-iapp/advanced/)
  ├── app-execution/
  │   ├── getting-started.md (from use-iapp/getting-started.md)
  │   ├── payment-methods.md (from use-iapp/how-to-pay-executions.md)
  │   ├── with-protected-data.md (from use-iapp/run-iapp-with-ProtectedData.md)
  │   ├── without-protected-data.md (from use-iapp/run-iapp-without-ProtectedData.md)
  │   └── web3-messaging.md (from use-iapp/integrate-web3-messaging.md)
  └── integration/
      ├── overview.md (new)
      ├── sdk-integration.md (new)
      └── best-practices.md (new)
  ```

#### 9.3 Get Started Section Streamlining

- [ ] **Consolidate Overlapping Content**
  - [ ] Merge `src/get-started/toolkit.md` into `src/get-started/welcome.md`
  - [ ] Move `src/get-started/tooling-and-explorers/` → `src/references/tools/`
  - [ ] Consolidate `src/get-started/overview/` concepts into main tutorial flow
  - [ ] Create clear progression: Welcome → Quick Start → Tutorial → Concepts

#### 9.4 Cross-Reference Implementation

- [ ] **Add Navigation Links Between Related Sections**
  - [ ] Link from tutorials to relevant API documentation
  - [ ] Link from concept pages to implementation guides
  - [ ] Add "Related" sections at the bottom of each major page
  - [ ] Implement breadcrumb navigation improvements

### 10. Accessibility Implementation (40% → 80% WCAG Compliance)

#### 10.1 Image Accessibility

- [ ] **Add Alt Text to All Images**
  - [ ] `src/assets/hello-world/*.png` (4 images)
  - [ ] `src/assets/tooling-&-explorers/*/*.png` (15+ images)
  - [ ] `src/assets/use-cases/*.png` (4 images)
  - [ ] `src/assets/profiles_avatars/*.png` (13 images)
  - [ ] `src/references/dataProtectorSharing/*.png` (2 images)

#### 10.2 Heading Hierarchy Optimization

- [ ] **Audit H1-H6 Structure for Screen Readers**
  - [ ] Ensure logical heading progression (no skipped levels)
  - [ ] Verify each page has only one H1
  - [ ] Check nested content maintains proper hierarchy
  - [ ] Files: All `.md` files (116 files)

#### 10.3 Keyboard Navigation

- [ ] **Ensure All Interactive Elements Are Accessible**
  - [ ] Test tab navigation through all pages
  - [ ] Verify focus indicators are visible
  - [ ] Check skip-to-content functionality
  - [ ] Scope: All Vue components and interactive elements

#### 10.4 Color Contrast Compliance

- [ ] **Verify WCAG AA Compliance (4.5:1 ratio)**
  - [ ] Check text on colored backgrounds
  - [ ] Verify link color contrast
  - [ ] Test with color blindness simulators
  - [ ] Files: All styled components and CSS

### 11. Content Completion (Critical User Flows)

#### 11.1 "Under Development" Pages

- [ ] **Complete Placeholder Content**
  - [ ] `src/guides/use-iapp/introduction.md` (currently just "This page is
        under development")
  - [ ] Complete React/Vue.js project starters in
        `src/get-started/quick-start.md`
  - [ ] Fill in TODO items across all files

#### 11.2 Broken Link Verification

- [ ] **Internal Link Audit**
  - [ ] Verify all `/get-started/` links work correctly
  - [ ] Check all `/guides/` internal references
  - [ ] Validate `/references/` cross-references
  - [ ] Test all relative links in markdown files

- [ ] **External Link Audit**
  - [ ] Verify GitHub repository links are current
  - [ ] Check CodeSandbox links in quick-start
  - [ ] Validate Discord invite links
  - [ ] Test all external documentation references

#### 11.3 Missing Content Creation

- [ ] **Create Missing Landing Pages**
  - [ ] `src/references/tee-technologies/index.md` (new)
  - [ ] `src/references/protocol/index.md` (new)
  - [ ] `src/guides/integration/index.md` (new)

### 12. Holder Audience Content Development

#### 12.1 RLC Documentation Enhancement

- [ ] **Expand `src/get-started/overview/rlc.md`**
  - [ ] Add ecosystem growth metrics section
  - [ ] Include strategic updates framework
  - [ ] Create token utility explanations
  - [ ] Add community showcase elements

#### 12.2 Ecosystem Content

- [ ] **Community Showcase Integration**
  - [ ] Builder success stories
  - [ ] Project highlights
  - [ ] Ecosystem metrics and progress updates
  - [ ] Strategic partnership content

#### 12.3 Crypto-Native Voice Integration

- [ ] **Add Crypto Culture Understanding**
  - [ ] Include ecosystem context in relevant sections
  - [ ] Reference crypto community standards
  - [ ] Demonstrate crypto-native positioning

### 13. Advanced User Experience Optimization

#### 13.1 Progressive Disclosure Implementation

- [ ] **Implement Collapsible Sections for Complex Topics**
  - [ ] Technical concept explanations
  - [ ] Advanced configuration options
  - [ ] Troubleshooting sections
  - [ ] Code examples with multiple languages

#### 13.2 Visual Hierarchy Enhancement

- [ ] **Improve Scannable Format**
  - [ ] Add more callout boxes for key information
  - [ ] Implement consistent icon usage
  - [ ] Create visual breaks in dense content
  - [ ] Add summary boxes at section ends

#### 13.3 Search Functionality Optimization

- [ ] **Improve Content Discoverability**
  - [ ] Add metadata to all markdown files
  - [ ] Implement tagging system
  - [ ] Create topic-based landing pages
  - [ ] Optimize for search engine indexing

## QUALITY ASSURANCE PROCESS

### Validation Steps for Each Change

1. **Before Making Changes**:
   - [ ] Run `vale [file] --config=.vale.ini` to establish baseline
   - [ ] Document specific issues being addressed
   - [ ] Note any dependencies or related files

2. **During Implementation**:
   - [ ] Make changes systematically (don't mix different issue types)
   - [ ] Test changes locally before committing
   - [ ] Verify links still work after path changes

3. **After Making Changes**:
   - [ ] Run `vale [file] --config=.vale.ini` to verify improvement
   - [ ] Test affected links and navigation
   - [ ] Check that content still makes technical sense
   - [ ] Update progress tracking
