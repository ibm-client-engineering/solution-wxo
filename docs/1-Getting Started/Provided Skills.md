---
id: skills
sidebar_position: 1
title: Provided Skills
---
## Watsonx Orchestrate ServiceNow API
### Top Level Skills
These are the primary skills in the Watsonx Orchestrate ServiceNow API and can be run once the skills are added and the application is connected
#### Retrieve all KBs from ServiceNow 
 - Returns all KBs in a table from ServiceNow
 - WXO name "JC - Retrieve all KBs from ServiceNow"
#### Retrieve all Tasks from ServiceNow
 - Returns all Tasks in a table from ServiceNow
 - WXO name "JC - Retrieve all Tasks from ServiceNow"
#### Retrieve all Incidents from ServiceNow
 - Returns all Incidents in a table from ServiceNow
 - WXO name "JC - Retrieve all Incidents from ServiceNow"
#### Create a new Task in ServiceNow
 - Creates a new task in ServiceNow
 - WXO name "JC - Create a new Task in ServiceNow"
#### Create a new Incident in ServiceNow
 - Creates a new Incident in ServiceNow
 - WXO name "JC - Create a new Incident in ServiceNow"

### Composite Skills

:::info
All skills denoted by "Composite Skill - " and labeled with "(Composite Skill)" are only for use in a Watsonx Orchestrate Skill Flow directly after one of the above "Top Level Skills". These skills will <strong>not work</strong> as a first step or by direct usage in Watsonx Orchestrate. This is because the ServiceNow sysID is a required parameter which is a hidden input. See [Creating Composite Skills](/solution-wxo/Import%20to%20Watsonx%20Orchestrate/compositeskills).
:::

#### Composite Skill - Retrieve a Task record in ServiceNow
 - Retrieves a specific task after specifying the sysID as an input parameter in the Skill Flow
 - WXO name "JC - Retrieve a specific Task in ServiceNow (Composite Skill)"
#### Composite Skill - Retrieve a specific KB in ServiceNow
 - Retrieves a specific KB after specifying the sysID as an input parameter in the Skill Flow
 - WXO name "JC - Retrieve a specific KB in ServiceNow (Composite Skill)"
#### Composite Skill - Retrieve a Incident record in ServiceNow
 - Retrieves a specific Incident after specifying the sysID as an input parameter in the Skill Flow
 - WXO name "JC - Retrieve a specific Incident in ServiceNow (Composite Skill)"
#### Composite Skill - Modify a specific Task in ServiceNow
 - Modifies a specific Task after specifying the sysID as an input parameter in the Skill Flow
 - WXO name "JC - Modify a specific Task in ServiceNow (Composite Skill)"
#### Composite Skill - Modify a specific Incident in ServiceNow
 - Modifies a specific Incident after specifying the sysID as an input parameter in the Skill Flow
 - WXO name "JC - Modify a specific Incient in ServiceNow (Composite Skill)"



<details>
<summary><b>Incomplete Skills</b></summary>

These are skills that you can see commented out in the script either unused or under construction.

##### Skills Under Construction

Create a new KB in ServiceNow (input schema needed for creating a KB)

##### Skills that require the non-friendly input parameter for tableName

:::info
To request table data from ServiceNow, the tableName (incidents, tasks or KBs) must be an input parameter. To do so the user would have to input the exact table name (e.g. for Tasks the user would need to input "sc_task" as the tableName) so these skills have been removed. These are to be used as reference and the path is to be used to specify the tableName needed.
:::

Retrieve table records from ServiceNow

Create a new table record in ServiceNow 

Composite Skill - Retrieve a specific record in ServiceNow

Composite Skill - Modify a specific record in ServiceNow

Composite Skill - Delete a specific record in ServiceNow

#### Delete Skills

:::warning
At this time the Delete skills have a bug. Watsonx Orchestrate does not succsessfuly validate an empty object response as a successful skill. The chat will say the skill has failed. However, the object in ServiceNow will be successfuly deleted.
:::
Composite Skill - Delete a specific record in ServiceNow

Composite Skill - Delete a specific Incident in ServiceNow

Composite Skill - Delete a specific Task in ServiceNow

Composite Skill - Delete a specific KB in ServiceNow

</details>