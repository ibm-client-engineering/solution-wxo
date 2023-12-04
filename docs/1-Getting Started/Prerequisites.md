---
id: prerequisites
sidebar_position: 2
title: Prerequisites
---
#### In order to proceed you will need the following:
<ol>
  <li>Access to a Watsonx Orchestrate instance with <strong>build</strong> permissions</li>
  <li>Access to a ServiceNow instance and an account with with <strong>REST API</strong> permissions (this is usually an administrator type account)</li>
</ol>

:::note

For this documentation we will be using a specific developer ServiceNow instance. In order to use your own instance, you will need to replace some items with your own:
<ol>
  <li>Server URL</li>
  <li>Username</li>
  <li>Password</li>
</ol>

:::
To create a ServiceNow Developer account and your own instance, [do so here.](https://developer.servicenow.com/dev.do)

:::warningWarning: Using the Out-of-the-box ServiceNow Skils

IBM does not currently provide ServiceNow instances for use with Watsonx Orchestrate out-of-the-box ServiceNow Skills. It is reccomended to provision your own ServiceNow development account and instance for both this script and the out-of-the-box Skills. The out-of-the-box ServiceNow skills require the following:
<ol>
  <li>Server Name</li>
  <li>Username</li>
  <li>Password</li>
  <li>Client ID</li>
  <li>Client Secret</li>
</ol>
Using the script in this documentation <strong>does not require</strong> the use of a Client ID and Client secret from ServiceNow.
:::