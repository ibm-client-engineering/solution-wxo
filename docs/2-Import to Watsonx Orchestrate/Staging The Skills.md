---
id: stagingskills
sidebar_position: 2
title: Staging the Skills
---

Before we can use the newly imported skills, they must be "enhanced" in order to publish. This gives us the opportunity to stage each skill to properly display the output:
1. Click the hamburger menu icon at the top left of the page, then click "Skills"
2. Using the search bar, search for "JC - ". This will show all skills denoted with name JC - like our ServiceNow skills
3. For each skill, click the 3 dotted menu icon on the right and proceed with the following steps:
  1. Click enhance
  2. Click the output tab
  3. Click "edit response"
  4. Fill in the proper "friendly name" for each collumn for the results output

:::warning
The last coullumn in some skils will be "Empty". This is used to output the ServiceNow "sysID" for composite skills without exposing the value to the user. Leave the header for "Empty" in the output table blank.
:::

##### Example:

| Number | Short Description | State | Opened By | Urgency | Assigned to | Assignment Group | Opened at | |
|---|---|---|---|---|---|---|---|---|
| results.number | results.short_description | results.state | results.opened by | results.urgency | result.assigned_to |	result.assignment_group |	result.opened_at | "Empty" |

8. Click Publish at the bottom right