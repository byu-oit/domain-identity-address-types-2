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
exports.getAddressTypes = function (req, res) {
  console.log("Invoked getAddressTypes")
  exports.getAddressTypes.mock(req, res);
};

exports.getAddressTypes.mock = function (req, res) {
  console.log("Invoked getAddressTypes.mock")
  res.send(req.swagger.root['x-mock_json'].address_types);
};

exports.createAddressType = function (req, res) {
  console.log("Invoked createAddressType")
  exports.createAddressType.mock(req, res);
};

exports.createAddressType.mock = function (req, res) {
  console.log("Invoked createAddressType.mock")
  res.status(201).send(req.swagger.root['x-mock_json'].address_types.values[0]);
};
