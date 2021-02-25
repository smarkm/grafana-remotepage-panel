# Grafana-remotepage-panel

[![Build](https://github.com/grafana/grafana-starter-panel/workflows/CI/badge.svg)](https://github.com/grafana/grafana-starter-panel/actions?query=workflow%3A%22CI%22)

This template is a starting point for building Grafana Panel Plugins in Grafana 7.0+, this panel aimd at load remote page as a panel use iframe.

## Features

* **variable expose** - this will expose variables to affect the dashboard variable
  ```JS
   window.parent.postMessage({"key1":"v1","key2":"v2"},"*")
  ```
* **redirectUrl** - you can trigger rediect from remote page use `postMessage` in remote page with 'forwardParam' key
   ```JS
   window.parent.postMessage({"forwardParam":"region=1"},"*")
   ```