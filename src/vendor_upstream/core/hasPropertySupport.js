/**
 * Copyright (c) 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule hasPropertySupport
 * @typechecks
 */

function hasPropertySupport(property, value){
  var element = document.createElement('p');
  var body = document.getElementsByTagName('BODY')[0];

  body.insertBefore(element, null);

  element.style[property] = value;

  var st = window.getComputedStyle(element, null);
  var transform = st.getPropertyValue(property);

  var hasSupport = transform === value;
  document.body.removeChild(element);
  return hasSupport;
}

module.exports = hasPropertySupport;
