# node-directadmin

Node.js module for [DirectAdmin](https://www.directadmin.com/)

## Installation

`npm install directadmin`

## Tests

 * Tests are implemented using `mocha` and `chai`. Run them with `npm test`.

## Options
- `forceJsonRequests` - This forces `json=yes` on all API calls. This will change the format returned by some functions. This is recommended on **new projects** (or existing ones if you feel like possibly introducing some bugs). This only defaults to `false` for backwards compatibility.

_Self explanatory_
- `username`
- `password`
- `serverUrl`
- `port`

## Examples

Check the examples folder for more specific use cases examples.

## License

Licensed under the Apache license, version 2.0 (the "license"); You may not use this file except in compliance with the license. You may obtain a copy of the license at:

    http://www.apache.org/licenses/LICENSE-2.0.html

Unless required by applicable law or agreed to in writing, software distributed under the license is distributed on an "as is" basis, without warranties or conditions of any kind, either express or implied. See the license for the specific language governing permissions and limitations under the license.
