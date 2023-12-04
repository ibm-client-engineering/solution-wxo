---
id: Walkthrough
sidebar_position: 1
title: Walkthrough
---
#### Headers
Watsonx orchestrate requires x-ibm-application headers for properly importing skills from yaml files. See the Watsonx Orchestrate documentation [here](https://www.ibm.com/docs/en/watson-orchestrate?topic=files-using-x-properties)

```yaml
openapi: 3.0.1
info:
  title: JC - ServiceNow Table API
  contact:
    name: Joe Cosenza
    email: jcosenz@us.ibm.com
  x-ibm-application-name: JC - ServiceNow Table API
  x-ibm-application-id: JC-ServiceNowAPI
  description: Allows you to perform create, read, update, and delete (CRUD) operations on existing ServiceNow tables
  version: latest
  x-ibm-application-icon: <svg width="30" height="30" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 400 360"><defs><style>.cls-1{fill:#f8b500;}.cls-2{fill:#231815;}</style></defs><title>JRK number</title><path class="cls-1" d="M354.6,295.5H39.4A39.4,39.4,0,0,1,0,256.1V39.4A39.4,39.4,0,0,1,39.4,0H354.6A39.4,39.4,0,0,1,394,39.4V256.1a39.4,39.4,0,0,1-39.4,39.4"/><path class="cls-2" d="M105.85,44.44h45.42V171.75c0,57.37-27.49,77.4-71.72,77.4-10.46,0-24.21-1.8-33.17-4.78l5.08-36.76a74.94,74.94,0,0,0,23.31,3.58c19.12,0,31.08-8.66,31.08-40Z"/><path class="cls-2" d="M337.15,240.18c-8.37,4.19-27.19,8.67-51.7,8.67C215.82,248.85,180,205.52,180,148.14c0-68.74,49-107,110-107,23.6,0,41.53,4.78,49.6,9l-9.26,36.16A98.32,98.32,0,0,0,292,78.81c-36.16,0-64.25,21.81-64.25,66.64,0,40.34,23.9,65.74,64.55,65.74,13.74,0,29-3,37.95-6.57Z"/></svg>
  x-ibm-skill-type: imported
externalDocs:
  url: https://docs.servicenow.com/?context=CSHelp:REST-Table-API
servers:
  - url: https://dev213519.service-now.com/
```

#### Security

This script usses basic authentication (username/password) combination, unlike the out-of-the-box ServiceNow skills

```yaml
security:
  - basicAuth: []
```
and under components:
```yaml           
  securitySchemes:
    basicAuth:
      type: http
      scheme: basic
```
#### Paths
The paths define the path of the API call. For this walkthrough, we'll use the path that allows us to modify Tasks. The name of the Tasks table in ServiceNow is sc_tasks, defined as the tableName parameter in the script, and hardcoded in the path below.

```yaml
paths:  
  /api/now/table/sc_task?sysparm_display_value=true&sysparm_exclude_reference_link=true:
```
:::note
The querys used in this script 'sysparm_display_value=true and sysparm_exclude_reference_link=true' are in the path. Most swagger validators will not allow this, however Watsonx Orchestrate allows query parameters in the path. These are used to recieve friendly values in our response from ServiceNow.
:::

### API Calls
Each skill on Watsonx Orchestrate is done by defining an API call. It is reccomended that you create a specific "get" call per skill (eg: Retrieve all TASKS from Servicenow). Having the user specify the tableName is not a friendly display. In the code below, 2 skills are identified:
1. <strong>get</strong> API call: JC - Retrieve all Tasks from ServiceNow
2. <strong>post</strong> API call:

```yaml
    get:
      summary: JC - Retrieve all Tasks from ServiceNow
      description: Retrieve all Tasks from ServiceNow
      operationId: retrieveTasks
      responses:
        '200':
          description: Results
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/getTable'
    post:
      summary: JC - Create a new Task in ServiceNow
      description: Create a new Task in ServiceNow
      operationId: createTask
      requestBody:
        content:
          application/json: 
            schema:
              $ref: '#/components/schemas/editTable'
```

### Responses
The responses from ServiceNow reference a schema to give only the wanted information

```yaml
      responses:
        '201':
          description: KB created
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/getthisTable'
```
#### Response Schema
```yaml
    getthisTable:
    #Use when getting a single table such as Tasks and Incidents from a composite (sysID required input) skill
      type: object
      properties:
        result:
          x-ibm-label: Results
          type: object
          properties:
              sys_id:
                $ref: '#/components/schemas/sysID'
              opened_at:
                type: string
              assignment_group:
                type: string
              assigned_to:
                type: string
              urgency:
                type: string
              opened_by:
                type: string
              state:
                type: string
              description:
                type: string
              short_description:
                type: string
              number:
                type: string
```
### Request Body
Request bodies define the content to be sent to Servicenow

```yaml
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/editTable'     
```
The editTable schema defines the properties of the request body when creating a new task:
```yaml
    editTable:
      type: object
      properties:
        short_description:
          x-ibm-label: Short Description
          type: string
          description: 'Short description of the record'
        description:
          x-ibm-label: Description
          x-ibm-multiline: true
          type: string
          description: 'Detailed description of the record'
        urgency:
          x-ibm-label: Urgency
          type: integer
          description: '3 - Low, 2 - Medium, 1 - High'
          enum:
            - 3
            - 2
            - 1
```

### Composite Skills
These skills need to be composite because a sysID parameter is required in the path (see {sys_ID}). To do this we use the Retrieve all Tasks skill first in the skill flow. When the user selects a task from the table, the sysID is captured as an output, then used as an input for the composite skill. This way, the user never has to worry about finding the ServiceNow sysID. Below are two composite Skills.

```yaml
  /api/now/table/sc_task/{sys_id}?sysparm_display_value=true&sysparm_exclude_reference_link=true:
    get:
      summary: JC - Retrieve a specific Task in ServiceNow (Composite only)
      description: Composite Skill - Retrieve a Task record in ServiceNow
      operationId: retrievethisTask
      parameters:
        - name: sys_id
          x-ibm-label: ServiceNow SysID (hidden)
          in: path
          required: true
          schema:
            $ref: '#/components/schemas/sysID'
      responses:
        '200':
          description: ok
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/getthisTable'    
    put:
      summary: JC - Modify a specific Task in ServiceNow (Composite only)
      description: Composite Skill - Modify a specific Task in ServiceNow
      operationId: modifythisTask
      parameters:
        - name: sys_id
          x-ibm-label: ServiceNow SysID (hidden)
          in: path
          required: true
          schema:
            $ref: '#/components/schemas/sysID'
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/editTable'          
      responses:
        '200':
          description: Record updated
          content:
            application/json: 
              schema:
                $ref: '#/components/schemas/getthisTable'
```

### Components
In the components sections there are required schemas to apply properties or define the output of the response from ServiceNow
##### sysID
'x-ibm-show: false' hides this parameter from the user. It is required so it can be part of the skill output to be used as a composite skill's input
##### getthisTable
Output schema for a single table output such as a single Task or Incident
##### getsingleKB
Output schema for a single table output for a KB
:::note
There is little difference in the output between an Incident table and a Task table so they use the same schema. KB's are different tables entirely and require their own outpit schema
:::
##### getKBs
Output schema for a table of KBs
##### getTable
Output schema for a table of Tasks or incidents
##### editTable
Schema to define the content when editing a Task or Incident


```yaml
components:
  schemas:
    sysID: #sysID is a required output for composite skills, not shown to user in table
      x-ibm-show: false
      type: string
    getthisTable: #Use when getting a single table such as Tasks and Incidents from a composite (sysID required input) skill
      type: object
      properties:
        result:
          x-ibm-label: Results
          type: object
          properties:
              sys_id:
                $ref: '#/components/schemas/sysID'
              opened_at:
                type: string
              assignment_group:
                type: string
              assigned_to:
                type: string
              urgency:
                type: string
              opened_by:
                type: string
              state:
                type: string
              description:
                type: string
              short_description:
                type: string
              number:
                type: string
    getsingleKB:
      type: object
      properties:
        result:
          x-ibm-label: Results
          type: object
          properties:
              sys_id:
                $ref: '#/components/schemas/sysID'
              last_updated_on:
                type: string
              content:
                type: string
              author:
                type: string
              short_description:
                type: string
              number:
                type: string
    getKBs:
      type: object
      properties:
        result:
          x-ibm-label: Knowledge Articles
          type: array
          items:
            type: object
            properties:
              sys_id:
                $ref: '#/components/schemas/sysID'
              last_updated_on:
                type: string
              content:
                type: string
              author:
                type: string
              short_description:
                type: string
              number:
                type: string
    getTable:     #Use for multiple table results (skills like Get all Tasks and Get all Incidents)
      type: object
      properties:
        result:
          x-ibm-label: Results
          type: array
          items:
            type: object
            properties:
              sys_id:
                $ref: '#/components/schemas/sysID'
              opened_at:
                type: string
              assignment_group:
                type: string
              assigned_to:
                type: string
              urgency:
                type: string
              opened_by:
                  type: string
              state:
                type: string
              description:
                type: string
              short_description:
                type: string
              number:
                type: string
```