/* globals describe, it */
/* jshint node: true, esnext: false, expr: true */
/* jscs: disable */
'use strict';

var Index = require('../index');
var expect = require('chai').expect;
var ALL = 'all';
var NONE = 'none';

describe('addon index', function() {
  describe(
    '#filterComponents', function() {
      var MockFunnel = function(tree, options) {
        this.options = options;
      }
      var regex = new RegExp(/components\//, 'i');
      var mockInclude = function(str) {
        return {
          getConfig: function() {
            return {
              include: str
            };
          },
          exclusionFn: function(name, regex, include) {
            return {
              name: name,
              regex: regex,
              include: include
            };
          }
        };
      }
      it(
        'should return the same tree if include is set to ["all"]',
        function() {
          var tree = {};
          var result = Index.filterComponents.bind(mockInclude([ALL]))(tree, regex, MockFunnel);
          expect(result).to.equal(tree);
          var result2 = Index.filterComponents.bind(mockInclude(['', ALL]))(tree, regex, MockFunnel);
          expect(result).to.equal(tree);
        }
      );
      it(
        'should return an instance of Funnel if include array does not include the string "all"',
        function() {
          var tree = {};
          // anything but ALL
          [
            NONE,
            [NONE],
            [],
            ['components/st-single-component'],
            'components/st-single-component',
            [NONE, 'components/st-single-component'],
            '',
            true,
            false,
            null,
            undefined
          ].forEach(
            function(item) {
              var result = Index.filterComponents.bind(mockInclude(item))(tree, regex, MockFunnel);
              expect(result instanceof MockFunnel).to.be.true;
            }
          );
          // ALL
          var result = Index.filterComponents.bind(mockInclude([ALL]))(tree, regex, MockFunnel);
          expect(result instanceof MockFunnel).to.be.false;
        }
      );
      it(
        'should use the default regex if include is set to anything other than ["none"]',
        function() {
          var tree = {};
          // All of the following array items will use the INCLUDE ALL regex
          // and therefore will check to see if the component is in the array
          // before excluding it

          // anything but NONE
          [
            [ALL],
            ['', ALL],
            ['', NONE],
            ['components/st-single-component'], // uses the default regex
            [NONE, 'components/st-single-component'], // uses the default regex
            [ALL, 'components/st-single-component'], // uses the default regex
          ].forEach(
            function(item) {
              var funnel = Index.filterComponents.bind(mockInclude(item))(tree, regex, MockFunnel);
              if(funnel === tree) {
                // ALL returns the entire tree
                expect(item.includes('all')).to.be.true;
              } else {
                // anything but ALL will use the Funnel
                var exclude = funnel.options.exclude[0];
                expect(typeof exclude === 'function').to.be.true;
                var result = exclude('name');
                expect(result.regex).to.equal(regex);
              }
            }
          );
        }
      );
      it(
        'should use the "st-" excluding regex if include is set to ["none"], is not an array, or is a zero-length array',
        function() {
          var tree = {};
          // All of the following array items will EXCLUDE ALL 'st-' component regex
          // and therefore will exclude all 'st-' named components

          [
            NONE,
            // Passing any of the following is equivalent to NONE
            [],
            '',
            false,
            null,
            undefined
          ].forEach(
            function(item) {
              var funnel = Index.filterComponents.bind(mockInclude(item))(tree, regex, MockFunnel);
              var exclude = funnel.options.exclude[0];
              expect(typeof exclude === 'function').to.be.true;
              var result = exclude('name');
              expect(result.regex.toString()).to.equal('/components\\/st-/i');
            }
          );
        }
      );
    }
  );
  describe.only('#exclusionFn', function() {
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

    it('should return true if toInclude is NONE and it matches the regex', function() {
      let includeList = ['none'];
      var placeholderRegex = new RegExp('.*');
      var result = Index.exclusionFn('st-icon.js', placeholderRegex, includeList);
      expect(result).to.be.true;
    });

    it('should return false if toInclude is NONE and it does not match the regex', function() {
      let includeList = ['none'];
      var placeholderRegex = new RegExp(/components\//, 'i');
      var result = Index.exclusionFn('st-icon.js', placeholderRegex, includeList);
      expect(result).to.be.false;
    });
    it('should return false (non-excluding) if toInclude contains a component and we are using the default regex', function() {
      [
        'components/st-single-component',
        'components/st-single-component.js'
      ].forEach(
        function(includeList) {
          var placeholderRegex = new RegExp(/components\//, 'i');
          var result = Index.exclusionFn('components/st-single-component.js', placeholderRegex, includeList);
          expect(result).to.be.false;
        }
      );
    });
    it('should return true (excluding) if toInclude contains a component and we are using the st- regex', function() {
      // the only way to use the st regex is if includeList is exactly `NONE`
      // so these scenarios should never happen
      [
        ['components/st-single-component'], // this will never happen
        [NONE, 'components/st-single-component'], // this will never happen
        [ALL, 'components/st-single-component'], // this will never happen
      ].forEach(
        function(includeList) {
          var placeholderRegex = new RegExp(/components\/st-/, 'i');
          var result = Index.exclusionFn('components/st-single-component.js', placeholderRegex, includeList);
          expect(result).to.be.true;
        }
      );
    });
  });
});

