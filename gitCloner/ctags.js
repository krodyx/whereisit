require ('shelljs/global');

// e.g. run('runDijkstra', 'repos/danielcodes/Algorithms/')
exports.run = function(tagname, repopath) {
  script = './scripts/runctags';
  cmd = [script, tagname, repopath].join(' ');
  var ret = exec(cmd, {silent:true});
  candidates = JSON.parse(ret.output);
  return candidates;
}
