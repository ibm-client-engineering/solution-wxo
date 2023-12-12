---
id: uploadscript
sidebar_position: 1
title: Preparing the Script
---

### Download and prepare the yaml
#### Steps:
1. Download the latest .yaml file <a href="https://github.com/ibm-client-engineering/solution-wxo/blob/main/assets/servicenow/yamls/JC%20-%20WXOServiceNowAPI.yml">here</a>
2. Open the script and replace the ServiceNow instance URL with your ServiceNow instance URL:

```yaml
servers:
  - url: https://dev213519.service-now.com/
```

3. Upload the script to your Watsonx Orchestrate instance
    1. Click the hamburger menu icon at the top left of the page, then click "Skills"
    2. Click "Add skills" at the top right of the page
    3. Click the "From files" tab
    4. Click the upload box and select the yaml file
    5. Click next

4. Select the skills you need from the API (see <a href="/solution-wxo/servicenow/GettingStarted/skills">Provided Skills</a>)
5. Click add on the bottom right

The skills should now be available in the list of skills