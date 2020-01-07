/* globals describe, it */
/* jshint node: true, esnext: false, expr: true */
/* jscs: disable */
'use strict';

var Index = require('../index');
var expect = require('chai').expect;

describe('addon index', function() {
  describe('#exclusionFn', function() {
    it('should return false if a file is in the toInclude list', function () {

      let includeList = ['st-icon'];
      var placeholderRegex = new RegExp('.*');
      var result = Index.exclusionFn('st-icon.js', placeholderRegex, includeList);
      expect(result).to.be.false;
    });

    it('should return false if a file does not match the provided regex', function () {
      let includeList = [];
      var placeholderRegex = new RegExp(/components\//, 'i');

        var result = Index.exclusionFn('st-icon.js', placeholderRegex, includeList);
        expect(result).to.be.false;
      });

      it('should return true if a file is not in the toInclude list', function () {
        let includeList = ['st-input'];
        var placeholderRegex = new RegExp('.*');
        var result = Index.exclusionFn('st-icon.js', placeholderRegex, includeList);
        expect(result).to.be.true;
      });
  });
});

