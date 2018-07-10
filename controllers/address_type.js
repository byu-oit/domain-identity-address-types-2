/*
 * Copyright 2017 Brigham Young University
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
'use strict';

// ----- Exported Endpoint Handlers -----
exports.getAddressType = function (req, res) {
  console.log("Invoked getAddressType")
  exports.getAddressType.mock(req, res);
};

exports.getAddressType.mock = function (req, res) {
  console.log("Invoked getAddressType.mock")
  res.send(req.swagger['x-mock_json'].address_types.values[0]);
};

exports.modifyAddressType = function (req, res) {
  console.log("Invoked modifyAddressType")
  exports.modifyAddressType.mock(req, res);
};

exports.modifyAddressType.mock = function (req, res) {
  console.log("Invoked modifyAddressType.mock")
  res.send(req.swagger['x-mock_json'].address_types.values[0]);
};

exports.removeAddressType = function (req, res) {
  console.log("Invoked removeAddressType")
  exports.removeAddressType.mock(req, res);
};

exports.removeAddressType.mock = function (req, res) {
  console.log("Invoked removeAddressType.mock")
  res.status(204).send();
};
