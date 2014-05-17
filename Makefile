
serve: node_modules
	@node_modules/serve/bin/serve -Slojp 0

test: node_modules
	@sed 's/result-co/.\//' Readme.md | node_modules/jsmd/bin/jsmd --harmony
	@node_modules/hydro/bin/hydro test/*.test.js \
		--setup test/hydro.conf.js \
		--harmony

node_modules: package.json
	@packin install --meta $< --folder $@

.PHONY: serve test
