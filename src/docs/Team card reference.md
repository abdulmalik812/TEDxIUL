# TEDxIntegralUniversity Team Card Reference

This file contains reusable card templates for the Team page.

Last Updated:
July 2026

# ORGANIZING COORDINATOR CARD TEMPLATE

```jsx
<div className="team-card">

  <img
    src="IMAGE_URL_OR_IMPORT"
    alt="MEMBER_NAME"
    className="team-image"
  />

  <div className="team-overlay">

    <h3>MEMBER_NAME</h3>

    <p className="team-role">
      ROLE
    </p>

    <div className="team-divider"></div>

    <p className="team-event">
      TEDxIntegralUniversity
    </p>

  </div>

</div>
```

Replace:

IMAGE_URL_OR_IMPORT
→ Team member image

MEMBER_NAME
→ Full Name

ROLE
→ Designation
# CORE COMMITTEE CARD TEMPLATE

```jsx
<div className="team-card">

  <img
    src="IMAGE_URL_OR_IMPORT"
    alt="MEMBER_NAME"
    className="team-image"
  />

  <div className="team-overlay">

    <h3>MEMBER_NAME</h3>

    <p className="team-role">
      ROLE
    </p>

    <span className="team-badge">
      COMMITTEE
    </span>

    <div className="team-divider"></div>

    <p className="team-event">
      TEDxIntegralUniversity
    </p>

  </div>

</div>
```

Replace:

IMAGE_URL_OR_IMPORT
→ Team member image

MEMBER_NAME
→ Full Name

ROLE
→ Designation

COMMITTEE
→ Committee/Department
# TEAM GRID

```jsx
<section className="team-section">

  <h2 className="section-title">
    SECTION_TITLE <span className="accent">HIGHLIGHT</span>
  </h2>

  <p className="section-subtitle">
    SECTION_DESCRIPTION
  </p>

  <div className="team-grid">

      CARD_1

      CARD_2

      CARD_3

      CARD_4

      CARD_5

  </div>

</section>
```

Replace:

SECTION_TITLE

SECTION_DESCRIPTION

CARD_1 ... CARD_5
Statistics card template
```jsx
<div className="stat-card">
    <h2>NUMBER</h2>
    <p>LABEL</p>
</div>
```

Replace:

NUMBER

LABEL
CSS Classes Used:
team-section

section-title

section-subtitle

team-grid

team-card

team-image

team-overlay

team-role

team-badge

team-divider

team-event

last-card

stat-card

team-stats
Future Improvement

Once all pages are finalized, convert the repeated cards into a reusable React component.

Example:

<TeamCard
    image=""
    name=""
    role=""
    badge=""
/>

and render cards using:

teamData.map(...)